import React from "react";

const WorkItem = ( work ) => {
  return (
    <>
      <div id="w-full flex justify-center">
        <div className="w-[300px] md:[600px] lg:[500px] h-[250px] md:h-[500px] lg:h-[400px] relative">
          <div className="w-full h-auto bg-black bg-opacity-70 flex justify-center items-center absolute">
            Hello
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
