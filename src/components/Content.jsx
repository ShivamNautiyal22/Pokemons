import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search , setSearch] = useState("")

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const dataOfPokemon = await res.json();
      
      const pokemons = dataOfPokemon.results.map(async (curPokemon) => {
        const pokemon = await fetch(curPokemon.url);
        const deepDataPokemon = await pokemon.json();
        return deepDataPokemon;
      });
      
      const detailedResponse = await Promise.all(pokemons);
      
      
      setData(detailedResponse)
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchedData = data.filter((curData) => {
   return curData.name.toLowerCase().includes(search.toLowerCase())
  })

 
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-4xl text-gray-800 animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading Pokémon...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-4xl text-red-600">{error.message}</p>
          <p className="text-2xl text-gray-600">PokéAPI is not responding.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5">
        <div className="flex justify-center my-7">
          <input
            type="text"
            placeholder="Search your favourite pokemon . . ."
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
            className="border-b-2 border-gray-800 text-gray-800 focus:outline-none p-2 text-[20px] w-[400px] sm:w-[500px]"
          />
        </div>
        <div className="my-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-5">
                {
                    searchedData.map((curCard) => {
                        return (
                           <PokemonCard key={curCard.id} pokemonData = {curCard}/> 
                        )
                    })
                }
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
