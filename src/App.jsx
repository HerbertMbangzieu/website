import { useState } from "react";

import Menu from "./components/Menu";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <div className="w-full flex justify-center pb-5 font-quicksand text-lg">
        <div className="px-4 md:px-[25px] lg:px-[75px]">
          <div className="static mb-2 bg-gradient-to-tr from-[#001] to-[#003]">
          <Menu />
          </div>
          <Home />
          <About />
          <Skills />
          {/* <Works/> */}
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
