import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h1>Contact US</h1>

        <a href="mailto:rohantalwadia@gmail.com" className="email">Email</a>

        <div className="sub-footer-container">
          {/* <a href="#" class="fa fa-instagram"/>
          <a href="https://twitter.com/rohan_talwadia" class="fa fa-twitter"/>
          <a href="#" class="fa fa-github"/>
          <a href="https://www.linkedin.com/in/rohantalwadia/" class="fa fa-linkedin"/>
          <a href="https://wa.me/917597226881" class="fa fa-whatsapp"/> */}
        </div>

        <div className="copyright">
          <p> © 2022 SA.L.E.T. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
