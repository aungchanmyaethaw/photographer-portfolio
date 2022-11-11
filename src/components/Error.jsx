import React from "react";
import { FaSadTear } from "react-icons/fa";
const Error = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <FaSadTear className="text-4xl text-error" />
      <h1 className="font-heading text-[1.75rem] lg:text-[2.4rem] text-error font-medium">
        Something Wrong...
      </h1>
    </div>
  );
};

export default Error;
