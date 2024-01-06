import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ imageSrc, title, bullet }) => {
  return (
    <div className="flex justify-center">
      <div>
        <img src={imageSrc} className="w-full" alt="" />
      </div>

      <div className="flex justify-center h-screen w-1/2">
        <h3 className="text-3xl font-bold m-16">
          <span className="list-decimal mr-2">{bullet}</span>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default FeatureCard;
