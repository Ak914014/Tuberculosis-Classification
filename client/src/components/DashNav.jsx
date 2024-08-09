import React from "react";
import { createFromIconfontCN, PhoneOutlined } from "@ant-design/icons";
import { Space } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const DashNav = () => {
  return (
    <div className=" w-11/12 m-auto  flex gap-[20vw] shadow-xl  shadow-gray-200 rounded-full py-2 px-2 bg-white h-[13vh]">
      <div className=" flex flex-row">
        <div className=" h-20 w-20 bg-blue-800 rounded-full">
          <img src="" alt="" />
        </div>
        <h1 className=" text-xl font-semibold text-gray-600 mt-5 ml-5  ">
          USER NAME
        </h1>
        <div className=" ml-5 mt-5  text-2xl text-gray-500">
          <Space className="flex gap-5">
            <IconFont type="icon-facebook" />
            <IconFont type="icon-twitter" />
            <PhoneOutlined />
          </Space>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="  mt-2">
          <h4>Last login</h4>
          <h4>current login</h4>
        </div>
        <div className="  mt-2">
          <h4>Last login</h4>
          <h4>current login</h4>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
