import React from "react";
import "./index.css";
const Footer = (props) => {
  return (
    <div className="fotter-section">
      <div className="fotter-area">
        <div className="footerItem1">
          <ul>
            <li>
              <img src="/logo1.webp" alt="checking"></img>
            </li>
            <li>
              <p>
                Seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua.
              </p>
            </li>
            <li>
              <p>theaisle@elated-themes.com</p>
              <p>+(123) 456 - 7890 - 456 - 7890</p>
              <p>35 W 46nd Street New York</p>
            </li>
          </ul>
        </div>

        <div className="footerItem">
          {" "}
          <ul>
            <li>WEDDING PLANNER FAQS</li>
            <li>Why Hire A Planner?</li>
            <li>How Can I Make An</li>
            <li>Appointment?</li>
            <li>How To Choose A Venue</li>
            <li>Event Catalogue</li>
            <li>Accept</li>
          </ul>
        </div>

        <div className="footerItem">
          {" "}
          <ul>
            <li>ABOUT US</li>
            <li>Bridesmaids</li>
            <li>November 22,</li>
            <li>2020 Groomsmen</li>
            <li>November 22,</li>
            <li>2020 JEWELRY</li>
            <li>November 22, 2020</li>
          </ul>
        </div>

        <div className="footerItem">
          <ul>
            <li>INSTAGRAM</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright ©2022 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </div>
  );
};
export default Footer;
