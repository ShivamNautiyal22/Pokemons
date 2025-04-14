import React from "react";
import { FaShieldAlt, FaWeight, FaRulerVertical, FaBolt } from "react-icons/fa";

const PokemonCard = ({ pokemonData, featured }) => {
  const getTypeColor = (type) => {
    const colors = {
      normal: "from-gray-300 to-gray-400",
      fire: "from-orange-400 to-red-500",
      water: "from-blue-400 to-blue-600",
      electric: "from-yellow-300 to-yellow-500",
      grass: "from-green-400 to-green-600",
      ice: "from-cyan-300 to-cyan-500",
      fighting: "from-red-400 to-red-600",
      poison: "from-purple-400 to-purple-600",
      ground: "from-yellow-600 to-yellow-800",
      flying: "from-indigo-300 to-indigo-500",
      psychic: "from-pink-400 to-pink-600",
      bug: "from-lime-400 to-lime-600",
      rock: "from-yellow-700 to-yellow-900",
      ghost: "from-purple-600 to-purple-800",
      dragon: "from-indigo-600 to-indigo-800",
      dark: "from-gray-700 to-gray-900",
      steel: "from-gray-400 to-gray-600",
      fairy: "from-pink-300 to-pink-500",
    };
    return colors[type] || "from-gray-300 to-gray-400";
  };

  const mainType = pokemonData.types[0].type.name;
  const gradientBg = getTypeColor(mainType);

  return (
    <div className={`relative group ${featured ? 'transform-gpu' : ''}`}>
      <div className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br ${gradientBg}
        p-6 h-full
        transition-all duration-300
        ${featured ? 'scale-95 group-hover:scale-100' : 'hover:-translate-y-2'}
        shadow-lg hover:shadow-2xl
      `}>
        {/* Pokemon Image */}
        <div className="relative z-10 flex justify-center mb-6">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-white/20 rounded-full filter blur-xl transform scale-110"></div>
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default || pokemonData.sprites.front_default}
              alt={pokemonData.name}
              className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Pokemon Info */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white capitalize">
              {pokemonData.name}
            </h3>
            <span className="text-white/80 font-mono">
              #{pokemonData.id.toString().padStart(3, '0')}
            </span>
          </div>

          {/* Types */}
          <div className="flex gap-2 mb-6">
            {pokemonData.types.map((t) => (
              <span
                key={t.type.name}
                className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm"
              >
                {t.type.name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-white">
            <div className="flex items-center gap-2">
              <FaWeight className="w-4 h-4 opacity-80" />
              <span className="text-sm">
                {(pokemonData.weight / 10).toFixed(1)} kg
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaRulerVertical className="w-4 h-4 opacity-80" />
              <span className="text-sm">
                {(pokemonData.height / 10).toFixed(1)} m
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="w-4 h-4 opacity-80" />
              <span className="text-sm truncate">
                {pokemonData.abilities[0]?.ability.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaBolt className="w-4 h-4 opacity-80" />
              <span className="text-sm">
                {pokemonData.stats.find((stat) => stat.stat.name === "speed")?.base_stat} SPD
              </span>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full filter blur-xl transform rotate-45"></div>
      </div>
    </div>
  );
};

export default PokemonCard;