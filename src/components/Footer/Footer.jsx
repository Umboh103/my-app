import React from "react";

const Footer = ({ title }) => {
  return (
    <footer className="bg-gray-800 text-white text-center w-full py-3 rounded-xl">
      {title}
    </footer>
  );
};

export default Footer;
