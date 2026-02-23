import { useEffect } from "react";

function PokePicker() {
  useEffect(() => {
    console.log("PokePicker mounted");
    return () => {
      console.log("PokePicker unmounted");
    };
  }, []);
  return <div>PokePicker</div>;
}

export default PokePicker;
