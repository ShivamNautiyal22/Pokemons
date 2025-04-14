import React from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <li className="bg-emerald-200 shadow group rounded-lg py-4 px-3 flex flex-col items-center text-center">
      <div className="w-35 h-35 group-hover:scale-120 duration-300 flex items-center justify-center overflow-hidden">
        <img
          src={pokemonData.sprites.front_shiny}
          alt={`image of ${pokemonData.name}`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="capitalize mt-2 text-2xl mb-3 font-medium">
        {pokemonData.name}
      </h3>
      <div className="flex mb-4">
        <p className="bg-gray-800 text-white text-base px-4 py-2 rounded-[5px]">
          {pokemonData.types.map((t) => t.type.name).join(", ")}
        </p>
      </div>
      <div className="grid grid-cols-1 w-full gap-2 text-sm sm:text-base mt-2">
        <div className="flex justify-between items-center bg-emerald-300 rounded-[5px] text-gray-800 p-2">
          <span className="font-bold text-[17px]">Weight:</span>
          <span>{pokemonData.weight}</span>
        </div>
        <div className="flex flex-wrap justify-between items-center bg-emerald-300 rounded-[5px] text-gray-800 p-2">
          <span className="font-bold text-[17px]">Height:</span>
          <span>{pokemonData.height}</span>
        </div>
        <div className="flex flex-wrap justify-between items-center bg-emerald-300 rounded-[5px] text-gray-800 p-2">
          <span className="font-bold text-[17px]">Ability:</span>
          <span className="truncate max-w-[120px]">
            {pokemonData.abilities[0]?.ability.name}
          </span>
        </div>
        <div className="flex flex-wrap justify-between items-center bg-emerald-300 rounded-[5px] text-gray-800 p-2">
          <span className="font-bold text-[17px]">Speed:</span>
          <span>
            {
              pokemonData.stats.find((stat) => stat.stat.name === "speed")
                ?.base_stat
            }
          </span>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
