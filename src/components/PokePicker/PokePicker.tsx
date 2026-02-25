import POKEMON_LIST from "../../assets/pokeSpriteListFull.json";
import PokePickerMon from "../PokePickerMon";

function PokePicker() {
  const pokemonElements = POKEMON_LIST.pokemon.map((pokemon) => {
    return (
      <PokePickerMon
        key={pokemon.name}
        name={pokemon.name}
        imgPath={pokemon.sprites.front_default}
      />
    );
  });

  return <div>{pokemonElements}</div>;
}

export default PokePicker;
