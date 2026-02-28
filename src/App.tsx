import PokeHeader from "./components/PokeHeader";
import PokePicker from "./components/PokePicker";
import PokeParty from "./components/PokeParty";
import PokePopup from "./components/PokePopup";

import links from "./constants/links.json";

import { useState, useRef, useEffect } from "react";

import "./App.css";
import PokeInfo from "./components/PokeInfo";

// Very basic type definitions for Pokémon data. Can be expanded as needed.
type Pokemon = {
  id: number;
  name: string;
  sprites?: { front_default?: string; [key: string]: any };
  types?: { slot: number; type: { name: string } }[];
  stats?: { base_stat: number; stat: { name: string } }[];
};

type Pokedex = Record<number, Pokemon | "fetching" | null>;

function App() {
  const [currInfoMon, setCurrInfoMon] = useState<number | null>(null);
  const [userParty, setUserParty] = useState<number[]>([]);

  // No need to cause rerenders when pokedex is updated
  const pokedex = useRef<Pokedex>({}).current;

  const handleUnselectPokemon = () => {
    setCurrInfoMon(null);
  };

  const fetchPokemonData = async (pokemonId: number) => {
    if (pokedex[pokemonId]) {
      return pokedex[pokemonId];
    }

    try {
      pokedex[pokemonId] = "fetching"; // Mark as loading
      const response = await fetch(`${links.pokeApiBaseUrl}${pokemonId}`);
      const data = await response.json();
      pokedex[pokemonId] = data;
      console.log("Fetched Pokémon data:", data);
      return data;
    } catch (error) {
      pokedex[pokemonId] = null; // Mark as failed
      console.error("Error fetching Pokémon data:", error);
      return null;
    }
  };

  useEffect(() => {
    // fetchPokemonData(1);
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
            currInfoMon={currInfoMon}
            setCurrInfoMon={setCurrInfoMon}
          />
        </main>
      </div>
      {currInfoMon !== null && (
        <PokePopup>
          <PokeInfo currInfoMon={currInfoMon} />
        </PokePopup>
      )}
    </>
  );
}

export default App;
