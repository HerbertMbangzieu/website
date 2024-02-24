import React, { useEffect, useState } from "react";

const SkillItem = ({ item }) => {
  const [innerwidth, setinnerWidth] = useState('');
  useEffect(()=>{
    setinnerWidth(
      `h-3 w-[${item.percent}] bg-lime-500 rounded-lg`
    )
    console.log(innerwidth);
  })
  return (
    <>
      <div className="w-full text-white font-quicksand rounded-md p-2 px-8">
        <div className="flex justify-between">
          <p className="text-md md:text-lg font-semibold"> {item.skill} </p>
          <p className="text-md md:text-lg font-semibold"> {item.percent} </p>
        </div>
        <div className="mt-2 md:mt-3 w-[100%] h-3 rounded-lg bg-lime-900">
          <div className={`${innerwidth}`}></div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
