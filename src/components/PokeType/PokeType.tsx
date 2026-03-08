import Styles from "./PokeType.module.css";

function PokeType({ type }: { type: string }) {
  return (
    <span className={`${Styles["poke-type"]} ${Styles[type]}`}>{type}</span>
  );
}

export default PokeType;
