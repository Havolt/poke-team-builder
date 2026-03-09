import PokeType from "../PokeType";
import Styles from "./PokeInfo.module.css";

function PokeInfo({ currMonData }: { currMonData: any }) {
  // If the data is still loading, show a loading message
  if (!currMonData) {
    return (
      <div className={Styles["poke-info"]}>
        <p className={Styles["poke-name"]}>Loading...</p>
      </div>
    );
  }

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
      <p className={Styles["poke-types"]}>
        {currMonData?.types?.map((singleType: any) => (
          <PokeType type={singleType.type.name} key={singleType.type.name} />
        ))}
      </p>
    </div>
  );
}

export default PokeInfo;
