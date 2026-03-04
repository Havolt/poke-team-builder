import Styles from "./PokeInfo.module.css";

function PokeInfo({ currMonData }: { currMonData: any }) {
  return (
    <div className={Styles["poke-info"]}>
      <img
        className={Styles["poke-image"]}
        src={currMonData?.sprites?.other["official-artwork"].front_default}
        alt={`${currMonData?.name} official artwork`}
      />
      <h2 className={Styles["poke-name"]}>
        {`${currMonData?.name} (#${currMonData?.id})`}
      </h2>
      <p>Type: {currMonData?.type?.join(", ")}</p>
    </div>
  );
}

export default PokeInfo;
