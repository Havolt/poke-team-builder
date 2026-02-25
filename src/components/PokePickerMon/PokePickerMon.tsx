import Styles from "./PokePickerMon.module.css";

import LIST_CONSTANTS from "../../constants/links.json";

function PokePickerMon({ name, imgPath }: { name: string; imgPath: string }) {
  return (
    <div className={Styles["poke-picker-mon"]}>
      <img src={`${LIST_CONSTANTS.spriteBaseUrl}${imgPath}`} alt={name} />
      {name}
    </div>
  );
}

export default PokePickerMon;
