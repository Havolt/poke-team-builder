import PokeHeader from "./components/PokeHeader";
import PokePicker from "./components/PokePicker";
import PokeParty from "./components/PokeParty";

import { useState } from "react";

import "./App.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [userParty, setUserParty] = useState<number[]>([]);

  const handleUnselectPokemon = () => {
    setSelectedPokemon(null);
  };

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
