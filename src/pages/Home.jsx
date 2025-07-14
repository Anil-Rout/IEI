import './Home.css';

function Home() {
  return (
    <> 
    <section>
    <div className="container">
      <div className="hero">
        <h1>Welcome to Institution of Engineers (India)</h1>
        <p>
          The Institution of Engineers (India) is a premier professional body
          fostering engineering excellence and innovation since 1920.
        </p>
        <button className="btn">Learn More</button>
      </div>
      <div className="features">
        <div className="feature-card">
          <h2>Membership</h2>
          <p>
            Join our community of engineers and gain access to exclusive
            resources and networking opportunities.
          </p>
        </div>
        <div className="feature-card">
          <h2>Events</h2>
          <p>
            Participate in our seminars, workshops, and conferences to stay
            updated with the latest in engineering.
          </p>
        </div>
        <div className="feature-card">
          <h2>Certifications</h2>
          <p>
            Enhance your career with our professional certification programs
            recognized worldwide.
          </p>
        </div>
      </div>
    </div>
    </section>
    <section>
          <div className="container page">
      <h1>Events</h1>
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
    </section>
    </>
  );
}

export default Home;