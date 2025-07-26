// src/pages/EditEvent.jsx
import React, { useState } from "react";
import './EditEvent.css';

const EditEvent = () => {
const [formData, setFormData] = useState({
eventId: "",
title: "",
description: "",
date: "",
});

const [message, setMessage] = useState("");

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
    const res = await fetch("https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/edit-event", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
    setMessage("✅ Event updated successfully!");
    } else {
    setMessage(`❌ Error: ${data.message}`);
    }
} catch (err) {
    console.error("Error:", err);
    setMessage("❌ Failed to update event.");
}
};

return (
<div className="edit-event-form">
    <h2>Edit Event</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
    <input
        type="text"
        name="eventId"
        placeholder="Event ID"
        value={formData.eventId}
        onChange={handleChange}
        required
        className="w-full p-2 border"
    />
    <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border"
    />
    <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border"
    />
    <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border"
    />
    <button type="submit">
        Update Event
    </button>
    </form>
    {message && <p >{message}</p>}
</div>
);
};

export default EditEvent;
