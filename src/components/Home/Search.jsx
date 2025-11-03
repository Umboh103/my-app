import React from "react";

const Search = ({ placeholder }) => {
  return (
    <div className="flex justify-center space-x-2">
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 w-1/2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default Search;
