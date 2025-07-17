
import './Contact.css';
import RotatingText from './RotatingText';

function Contact() {
  return (
    <div className="container page">
      <h1><strong>Contact Us</strong></h1>
      <div className="contact-grid">
        <div>
          <h2>Get in Touch</h2>
          <p>
            8 Gokhale Road, Kolkata, West Bengal, India<br />
            Phone: +91-33-2223-8311<br />
            Email: info@ieindia.org
          </p>
        </div>
        <div>
          <h2>
            Send a <RotatingText
              texts={['Message', 'Query', 'Feedback']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 inline-flex justify-center rounded-lg rotate-blue"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}  
              animate={{ y: 0 , opacity: 2 }} 
              // exit={{ y: "-120%", backgroundColor: "#06b6d4" }}  
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h2>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div>
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;