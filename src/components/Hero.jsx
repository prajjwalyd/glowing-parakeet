import React from "react";
import hero from "../assets/hero.png";
import vectorImage from "../assets/Vector.png";


const Hero = () => (
  <div className="flex justify-center" style={{ backgroundImage: `url(${vectorImage})`, backgroundSize: '50% auto', backgroundPosition: '75% 25%', backgroundRepeat: 'no-repeat' }}>
    <div>
      <img src={hero} className="w-full" alt="" />
    </div>

    <div>
      <div>
        <h1 className="text-6xl font-bold m-16">
          Clubhouse, <br /> but Open Source <br /> <br />A social voice <br />
          platform.
        </h1>
      </div>

      <div>
        <h3 className="text-2xl m-16">A Project Maintained by AOSSIE</h3>
      </div>

      <div className="m-16">
        <button className="w-full px-4 py-4 bg-yellow-500 text-2xl text-black font-bold rounded-3xl mb-8">
          Create/Join a Room
        </button>
        <button className="w-full px-4 py-4 bg-gray-900 text-2xl text-white font-bold rounded-3xl mb-8">
          Contribute to the Project
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
