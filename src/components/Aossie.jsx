import React from "react";
import aossie from "../assets/aossie_logo.png";
import tempicons from "../assets/tempicons.png";

const Aossie = () => {
  return (
    <div className="flex justify-center m-32 p-10">
      <div className="w-full">
        <img src={aossie} className="w-full" alt="" />
      </div>

      <div>
        <div>
          <h1 className="text-3xl font-bold ml-16">We Innovate We Educate</h1>
        </div>

        <div>
          <h3 className="text-xl ml-16 mr-16 mt-10">
            We are an Australian not-for-profit umbrella organization for
            open-source projects. We believe the open-source philosophy provides
            a resource-efficient channel to transfer knowledge and achieve
            innovation and education.
          </h3>
        </div>

        <div className="ml-12 mt-8 w-1/2">
            <img src={tempicons} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aossie;
