import { useEffect } from "react";

const get151Pokemon = async (controller: AbortController) => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151",
      {
        signal: controller.signal,
      },
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

function PokePicker() {
  useEffect(() => {
    console.log("PokePicker mounted");

    const controller = new AbortController();

    const fetchPromise = get151Pokemon(controller);

    return () => {
      // This cancels the first request when React "re-mounts"
      controller.abort();
      console.log("PokePicker unmounted");
    };
  }, []);
  return <div>PokePicker</div>;
}

export default PokePicker;
