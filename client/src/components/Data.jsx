import React from "react";
import ShowOldData from "./ShowOldData";
import Graph from "./Graph";

const Data = () => {
  return (
    <div className="flex   flex-col w-11/12 bg-[#F9F9FD] mt-4 rounded-2xl m-auto h-[80vh] p-5">
      <div className="flex flex-row gap-6 w-11/12 ">
        <ShowOldData />
        <ShowOldData />
        <ShowOldData />
      </div>

      <div className="mt-10  w-1/2">
        <div className=" flex text-sm gap-7 flex-row w-full">
          <div className=" flex flex-row gap-1">
            <div className=" p-1 w-1 rounded-full bg-[#FF4069]"></div>
            <h1>Postive report</h1>
          </div>
          <div className=" flex flex-row gap-1">
            <div className=" p-1 w-1 rounded-full bg-[#FFCD56]"></div>
            <h1>Postive report</h1>
          </div>
          <div className=" flex flex-row gap-1">
            <div className=" p-1 w-1 rounded-full bg-[#36A2EB]"></div>
            <h1>Postive report</h1>
          </div>
        </div>
        <div className=" ml-10 mt-4 w-[15vw] ">
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default Data;
