function PokeInfo({ currMonData }: { currMonData: any }) {
  return (
    <div className="poke-info">PokeInfo for Pokémon ID: {currMonData?.id}</div>
  );
}

export default PokeInfo;
