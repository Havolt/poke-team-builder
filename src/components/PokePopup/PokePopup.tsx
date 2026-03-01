import React from "react";

import Styles from "./PokePopup.module.css";

function PokePopup({
  children,
  handleClose,
}: {
  children: React.ReactNode;
  handleClose: () => void;
}) {
  return (
    <div
      className={Styles["poke-popup-wrapper"]}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={Styles["poke-popup"]}>{children}</div>
    </div>
  );
}

export default PokePopup;
