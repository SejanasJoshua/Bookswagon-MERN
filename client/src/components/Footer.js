import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footerOuterGrid">
        <div className="footerGridContainer">
          <div className="footerGridRow1">
            <div className="footerGridRow1Col">
              <h6>Company</h6>

              <p>About Us</p>
              <p>Career</p>
              <p>Blog</p>
              <p></p>
            </div>
            <div className="footerGridRow1Col">
              <h6>Policies</h6>
              <p>Privacy Policies</p>
              <p>Terms of Use</p>
              <p>Secure Shopping</p>
              <p>Copyright Policy</p>
            </div>
            <div className="footerGridRow1Col">
              <h6>Help</h6>
              <p>Payment</p>
              <p>Shipping</p>
              <p>Return</p>
              <p>FAQ</p>
            </div>
            <div className="footerGridRow1Col">
              <h6>Misc</h6>
              <p>Affiliate</p>
              <p>Request a Book</p>
              <p>Site Map</p>
            </div>
            <div className="footerSVG">
              <h6>Follow Us</h6>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaPinterestP />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className="footerGridRow2">
            <b>Address</b>:&nbsp;SR Ecommerce Factory Pvt. Ltd., 2/14, ground
            floor , Ansari road , Daryaganj Delhi 110002&nbsp; |&nbsp;{" "}
            <b>Email</b>
            :&nbsp; customerservice@bookswagon.com&nbsp;|&nbsp; <b>Phone</b>
            #:&nbsp; 011-41521153
          </div>
          <div className="footerGridRow2">
            Copyright 2017. Bookswagon.com. All Rights Reserved | Privacy
            PolicyTerms & conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
