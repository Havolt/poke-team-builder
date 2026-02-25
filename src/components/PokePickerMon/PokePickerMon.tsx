import Styles from "./PokePickerMon.module.css";

import LIST_CONSTANTS from "../../constants/links.json";

type PokePickerMonProps = {
  name: string;
  imgPath: string;
  onClick: () => void;
};

function PokePickerMon({ name, imgPath, onClick }: PokePickerMonProps) {
  return (
    <button
      className={Styles["poke-picker-mon"]}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick}
    >
      <img src={`${LIST_CONSTANTS.spriteBaseUrl}${imgPath}`} alt={name} />
      <p>{name}</p>
    </button>
  );
}

export default PokePickerMon;
