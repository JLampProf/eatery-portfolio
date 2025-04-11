import {
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaYelp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1 className="footer-heading">The Fake Eatery</h1>
        <h2 className="footer-subheading">eatery@fake.co.jg</h2>
      </div>
      <div className="logos">
        <FaTwitter className="icon" />
        <FaWhatsapp className="icon" />
        <FaInstagram className="icon" />
        <FaFacebook className="icon" />
        <FaYoutube className="icon" />
        <FaYelp className="icon" />
      </div>
    </div>
  );
};

export default Footer;
