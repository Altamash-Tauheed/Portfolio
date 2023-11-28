// Navbar.js
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className=" w-full fixed bg-gradient-to-r from-[#021b38] top-0 left-0 z-10">
      <div className="md:flex items-center justify-between py-1 md:px-10 px-7">
        <div
          className="font-bold text-2xl flex items-center font-[Poppins] 
    text-white"
        >
          <span className="cursor-default text-3xl mr-1 pt-2">
            <ion-icon name="person-circle"></ion-icon>
          </span>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-default text-white no-underline"
            onClick={handleScrollToTop}
          >
            Portfolio
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-white text-3xl absolute right-8 top-4 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`mb-0 md:flex md:items-center md:rounded-xl md:py-0 pb-2 py-2 bg-gradient-to-r from-[#021b38] absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 cursor-pointer transition-all duration-500 ease-in ${
            open ? "top-[54px]" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-6 ">
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="font-semibold text-[#Ffffff] hover:text-[#26a4ee] duration-500 no-underline"
            >
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <Link
              to="about"
              smooth={true}
              duration={200}
              className="font-semibold text-[#Ffffff] hover:text-[#26a4ee] duration-500 no-underline"
            >
              About
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <Link
              to="skills"
              smooth={true}
              duration={200}
              className="font-semibold text-[#Ffffff] hover:text-[#26a4ee] duration-500 no-underline"
            >
              Skills
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <Link
              to="projects"
              smooth={true}
              duration={200}
              className="font-semibold text-[#Ffffff] hover:text-[#26a4ee] duration-500 no-underline"
            >
              Projects
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="font-semibold text-[#Ffffff] hover:text-[#26a4ee] duration-500 no-underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
