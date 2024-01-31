import React, { useEffect, useState } from "react";
import moi from "./moi.png";

const HomeImage = () => {
  return (
    <>
      <div className="w-full p-4 bg-gradient-to-br from-[#001] to-[#003] shadow-inner shadow-slate-800 mt-1 rounded-lg flex justify-center font-quicksand text-white">
        <div>
          <div className="flex w-full justify-center">
            <img src={moi} alt="" className="rounded-full md:w-68 md:h-72" />
          </div>
          <p className="text-lg md:text-2xl font-semibold w-full mt-4">
            {" "}
            <span className="text-red-400">Herbert</span>{" "}
            <span className="text-red-400 ml-1">Mbangzieu</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeImage;
