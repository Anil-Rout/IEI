import React, { useState, useEffect } from 'react';
import './Home.css';
import SplitText from "./SplitText";

function Home() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
const images = [
        '/eng1.jpg',
        '/eng2.jpg',
        '/eng3.jpg'
      ];
      const [currentImage, setCurrentImage] = React.useState(0);

      React.useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
      }, [images.length]);

      return (
        <>
          <section>
            <div className="container mx-auto">
              <div className="hero" style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <h1><SplitText
  text="Welcome To IEI"
 className="text-white text-[3.5rem] font-bold"
  onLetterAnimationComplete={handleAnimationComplete}

/></h1>
                <p>
                  The Institution of Engineers (India) is a premier professional body
                  fostering engineering excellence and innovation since 1920.
                </p>
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
    };

export default Home;






 