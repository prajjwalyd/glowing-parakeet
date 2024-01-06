import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Download = () => {
  return (
    <div className="bg-gray-900 rounded-xl justify-center m-16 p-10">
      <div className="flex justify-center mb-10">
        <h1 className="text-white text-4xl ">Get the Resonate Mobile app.</h1>
      </div>

      <div className="justify-center flex flex-wrap">
        <img src={playstore} className="m-2" alt="" />
        <img src={appstore} className="m-2" alt="" />
      </div>
    </div>
  );
};

export default Download;
