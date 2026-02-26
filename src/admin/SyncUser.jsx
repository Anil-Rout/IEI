import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import axios from "axios";

const SyncUser = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user || !user.primaryEmailAddress) return;

    const sync = async () => {
      try {
        await axios.post("https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/sync-user", {
          userId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          username: user.username || user.firstName || "User",
        });
        console.log("User sync complete");
      } catch (err) {
        console.error("User sync failed:", err.message);
      }
    };

    sync();
  }, [isLoaded, isSignedIn]);

  return null;
};

export default SyncUser;
