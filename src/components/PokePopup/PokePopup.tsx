import React from "react";

import Styles from "./PokePopup.module.css";

function PokePopup({ children }: { children: React.ReactNode }) {
  return (
    <div className={Styles["poke-popup-wrapper"]}>
      <div className={Styles["poke-popup"]}>{children}</div>
    </div>
  );
}

export default PokePopup;
