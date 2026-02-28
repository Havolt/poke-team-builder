import POKEMON_LIST from "../../assets/pokeSpriteListFull.json";
import PokePickerMon from "../PokePickerMon";

import Styles from "./pokePicker.module.css";

type PokePickerProps = {
  currInfoMon: number | null;
  setCurrInfoMon: (id: number | null) => void;
};

function PokePicker({ currInfoMon, setCurrInfoMon }: PokePickerProps) {
  // Use the index + 1 as it lines up with pokemon IDs
  const handleMonClick = (id: number) => {
    if (currInfoMon === id) {
      setCurrInfoMon(null);
    } else {
      setCurrInfoMon(id);
    }
  };

  const pokemonElements = POKEMON_LIST.pokemon.map((pokemon, index) => {
    return (
      <PokePickerMon
        key={pokemon.name}
        name={pokemon.name}
        imgPath={pokemon.sprites.front_default}
        onClick={() => handleMonClick(index + 1)}
      />
    );
  });

  return <div className={Styles["poke-picker"]}>{pokemonElements}</div>;
}

export default PokePicker;
