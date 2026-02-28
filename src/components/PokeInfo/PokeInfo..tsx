function PokeInfo({ currInfoMon }: { currInfoMon: number | null }) {
  return (
    <div className="poke-info">PokeInfo for Pokémon ID: {currInfoMon}</div>
  );
}

export default PokeInfo;
