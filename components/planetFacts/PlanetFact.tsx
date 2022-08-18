interface PlanetFactProps {
  title: string;
  data: string;
}

const PlanetFact = (props: PlanetFactProps) => {
  return (
    <div>
      <h4>{props.title.toUpperCase()}</h4>
      <h2>{props.data}</h2>
    </div>
  );
};

export default PlanetFact;
