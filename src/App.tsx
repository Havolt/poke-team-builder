import PokeHeader from "./components/PokeHeader";
import PokePicker from "./components/PokePicker";

import { useState } from "react";

import "./App.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  return (
    <>
      <PokeHeader />
      <main>
        <PokePicker
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </main>
    </>
  );
}

export default App;
