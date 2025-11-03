import React from "react";
import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

const Generations = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center w-full">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        <Gen1 name="Generation 1" />
        <Gen2 name="Generation 2" />
        <Gen3 name="Generation 3" />
        <Gen4 name="Generation 4" />
       
      </div>
    </div>
  );
};

export default Generations;
