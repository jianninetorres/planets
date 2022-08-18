interface PlanetDescriptionProps {
  title: string;
  content: string;
}

const PlanetDescription = (props: PlanetDescriptionProps) => {
  return (
    <div>
      <h2>{props.title.toUpperCase()}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default PlanetDescription;
