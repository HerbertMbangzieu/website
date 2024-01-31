import React, { useState } from "react";
import SkillItem from "../components/SkillItem";

const Skills = () => {
  const [skills, setSkills] = useState([
    { skill: "HTML 5", percent: "87%" },
    { skill: "CSS 3", percent: "71%" },
    { skill: "Javascript", percent: "75%" },
    { skill: "Bootstrap CSS", percent: "52%" },
    { skill: "Tailwind CSS", percent: "67%" },
    { skill: "JQuery", percent: "70%" },
    { skill: "React JS", percent: "65%" },
    { skill: "React Native", percent: "40%" },
    { skill: "PHP", percent: "65%" },
    { skill: "Laravel", percent: "48%" },
    { skill: "SQL", percent: "60%" },
    { skill: "MySQL", percent: "56%" },
    { skill: "Git /Github", percent: "55%" },
  ]);
  return (
    <>
      <div
        id="skills"
        className="w-full bg-gradient-to-tr px-3 md:px-5 lg:px-8 from-[#001] to-[#003] rounded-lg text-white font-quicksand shadow-inner shadow-slate-800 mt-2"
      >
        <div className="text-xl md:text-4xl font-semibold text-center py-4 mb-3">
          Skills & Competences
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <div key={index}>
              <SkillItem item={skill} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
