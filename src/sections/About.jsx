import React, { useState } from "react";
import ExperienceItem from "../components/ExperienceItem";

const About = () => {
  const [active, setActive] = useState(0);
  const [tabs, setTabs] = useState([
    "Developer",
    "Teacher",
    "Education",
  ]);

  const [experiences, setExperiences] = useState([
    [
      {
        position: "Fullstack developer (remote)",
        company: " Camsol Technologies (Germany)",
        start: "Jun 2022",
        end: "September 2022",
        description: `Translated UI designs into functional web pages. Worked in team on Projects <a href='https://hallokarla.de/' target='_blank'>Karla</a>, <a href='https://camsol.io/' target='_blank'>Camsol webpage</a> and <a href='https://nova-campus.de/' target='_blank'> nova-campus</a>, using ReactJS, TailwindCSS and Contentful as tech stack. Attended Projects meeting with Google Meet and Slack`,
      },
      {
        position: "Backend Teamlead (remote)",
        company: " Camsol Technologies (Germany)",
        start: "October 2022",
        end: "March 2023",
        description: `Assigned Projects to teammates, attended projects meeting an also scheduled planning and review meetings with the team, using Google Meet, slack and Notion as teamworking tools. Kept working on other projects as Frontend developer`,
      },
      {
        position: "Quality & Assurance Teamlead (remote)",
        company: " Camsol Technologies (Germany)",
        start: "Mar 2023",
        end: "Jan 2024",
        description: `Designed User Acceptance testing and exploratory testing scenarios, reviewed teammates tests, scheduled planning and review meetings. kept working as fullstack developer on <a href='https://cbuy.expert/'>cbuy</a> project, using HTML, vanilla Javascript, PHP and Vanilla CSS as tech stack.`,
      },
    ],
    [
      {
        position: "Computer Science Teacher",
        company: " Goverment Technical High School OMBE (Cameroon)",
        start: "Jan 2011",
        end: "Nov 2014",
        description: `Preparing and teaching courses for all class levels. Teaching in English. As Head of the Computer Science Department, I also organised Department meetings, and provided results statistics to the administration.`,
      },
      {
        position: "Computer Science Teacher",
        company: " NAL Bilingual Academic Complex Douala (Cameroon)",
        start: "Oct 2014",
        end: "Jan 2024",
        description: `Preparing and teaching courses for all class levels. Teaching in English and French. As Head of the Computer Science Department, I also organised Department meetings, and provided results statistics to the administration.`,
      },
      {
        position: "Computer Science Lecturer",
        company: "JFN High University Institute (Cameroon)",
        start: "Oct 2022",
        end: "Jan 2024",
        description: `Preparing and teaching courses for HND Students. Taught in English and French Programming and Database courses.`,
      },
    ],
    [
      {
        degree: "Technical teaching diploma 2(Master): industrial computing",
        year: "June 2016",
        school: "ENSET Douala(Cameroon)",
        description:
          "<strong><u>End of Year Project:</u></strong> Design and implementation of a face recognition system on live video ",
      },
      {
        degree: "Technical teaching diploma 1(Bachelor): industrial computing",
        year: "June 2010",
        school: "ENSET Douala (Cameroon)",
        description:
          "<strong><u>End of Year Project:</u></strong> Design and implementation of a schooling management software: Application to ENSET Douala",
      },
      {
        degree: "Baccalauréat C: Mathematics",
        year: "June 2006",
        school: "Government Bilingual High School Bafoussam (Cameroon)",
        description: "Secondary school leaving certificate",
      },
    ],
  ]);

  return (
    <>
      <div
        id="about"
        className="w-full bg-gradient-to-tr px-3 md:px-5 lg:px-8 from-[#001] to-[#003] rounded-lg text-white font-quicksand shadow-inner shadow-slate-800 mt-2"
      >
        <div className="text-xl md:text-4xl font-semibold text-center py-4 mb-3">
          About Me
        </div>
        <div className="lg:flex w-full my-4 ">
          <div className="lg:w-2/5 mx-2 text-lg text-left lg:text-justify">
            I'm passionate about programming, having spent 12 years teaching
            computer science in secondary schools and universities, and 2 years
            as a full-stack developer. I'm open to learning new things. I'm open
            to working on site or remotely and I'm also very good at teamwork.
          </div>

          <div className="lg:w-3/5 md:text-md">
            <div className="grid grid-cols-3 cursor-pointer mt-3 lg:mt-0 border-t-2 lg:border-t-0 pt-4 lg:pt-0 border-t-lime-400">
              {tabs.map((tab, index) => (
                <div key={index}>
                  <div
                    className={
                      active === index
                        ? "text-center text-lime-400 underline underline-offset-[10px] font-semibold scale-110 transition ease-in-out duration-300"
                        : "text-center transition ease-in-out duration-300"
                    }
                    onClick={() => setActive(index)}
                  >
                    {tab}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-3">
              {experiences[active].map((experience, index) => (
                <div key={index}>
                  <ExperienceItem item={experience} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
