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
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
