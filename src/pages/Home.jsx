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
    </>
  );
}

export default Home;