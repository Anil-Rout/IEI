import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const images = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86c3b?q=80&w=2070',
    'https://images.unsplash.com/photo-1516321310762-7d3e6f051de7?q=80&w=2070',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="hero" style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <h1>Welcome to Institution of Engineers (India)</h1>
            <p>
              The Institution of Engineers (India) is a premier professional body
              fostering engineering excellence and innovation since 1920.
            </p>
            <button className="btn">Learn More</button>
            <button className="btn next-image-btn" onClick={handleNextImage}>
              Next Image
            </button>
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