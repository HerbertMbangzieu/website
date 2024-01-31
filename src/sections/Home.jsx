import React from "react";
import HomeImage from "../components/HomeImage";
import TextBlink from "../components/TextBlink";

const Home = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Teacher",
  ];
  return (
    <>
      <div id="home" className="w-full md:grid md:grid-cols-2 gap-2">
        <HomeImage words={words} />
        <TextBlink />
      </div>
    </>
  );
};

export default Home;
