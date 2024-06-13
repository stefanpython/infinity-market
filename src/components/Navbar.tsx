import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "./Navbar.css";
import Cart from "./Cart";

const MyNavbar: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    // @ts-ignore
    <Navbar
      color="blue-gray"
      shadow={true}
      className="navbar mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none min-h-12 items-center lg:shadow-lg lg:bg-gray-800 lg:bg-opacity-25"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* @ts-ignore */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-medium text-white flex items-center"
        >
          <img
            src="./logo.png"
            alt="logo"
            className="rounded-full w-10 h-10 mr-2"
          />
          <p className="underline">Infinity Market</p>
        </Typography>
        <div className="hidden lg:block">
          <ul className="flex space-x-4 desktop-list">
            <li>
              <a
                href="#home"
                className="text-white no-underline hover:underline"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white no-underline hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white no-underline hover:underline"
              >
                <img className="w-6 h-6" src="./cart.png" alt="shopping cart" />
                <span className="bg-red-500 text-white rounded-full w-4 h-4 absolute -mt-8 ml-4 flex items-center justify-center">
                  2
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="lg:hidden">
        <ul className="flex flex-col space-y-4">
          <li>
            <a
              href="#home"
              className="text-white hover:bg-blue-gray-300 hover:p-1 hover:rounded-md"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:bg-blue-gray-300 hover:p-1 hover:rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-white">
              <img
                className="w-6 h-6 hover:bg-blue-gray-300 hover:p-1 hover:rounded-md"
                src="./cart.png"
                alt="shopping cart"
              />
            </a>
          </li>
        </ul>
      </Collapse>
      {/* <Cart /> */}
    </Navbar>
  );
};

export default MyNavbar;
