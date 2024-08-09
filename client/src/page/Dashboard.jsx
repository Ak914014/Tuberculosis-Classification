import { PicLeftOutlined, PieChartOutlined, CalendarOutlined  } from "@ant-design/icons";
import React from "react";
import Data from "../components/Data";
import DashNav from "../components/DashNav";


const Dashboard = () => {
  return (
    <div className="h-screen bg-[#ECF0F9] p-6  w-full gap-4 flex flex-row">
      <div className="p-4 text-gray-500 flex flex-col text-2xl">
        <div className="-ml-4">
          <h1 className="flex font-bold text-white bg-blue-900 p-2 text-xl">MER<span className=" text-yellow-500 inline-block">i</span>L</h1>
        </div>
        <div className="mt-6  hover:text-black rounded-full  ">
          <PicLeftOutlined />
        </div>
        <div className="mt-6 hover:text-black">
          <PieChartOutlined />
        </div>
        <div className="mt-6 hover:text-black">
        <CalendarOutlined />
        </div>
      </div>
      <div className="w-11/12 rounded-xl   ">
        <DashNav/> 
        <Data/>
        
      </div>
    </div>
  );
};

export default Dashboard;
