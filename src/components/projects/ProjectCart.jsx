import React from "react";
import ProjectContent from "./ProjectContent";

const ProjectCart = ({project,isEven}) => {
  return (
    <div className="flex flex-row  lg:justify-center  relative  h-full " >
      <div
    
        className={` p-3 bg-white hover-scale   z-20 relative  my-5  box-shadow-main rounded-xl max-w-44 min-[350px]:max-w-60 sm:max-w-80 md:max-w-96 left-20 sm:left-48  ${
          isEven ? "lg:-left-64" : "lg:left-64"
        } `}
        data-aos="zoom-in"
      >
        <ProjectContent project={project} />
      </div>
      {/* horizontal line and inside image */}
      <div
        className={`w-20 top-[57%] border-t-8 absolute   left-2 sm:left-24 sm:w-32 border-blue-600 z-10 ${
          isEven ? "lg:left-auto lg:right-1/2 " : "lg:left-1/2"
        }`}
      >
         <img
          src={project.icon}
          alt=""
          className={`w-10 h-10  rounded-full my-auto relative bottom-6 ${isEven?'lg:left-28':'lg:right-4'} z-10 hover-scale border-2 border-blue-700`}
        />
      </div>
      {/* verticle line  */}
      <div className=" h-full border-l-8 absolute left-5 sm:left-28 lg:left-1/2 border-blue-600 z-0  ">
      </div>
    </div>
  );
};

export default ProjectCart;
