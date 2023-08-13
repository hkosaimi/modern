import "./Home.css";
import { BiLogoTwitter, BiLogoYoutube, BiLogoSnapchat } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Home() {
  return (
    <>
      <div id="home" className="container">
        <div className="container__top">
          <h1>LOVE PEOPLE.</h1>
          <h1>USE THINGS. THE OPPOSITE NEVER WORKS.</h1>
        </div>
        <div className="container__navbar">
          <ul>
            <li>
              <a className="child" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li>
              <a>PRODUCTS</a>
            </li>
          </ul>
        </div>
        <div className="container__social">
          <BiLogoTwitter />
          <BiLogoYoutube />
          <BiLogoSnapchat />
          <AiFillInstagram />
          <IoLogoWhatsapp />
        </div>
      </div>
    </>
  );
}

export default Home;
