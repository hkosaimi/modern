import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";
import { BiLogoTwitter, BiLogoYoutube, BiLogoSnapchat } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
function Contact() {
  return (
    <>
      <div className="contact">
        <h1>CONTACT</h1>
        <h1>We're happy to hear from you soon.</h1>
        <div className="contact__info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
          <p>
            E-mail: <span>hkosaimi@gmail.com</span>
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6953.832242968805!2d47.977093630581116!3d29.37274509272782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84e60371c6d7%3A0xe8c68a662fc178fe!2z2LPZiNmCINin2YTZhdio2KfYsdmD2YrYqQ!5e0!3m2!1sar!2skw!4v1692036150323!5m2!1sar!2skw"
            style={{ border: 0, margin: "2rem 0" }}
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Contact;
