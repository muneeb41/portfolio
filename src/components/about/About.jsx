import React from "react";
import { Link } from "react-scroll";
import { FaBars,FaTimes,FaGithub,FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'

const About = () => {
  return (
    <div className=" px-3  py-20 sm:px-20 pt-28 " id="about">
      <div className="box-shadow-main  rounded-xl  "
      data-aos="fade-up"
     
      >
        <h2 className="text-center text-4xl font-semibold pt-3 text-blue-700  ">ABOUT ME</h2>
        <div className="flex flex-col md:flex-row items-center lg:justify-center lg:gap-8">
          <img src="/about.jpg" alt="" className="w-96 h-80 md:w-72 lg:w-96 md:mb-2" />
          <div className="flex flex-col gap-3 lg:gap-7 ">
            <p className="text-center px-2 md:px-6 lg:max-w-[50vw]  text-md lg:text-lg">
              I am an aspiring Software Developer with a strong foundation in
              HTML, CSS, JavaScript, React, Redux, MongoDB, Node.js, and
              Express.js. I am skilled in creating responsive and visually
              appealing web applications using Tailwind CSS. I am passionate
              about learning new technologies and improving user experience.
            </p>
            <ul className="flex flex-row flex-wrap gap-2 px-2 mb-4 justify-center sm:gap-5">
              <li className=" text-lg px-2 py-1 hover-scale hover:text-blue-700 border-2 border-blue-500 rounded-lg  text-blue-500">
                <Link
                  className="nav-link"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Let's Talk
                </Link>
              </li>
              <li className=" text-lg px-2 py-1 hover-scale hover:text-green-700 border-2 border-green-500 rounded-lg  text-green-500">
              <a
                className="flex  justify-between gap-2 w-full  "
                href="https://docs.google.com/document/d/1-2Jc4xaYK7QtND9kwu0ad11_czcGtSGo/edit?usp=sharing&ouid=112056895426581214632&rtpof=true&sd=true"
                target="_blank"
              >
                <span className=" text-xl">Resume </span>
                 <BsFillPersonLinesFill size={30}  />
              </a>
              </li>
              <li className=" text-lg px-2 py-1 hover-scale hover:text-blue-700 border-2 border-blue-500 rounded-lg  text-blue-500">
              <a
                className="flex justify-between w-full  gap-2 "
                href="https://www.linkedin.com/in/muneeb-ansari-93291b201/"
                target="blank"
              >
                <span className=" text-blue-500 text-lg">LinkedIn </span>
                <FaLinkedin size={30} className="" />
              </a>
              </li>
              <li className=" text-lg px-2 py-1 hover-scale hover:text-green-700 border-2 border-green-500 rounded-lg  text-green-500">
              <a
                className="flex  justify-between w-full gap-2 "
                href="https://github.com/muneeb41?tab=repositories"
                target="blank"
              >
                <span className="text-xl">Github</span>
                 <FaGithub size={30} />
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
