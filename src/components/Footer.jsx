import './Footer.css';
import RotatingText from '../../public/RotatingText';
function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <a  href="#"><div className="logo">
         <img src="/iei_Logo.jpg" alt="Institution of Engineers (India) Logo" /> 
        </div>
        <p>Tʜᴇ Iɴꜱᴛɪᴛᴜᴛɪᴏɴ Oꜰ Eɴɢɪɴᴇᴇʀɪɴɢ(Iɴᴅɪᴀ)</p></a>
      </div>
      <div className="container">
        <p>© 2025 Institution of Engineers (India). All rights reserved.</p>
        <p>
          8 Gokhale Road, Kolkata, West Bengal, India | Phone: +91-33-2223-8311 | Email: info@ieindia.org
        </p>
        <div>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Use</a>
        </div>
      </div>
<div className="contact-info">
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
    </footer>
  );
}

export default Footer;