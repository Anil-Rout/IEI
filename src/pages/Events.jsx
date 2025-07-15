import './Events.css';
function Events() {
  return (
    <div className="container page">
      <h1> <strong>Events</strong></h1>
      <div className="event-card">
        <h2>Annual Engineering Conference</h2>
        <p>Date: December 2025 | Location: Kolkata</p>
        <p>Join us for our annual conference featuring keynote speakers and technical sessions.</p>
      </div>
      <div className="event-card">
        <h2>Workshop on Sustainable Engineering</h2>
        <p>Date: January 2026 | Location: Online</p>
        <p>Learn about sustainable practices in engineering with industry experts.</p>
      </div>
    </div>
  );
}

export default Events;