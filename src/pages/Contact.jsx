import './Contact.css';

function Contact() {
  return (
    <div className="container page">
      <h1>Contact Us</h1>
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
          <h2>Send a Message</h2>
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