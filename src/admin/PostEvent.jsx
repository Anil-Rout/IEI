import React, { useState, useRef } from "react";
import './PostEvent.css';

function PostEvent({ isOpen, onClose }) {
console.log('PostEvent props:', { isOpen, onClose });
const [eventId, setEventId] = useState("");
const [message, setMessage] = useState("");
const modalRef = useRef(null);

const handlePost = async (e) => {
e.preventDefault();
console.log("Posting event with ID:", eventId);

try {
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
    setEventId("");
    } else {
    setMessage("❌ Failed to post event");
    console.error("Error:", data);
    }
} catch (error) {
    console.error("Error:", error);
    setMessage("❌ Network error");
}
};

const handleOutsideClick = (e) => {
if (modalRef.current && !modalRef.current.contains(e.target)) {
    console.log('Clicked outside, closing modal');
    onClose();
}
};

if (!isOpen) return null;

return (
<div className="modal-overlay" onClick={handleOutsideClick}>
    <div className="modal-content" ref={modalRef}>
    <button className="modal-close" onClick={onClose} aria-label="Close modal">
        &times;
    </button>
    <div className="post-event-form">
        <h2>Post Event</h2>
        <form onSubmit={handlePost}>
        <label htmlFor="eventId">Event ID</label>
        <input
            id="eventId"
            type="text"
            placeholder="Event ID"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            required
        />
        <button type="submit">Post Event</button>
        </form>
        {message && <p>{message}</p>}
    </div>
    </div>
</div>
);
}

export default PostEvent;