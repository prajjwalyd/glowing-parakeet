import React from "react";
import Logo from "../assets/logo.png";
import GitHubIcon from "../assets/github.svg";

const Navbar = () => (
  <div className="bg-gray-900 w-full rounded-3xl shadow-lg p-5">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} className="w-10 h-10" alt="" />
        <h3 className="text-white ml-2 text-2xl font-bold">Resonate</h3>
      </div>
      <div className="flex items-center">
        {/* <h3 className="text-white text-s">AOSSIE</h3> */}
        <img src={GitHubIcon} className="w-8 h-8 ml-2" alt="GitHub Logo" />
        <button className="ml-2 px-fill p-2 bg-yellow-500 text-white text-semibold rounded-3xl">
          DOWNLOAD NOW!
        </button>
      </div>
    </div>
  </div>
);

export default Navbar;
