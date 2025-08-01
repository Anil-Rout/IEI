import './Events.css';
import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/get-all-events"
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

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="event-list">
      <h2>All Published Events</h2>
      {events.length === 0 ? (
        <p>No published events available.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.eventId}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Created At: {new Date(event.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Events;
