// src/components/PostEvent.jsx
import React, { useState } from "react";
import './PostEvent.css';


const PostEvent = () => {
const [eventId, setEventId] = useState("");
const [message, setMessage] = useState("");

const handlePost = async (e) => {
e.preventDefault();

try {
    console.log("Posting event with ID:", eventId);

    const response = await fetch(
    "https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/post-event",
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
    }
    );

    const data = await response.json();

    if (response.ok) {
    setMessage(data.message);
    } else {
    setMessage("Failed to post event");
    console.error("Error:", data);
    }
} catch (error) {
    console.error("Error:", error);
    setMessage("Network error");
}
};

return (
<div className="post-event-form">
    <h2>Post Event</h2>
    <form onSubmit={handlePost}>
    <input
        type="text"
        placeholder="Event ID"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
    />
    <button type="submit">
        Post Event
    </button>
    </form>
    {message && <p>{message}</p>}
</div>
);
};

export default PostEvent;
