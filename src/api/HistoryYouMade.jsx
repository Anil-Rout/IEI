import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import './HistoryYouMade.css';

function HistoryYouMade() {
const { user } = useUser();
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
if (!user) return;

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

if (loading) return <p>Loading events...</p>;
if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

return (
<div>
    <h2>History You Made</h2>
    {events.length === 0 ? (
    <p>No events created by you yet.</p>
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

export default HistoryYouMade;
