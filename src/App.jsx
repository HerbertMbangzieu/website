import { useState } from "react";

import Menu from "./components/Menu";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";

function App() {
  return (
    <>
      <div className="w-full flex justify-center pb-5 font-quicksand">
        <div className="p-2 md:px-[200px]">
          <Menu />
          <Home />
          <About />
          <Skills />
          <Works/>
        </div>
      </div>
    </>
  );
}

export default App;
