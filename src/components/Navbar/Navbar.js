import React, { useState } from "react";
import "./Navbar.css";
import { BiLogoTwitter, BiLogoYoutube, BiLogoSnapchat } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [color, setColor] = useState("#fff");
  function handleClick() {
    const newColor = color === "#fff" ? "#000" : "#fff";
    setColor(newColor);
  }
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
          <Link to="/Products">PRODUCTS</Link>
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
