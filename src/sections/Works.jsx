import React, { useState } from "react";
import resume from "./resume.jpg";
import quizz from "./quizz.webp";
import countries from "./countries.jpg";
import WorkItem from "../components/WorkItem";

const Works = () => {
  const [works, setWorks] = useState([
    { image: resume, text: "My Resume Online<br> visit" },
    { image: countries, text: "Countries of the World<br> visit" },
    { image: quizz, text: "Computer Science Quizz App<br> visit" },
  ]);
  return (
    <>
      <div
        id="works"
        className="w-full bg-gradient-to-tr px-3 md:px-5 lg:px-8 from-[#001] to-[#003] rounded-lg text-white font-quicksand shadow-inner shadow-slate-800 mt-2"
      >
        <div className="text-xl md:text-4xl font-semibold text-center py-4 mb-3">
          My Works
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-2">
        {works.map((work, index) => (
          <div key={index}>
            {" "}
            <WorkItem item={work} />{" "}
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Works;
