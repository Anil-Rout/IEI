import { useEffect, useState, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import './HistoryYouMade.css';

function HistoryYouMade({ isOpen, onClose }) {
console.log('HistoryYouMade props:', { isOpen, onClose });
const { user } = useUser();
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const modalRef = useRef(null);

useEffect(() => {
if (!user) {
    setError("You must be signed in to view your events.");
    setLoading(false);
    return;
}

const fetchAdminEvents = async () => {
    try {
    const userId = user.id;
    const response = await fetch(
        `https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/get-admin-events?createdBy=${userId}`
    );

    const data = await response.json();

    if (response.ok) {
        setEvents(data.events || []);
    } else {
        throw new Error(data.message || "Failed to fetch events");
    }
    } catch (err) {
    setError(err.message);
    } finally {
    setLoading(false);
    }
};

fetchAdminEvents();
}, [user]);

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
    <div className="history-you-made">
        <h2>History You Made</h2>
        {loading && <p className="loading">Loading events...</p>}
        {error && <p className="error">❌ Error: {error}</p>}
        {!loading && !error && events.length === 0 ? (
        <p className="no-events">No events created by you yet.</p>
        ) : (
        <ul className="event-list">
            {events.map((event) => (
            <li key={event.eventId} className="event-item">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <p>Created At: {new Date(event.createdAt).toLocaleString()}</p>
            </li>
            ))}
        </ul>
        )}
    </div>
    </div>
</div>
);
}

export default HistoryYouMade;