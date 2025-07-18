import React, { useState, useEffect } from 'react';
import './Home.css';
import SplitText from "./SplitText";
import Carousel from './Carousel';

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
              </div>
              </section>

              <section>
                  <div className="container mx-auto">
                    <h2 className="div-head">Explore More</h2>
                    <div className="carousel-container-wrapper">
                      <div className="carousel-row">
                        <Carousel
                          baseWidth={380}
                          autoplay={true}
                          autoplayDelay={3000}
                          pauseOnHover={true}
                          loop={true}
                          round={false}
                        />
                        <Carousel
                          baseWidth={380}
                          autoplay={true}
                          autoplayDelay={3000}
                          pauseOnHover={true}
                          loop={true}
                          round={false}
                        />
                        <Carousel
                          baseWidth={380}
                          autoplay={true}
                          autoplayDelay={3000}
                          pauseOnHover={true}
                          loop={true}
                          round={false}
                        />
                      </div>
                      <div className="carousel-row">
                        <Carousel
                          baseWidth={380}
                          autoplay={true}
                          autoplayDelay={3000}
                          pauseOnHover={true}
                          loop={true}
                          round={false}
                        />
                        <Carousel
                          baseWidth={380}
                          autoplay={true}
                          autoplayDelay={3000}
                          pauseOnHover={true}
                          loop={true}
                          round={false}
                        />
                        <Carousel
                          baseWidth={380}
                          autoplay={true}
                          autoplayDelay={3000}
                          pauseOnHover={true}
                          loop={true}
                          round={false}
                        />
                        
                      </div>
                    </div>
                  </div>
                </section>
              <section>
                <div className="container mx-auto">
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
                  <div className="container mx-auto">
                    <h2 className="div-head">What IEIndia Does</h2>
                    <div className="features">
                      <div className="feature-card">
                        <h2>Advocacy</h2>
                        <p>
                          Promoting engineering standards and policies to influence national and
                          international engineering practices.
                        </p>
                      </div>
                      <div className="feature-card">
                        <h2>Research & Development</h2>
                        <p>
                          Supporting cutting-edge research and innovation through grants,
                          collaborations, and publications.
                        </p>
                      </div>
                      <div className="feature-card">
                        <h2>Education & Training</h2>
                        <p>
                          Providing continuous learning opportunities through courses,
                          webinars, and technical training programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="container mx-auto">
                    <h2 className="div-head">IEI Highlights</h2>
                    <div className="features">
                      <div className="feature-card">
                        <h2>Global Recognition</h2>
                        <p>
                          IEI is recognized by international bodies, enabling members to collaborate
                          globally and gain worldwide credibility.
                        </p>
                      </div>
                      <div className="feature-card">
                        <h2>Innovative Projects</h2>
                        <p>
                          Spearheading impactful engineering projects that address societal
                          challenges and promote sustainable development.
                        </p>
                      </div>
                      <div className="feature-card">
                        <h2>Awards & Honors</h2>
                        <p>
                          Celebrating excellence through prestigious awards for outstanding
                          contributions in engineering fields.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="container mx-auto">
                    <h2 className="div-head">About IEI</h2>
                    <div className="features">
                      <div className="feature-card">
                        <h2>Our Mission</h2>
                        <p>
                          To advance the engineering profession and promote technical excellence
                          for the betterment of society.
                        </p>
                      </div>
                      <div className="feature-card">
                        <h2>Our History</h2>
                        <p>
                          Established in 1920, IEI has grown to become India’s largest
                          multidisciplinary professional body of engineers.
                        </p>
                      </div>
                      <div className="feature-card">
                        <h2>Our Community</h2>
                        <p>
                          A vibrant network of engineers, researchers, and professionals
                          driving innovation across diverse disciplines.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
               
        </>
      );
    };

export default Home;






 