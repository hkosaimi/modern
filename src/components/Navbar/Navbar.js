import React, { useState, useRef } from "react";
import "./Navbar.css";
import { BiLogoTwitter, BiLogoYoutube, BiLogoSnapchat } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/" className="child">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/Vision">VISION</Link>
        </li>
      </ul>
      <div className="home__social">
        <BiLogoTwitter />
        <BiLogoYoutube />
        <BiLogoSnapchat />
        <AiFillInstagram />
        <IoLogoWhatsapp />
      </div>
    </div>
  );
}

export default Navbar;
