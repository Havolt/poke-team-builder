import PokeHeader from "./components/PokeHeader";
import PokePicker from "./components/PokePicker";
import PokeParty from "./components/PokeParty";

import links from "./constants/links.json";

import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [userParty, setUserParty] = useState<number[]>([]);

  const pokedex = useRef<{ [key: number]: any }>({}).current;

  const handleUnselectPokemon = () => {
    setSelectedPokemon(null);
  };

  const fetchPokemonData = async (pokemonId: number) => {
    if (pokedex[pokemonId]) {
      return pokedex[pokemonId];
    }

    try {
      const response = await fetch(`${links.pokeApiBaseUrl}${pokemonId}`);
      const data = await response.json();
      pokedex[pokemonId] = data;
      console.log("Fetched Pokémon data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchPokemonData(1);
  });

  return (
    <>
      <PokeHeader />
      <div className="content-wrapper">
        <aside className="page-sidebar">
          <PokeParty
            userParty={userParty}
            handleUnselectPokemon={handleUnselectPokemon}
          />
        </aside>
        <main>
          <PokePicker
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        </main>
      </div>
    </>
  );
}

export default App;
