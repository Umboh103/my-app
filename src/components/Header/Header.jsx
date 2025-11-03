import React from "react";
import Logo from "./Logo";
import Generations from "./Generations/Generations";

const Header = ({ title }) => {
  return (
    <header className="w-full bg-blue-500 text-white p-4 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>
      <div className="flex flex-col items-center space-y-2">
        <Logo text="Pokédex Logo" />
        <Generations title="Pokémon Generations" />
      </div>
    </header>
  );
};

export default Header;
