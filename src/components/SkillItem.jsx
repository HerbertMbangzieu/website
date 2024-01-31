import React from "react";

const SkillItem = ({ item }) => {
  return (
    <>
      <div className="w-full text-white font-quicksand rounded-md p-2 px-8">
        <div className="flex justify-between">
          <p className="text-md md:text-lg font-semibold"> {item.skill} </p>
          <p className="text-md md:text-lg font-semibold"> {item.percent} </p>
        </div>
        <div className="mt-2 md:mt-3 w-full h-3 rounded-lg bg-lime-900">
          <div
            className={`h-3  rounded-lg bg-lime-400 ${
              "w-[" + item.percent + "]"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
