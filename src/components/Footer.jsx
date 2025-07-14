import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  );
}

export default Footer;