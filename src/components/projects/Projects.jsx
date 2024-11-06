import React from "react";

import data from "../../projectsData/data.js";
import TimeLine from "./TimeLine.jsx";

const Projects = () => {
  return (
    <div name='projects' className="pt-14">
      <div className="text-center text-3xl sm:text-5xl font-bold text-blue-600 mb-5 "
      data-aos="fade-up"
      >
        PROJECTS
      </div>
      <TimeLine data={data}/>
    </div>
  );
};

export default Projects;
