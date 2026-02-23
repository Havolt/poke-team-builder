const getPokemonSprites = async (fullPokemon) => {
  fullPokemon.forEach(async (poke, index) => {
    const pokeData = await fetch(poke.url);
    const pokeJson = await pokeData.json();
    console.log(pokeJson);
    fullPokemon[index].sprites = pokeJson.sprites;
  });
};
