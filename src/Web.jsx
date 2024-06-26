import React, { useState } from "react";
import menu from "./assets/menu.svg";

function Web() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div id="myhome" className="maincontent">
        <div className="info">
          <p>
            <h2>Welcome to Our Business</h2>
            <br></br>
            Your one-stop solution for all your needs.
          </p>
          <button type="submit">Get in Touch</button>
        </div>
      </div>
      <div  id="myservices" className="services">
        <h2 >Our Services</h2>
        <p>
          We offer a wide range of services to help your business grow:<br></br>
          Consulting Services<br></br>
          Professional Training<br></br>
          Marketing and Advertising Solutions We offer a wide range of services
          to help your business grow:<br></br>
          Consulting Services<br></br>
          Professional Training<br></br>
          Marketing and Advertising Solutions We offer a wide range of services
          to help your business grow:<br></br>
          Consulting Services<br></br>
          Professional Training<br></br>
          Marketing and Advertising Solutions
        </p>
      </div>

      <div className="about">
        <h3>About Us</h3>

        <p id="myabout">
          We are a dedicated team with over 10 years of experience in <br></br>
          business development and management. Our mission is to <br></br>
          provide high-quality services tailored to each client's unique
        </p>
      </div>

      <div id="mycontact" className="contact">
        <h4>Contact Us</h4>
        <p>Phone: +234 810 287 1335 Email: alexenogiasun@gmail.com</p>
        <p><a href="mailto: alexjaunty1@gmail.com" class="text-white">Email us</a></p>
      </div>
      <div className="footer">
        <p>©2024 Small Business. All rights reserved.</p>
      </div>
    </>
  );
}

export default Web;
