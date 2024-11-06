import React from "react";
import { useState } from "react";

import { Link } from 'react-scroll'
import { FaBars,FaTimes,FaGithub,FaLinkedin } from "react-icons/fa";

import {BsFillPersonLinesFill} from 'react-icons/bs'



const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNavbar(!navbar);
  return (
    <nav className="flex flex-row justify-between bg-blue-500 box-shadow-main h-14 fixed top-0 z-30 w-full"
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500"
    >
      <div className="p-2 sm:ml-10 md:ml-4 lg:ml-16">
        <img src="./logo.png" alt="" className="w-28 h-10" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex cursor-pointer justify-center space-x-9 text-white  p-3 mr-20  text-xl font-semibold">
        <li className="hover-scale hover:text-blue-700">
          <Link className="nav-link " to="home" smooth={true} duration={500} >
            HOME
          </Link>
        </li >
        <li className="hover-scale hover:text-blue-700" >
          <Link className="nav-link" to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="hover-scale hover:text-blue-700">
          <Link className="nav-link" to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className="hover-scale hover:text-blue-700">
          <Link className="nav-link" to="work" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li className="hover-scale hover:text-blue-700">
          <Link className="nav-link" to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Hamberger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl m-3 mt-4">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile-Menu */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-blue-500 flex justify-center items-center flex-col cursor-pointer text-white md:hidden "
        }
      >
        <li className="py-6 text-3xl hover-scale hover:text-blue-700 ">
          <Link
            className="nav-link"
            to="home"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            HOME
          </Link>
        </li>
        <li className="py-6 text-3xl hover-scale hover:text-blue-700">
          <Link
            className="nav-link"
            to="about"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-3xl hover-scale hover:text-blue-700">
          <Link
            className="nav-link"
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-3xl hover-scale hover:text-blue-700">
          <Link
            className="nav-link"
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            PROJECTS
          </Link>
        </li>
        <li className="py-6 text-3xl hover-scale hover:text-blue-700">
          <Link
            className="nav-link"
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            CONTACT
          </Link>
        </li>
      </ul>


      {/* social media links are here */}
      <div className="z-100 hidden sm:flex fixed left-0 top-56 ">
      <ul className="" data-aos="fade-right">
            <li className="w-[160px] h-[60px] flex  items-center ml-[-100px] rounded-r-full hover:ml-[-5px] duration-300 bg-orange-400 ">
              <a
                className="flex justify-around w-full text-grey-300 "
                href="https://www.linkedin.com/in/muneeb-ansari-93291b201/"
                target="blank"
              >
                <span className="text-white text-xl">LinkedIn </span>
                <FaLinkedin size={30} className="text-orange-600" />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex  items-center ml-[-100px] rounded-r-full hover:ml-[-5px] duration-300 bg-white border-2 border-black">
              <a
                className="flex  justify-around w-full text-grey-300 "
                href="https://github.com/muneeb41?tab=repositories"
                target="blank"
              >
                <span className=" text-xl">Github</span>
                 <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex  items-center ml-[-100px] rounded-r-full  hover:ml-[-5px] duration-300 bg-green-600 ">
              <a
                className="flex  justify-around w-full text-grey-300 "
                href="https://docs.google.com/document/d/1-2Jc4xaYK7QtND9kwu0ad11_czcGtSGo/edit?usp=sharing&ouid=112056895426581214632&rtpof=true&sd=true"
                target="_blank"
              >
                <span className="text-white text-xl">Resume </span>
                 <BsFillPersonLinesFill size={30} className="text-green-900" />
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
