import React from "react";

const ExperienceItem = ({ item }) => {
  return (
    <>
      <div className="w-full font-quicksand my-4 pb-2 border-b-[1px] border-b-lime-400">
        <div className="w-full lg:grid lg:grid-cols-2 text-lime-400 font-semibold">
          <p>
            {" "}
            {item?.position} {item?.degree}{" "}
          </p>
          <p>
            {item?.start} - {item?.end} {item?.year}
          </p>
        </div>
        <p className="text-lime-400">
          {" "}
          {item?.company} {item?.school}{" "}
        </p>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    </>
  );
};

export default ExperienceItem;
