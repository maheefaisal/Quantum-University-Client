import React from "react";
import logo from "../../../assets/images/footer-logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="container my-8 mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Services Column */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>

        {/* Additional Section */}
        <div className="flex justify-between items-center mt-8">
          {/* Copyright Column */}
          <div className="text-white">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center">
            <img src={logo} alt="Company Logo" className="h-12" />
          </div>

          {/* Social Media Handles Column */}
          <div className="flex justify-end">
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" className="text-white">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-white">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
