import { useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import './CreateEvent.css';

function CreateEvent({ isOpen, onClose }) {
  console.log('CreateEvent props:', { isOpen, onClose });
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("❌ You must be signed in to create an event.");
      return;
    }

    const eventData = {
      title,
      description,
      date,
      createdBy: user.id,
    };

    try {
      const response = await fetch("https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/create-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Event created successfully!");
        setTitle("");
        setDescription("");
        setDate("");
      } else {
        setMessage(`❌ Failed to create event: ${result.message}`);
      }
    } catch (err) {
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
        <div className="create-event-form">
          <h2>Create Event</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Event Title</label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <label htmlFor="description">Event Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <label htmlFor="date">Event Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button type="submit">Create Event</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;