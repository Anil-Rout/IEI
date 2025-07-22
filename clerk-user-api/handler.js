const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: process.env.AWS_REGION || "ap-south-1" });

module.exports.syncUser = async (event) => {
  try {
    const body = JSON.parse(event.body);
    console.log("Received body:", body);

    const { userId, email, username } = body;

    if (!userId || !email || !username) {
      console.error("Missing fields", body);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    const item = {
      userId: { S: userId },
      email: { S: email },
      username: { S: username },
      type: { S: "USER" },
      createdAt: { S: new Date().toISOString() },
    };

    console.log("Inserting to:", process.env.USER_PROFILE_TABLE);
    await client.send(
      new PutItemCommand({
        TableName: process.env.USER_PROFILE_TABLE,
        Item: item,
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User saved successfully" }),
    };
  } catch (err) {
    console.error("Error syncing user:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: err.message }),
    };
  }
};
