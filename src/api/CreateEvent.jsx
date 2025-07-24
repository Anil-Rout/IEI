import { useState } from "react";
import './CreateEvent.css';

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = { title, description, date };

    const response = await fetch("https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/create-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(" Event created successfully!");
    } else {
      setMessage(" Failed to create event: " + result.message);
    }
  };

  return (
    <div className="create-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Create Event</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateEvent;
