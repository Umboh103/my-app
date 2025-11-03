import React from "react";
import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

const Home = ({ title }) => {
  return (
    <main className="bg-white w-full rounded-xl p-4 shadow">
      <h2 className="text-xl font-bold mb-3 text-center">{title}</h2>
      <div className="space-y-4">
        <Search placeholder="Search Pokémon..." />
        <CardInfo title="Pokédex Information" />
      </div>
    </main>
  );
};

export default Home;
