import React from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = ({ title }) => {
  return (
    <section className="border p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <Logo text="Pokémon Card Logo" />
      <div className="flex justify-around mt-3">
        <Evolution info="Evolution Details" />
        <TypeEffect info="Type & Effect Data" />
      </div>
    </section>
  );
};

export default CardInfo;
