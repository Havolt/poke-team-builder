import POKEMON_LIST from "../../assets/pokeSpriteListFull.json";
import LIST_CONSTANTS from "../../constants/links.json";

function PokePicker() {
  const pokemonElements = POKEMON_LIST.pokemon.map((pokemon) => {
    return (
      <div key={pokemon.name}>
        <img
          src={`${LIST_CONSTANTS.spriteBaseUrl}${pokemon.sprites.front_default}`}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </div>
    );
  });

  return <div>{pokemonElements}</div>;
}

export default PokePicker;
