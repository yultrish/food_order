import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-cards">
          <div className="card">
            <div className="contact center">
              <h2>Contact Us</h2>
            </div>

            <div className="text-icon">
              <FaLocationDot className="icon f-icon"/>
              <p style={{marginTop:"0.2rem"}}>Location</p>
            </div>

            <div className="text-icon">
              <IoIosCall className="icon f-icon"/>
              <p>call +2335436789023</p>
            </div>

            <div className="text-icon">
              <MdEmail className="f-icon"/>
              <p>project@gmail.com</p>
            </div>
          </div>

          <div className="card">
            <div className="contact center">
              <h2>Yultrish</h2>
            </div>

            <div className="footer-text">
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
            </div>

            <div className="text-icon">
              <div className="social-icon">
                <FaFacebookF />
              </div>
              <div className="social-icon">
                <FaTwitter />
              </div>
              <div className="social-icon">
                <FaLinkedinIn />
              </div>
              <div className="social-icon">
                <FaInstagram />
              </div>
              <div className="social-icon">
                <FaPinterest />
              </div>
            </div>

            
          </div>

          <div className="card">
              <div className="contact center">
                <h2>Opening Hours</h2>
              </div>

              <div className="text-icon">
                <p>Everyday</p>
              </div>

              <div className="text-icon">
                <p style={{marginBottom:"1rem"}}>10.00 Am -10.00 Pm</p>
              </div>
            </div> 

        </div>
        <div className="footer-copy-right">
        <div className="copy-right">
        <MdCopyright className="" style={{fontSize:"1.5rem", marginTop:"0.1rem"}}/>
              <p style={{marginTop:"0.2rem"}}>2023 All Rights Reserved By Free Html Templates</p>
            </div> 

            <div className="text-icon">
        <MdCopyright className="" style={{fontSize:"1.5rem", marginTop:"0.1rem"}}/>
              <p style={{marginTop:"0.2rem"}}>Distributed By ThemeWagon</p>
            </div> 
        </div>
      </footer>
    </>
  );
};

export default Footer;
