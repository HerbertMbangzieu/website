import React, { useEffect, useState } from "react";

const TextBlink = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Teacher",
  ];
  const [blink, setBlink] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= words.length) {
        setCount((count) => -1);
      }
      setBlink((blink) => words[count]);
      setCount((count) => count + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [blink]);

  return (
    <>
      <div className="w-full h-auto items-center text-3xl md:text-5xl p-4 bg-gradient-to-tr from-[#001] to-[#003] shadow-inner shadow-slate-800 mt-1 rounded-lg flex font-quicksand text-white">
        <div>
          <p> I am a</p>
          <p className="text-red-400 mt-3">{blink}</p>
        </div>
      </div>
    </>
  );
};

export default TextBlink;
