import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <p className="text-center text-gray-600">
            &copy; {new Date(Date.now()).getFullYear()} Infinity Market. All
            rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 sm:justify-end">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            Shop
          </a>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            About
          </Link>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
