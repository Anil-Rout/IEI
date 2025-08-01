import React, { useState, useRef } from "react";
import './EditEvent.css';

function EditEvent({ isOpen, onClose }) {
console.log('EditEvent props:', { isOpen, onClose });
const [formData, setFormData] = useState({
eventId: "",
title: "",
description: "",
date: "",
});
const [message, setMessage] = useState("");
const modalRef = useRef(null);

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
    setFormData({ eventId: "", title: "", description: "", date: "" });
    } else {
    setMessage(`❌ Error: ${data.message}`);
    }
} catch (err) {
    console.error("Error:", err);
    setMessage("❌ Failed to update event.");
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
    <div className="edit-event-form">
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="eventId">Event ID</label>
        <input
            id="eventId"
            type="text"
            name="eventId"
            placeholder="Event ID"
            value={formData.eventId}
            onChange={handleChange}
            required
        />
        <label htmlFor="title">Event Title</label>
        <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
        />
        <label htmlFor="description">Event Description</label>
        <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
        />
        <label htmlFor="date">Event Date</label>
        <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
        />
        <button type="submit">Update Event</button>
        </form>
        {message && <p>{message}</p>}
    </div>
    </div>
</div>
);
}

export default EditEvent;