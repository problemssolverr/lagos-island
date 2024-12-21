import React from "react";
import logo from '../assets/logo.jpg'
import backgroundImage from "../assets/footer_bg.jpg"; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-8"
      style={{ backgroundImage: `url(${backgroundImage})`, 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
      backgroundBlendMode: 'overlay',
    }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={logo} // Replace with actual logo path
            alt="COC Logo"
            className="h-16 w-auto rounded-full"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold uppercase mb-2">
          The Church of Christ - Lagos Island
        </h3>

        {/* Copyright Text */}
        {/* <p className="text-sm mb-4">
          &copy; Copyright COC - ISLAND 2024. All Rights Reserved. <br />
          Designed and Developed by problemssolver
        </p> */}
        <div>

        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
          <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
          <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
          <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
          <ion-icon name="logo-youtube"></ion-icon>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Bottom Text */}
        <div className="text-xs">
          &copy; 2024 COC - LAGOS ISLAND. All Rights Reserved.
        </div>
        <hr  className="my-4"/>
        <p>Designed and Developed by problemssolver</p>
      </div>
    </footer>
  );
};

export default Footer;
