import React from "react";
import Gen1 from "./Gen1";
import Gen2 from "./Gen2";


const Generations = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center w-full">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        <Gen1 name="Generation 1" />
        <Gen2 name="Generation 2" />
       
      </div>
    </div>
  );
};

export default Generations;
