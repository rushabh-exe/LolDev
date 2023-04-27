import React from 'react';

function Footer() {
  return (
<>

<footer className="footer">
   <div className="footer-content">
      <div className="footer-logo">
         <img src="https://picsum.photos/50/50" alt="Footer Logo" />
         <h3>Vonty</h3>
      </div>
      <div className="footer-links">
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
         </ul>
         <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQ</a></li>
         </ul>
      </div>
      <div className="footer-social">
         <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
         <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
         <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
         <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
      </div>
   </div>
   <div className="footer-bottom">
      <p>&copy; 2023 Vonty. All rights reserved.</p>
   </div>
</footer>
</>
  );
}

export default Footer;
