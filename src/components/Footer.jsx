import React from "react";
import logo from "../assets/logo-white.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

import Button from '../components/Button';

const Footer = () => {
  return (
    <footer className="footer-wrapper bg-darkBlue text-white flex flex-col sm:flex-row justify-between">

      <div className="left flex flex-col justify-between sm:flex-row sm:basis-1/2">
        <div className="socials flex flex-col justify-between items-center">
          <div>
            <img className="cursor-pointer" src={logo} alt="logo" />
          </div>
          <div className="flex my-8 space-x-3 sm:my-0">
            <img
              className="cursor-pointer hover:opacity-50"
              src={facebook}
              alt="facebook"
            />
            <img
              className="cursor-pointer hover:opacity-50"
              src={youtube}
              alt="yt"
            />
            <img
              className="cursor-pointer hover:opacity-50"
              src={twitter}
              alt="twitter"
            />
            <img
              className="cursor-pointer hover:opacity-50"
              src={pinterest}
              alt="pinterest"
            />
            <img
              className="cursor-pointer hover:opacity-50"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
        <div className="links-one text-center mb-4 mx-auto sm:mx-0 sm:text-left sm:mb-0">
            <ul className="space-y-4">
            <li><a className="hover:text-limeGreen transition-all" href="#">About Us</a></li>
            <li><a className="hover:text-limeGreen transition-all" href="#">Contact</a></li>
            <li><a className="hover:text-limeGreen transition-all" href="#">Blog</a></li>
            </ul>
        </div>
        <div className="links-two text-center mb-10 mx-auto sm:mx-0 sm:mb-0 sm:text-left">
            <ul className="space-y-4"> 
                <li><a className="hover:text-limeGreen transition-all" href="#">Carrers</a></li>
                <li><a className="hover:text-limeGreen transition-all" href="#">Support</a></li>
                <li><a className="hover:text-limeGreen transition-all" href="#">Privacy Policy</a></li>
            </ul>
        </div>
      </div>

      <div className="right flex flex-col items-center sm:items-end sm:justify-around sm:basis-1/2">
        <Button/>
        <p className="opacity-50 mt-10 sm:mt-0">&copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
