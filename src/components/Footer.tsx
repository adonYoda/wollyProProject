import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "../iconComponents";





const Footer = () => {
  return (
    <>
      <div>
        <h2>Account</h2>
        <Link to="/signIn">Sign In</Link>
        <Link to="/registrationPage">Register</Link>
        <Link to="/orderStatus">Order Status</Link>
      </div>
      <div>
        <h2>About Us</h2>
        <Link to="/ourStory">Our Story</Link>
        <Link to="/careers">Careers</Link>
      </div>
      <div>
        <h2>Help</h2>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/orderStatus">Order Status</Link>
        <Link to="/returns">Returns</Link>
      </div>
      <div>
        <h2>Follow Us!</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, vel?
          Veritatis optio distinctio, nobis exercitationem debitis, ea ipsum
          tempora cumque, atque ad qui voluptatum dicta dolor expedita natus
          vitae dolorem?
        </div>
        <div>
          < Instagram />
          < Facebook />
          <Twitter />
        </div>
      </div>
    </>
  );
};

export default Footer;
