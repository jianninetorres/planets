import { PlanetType } from "../nav/helpers";
import PlanetFact from "./PlanetFact";

interface PlanetFactsContainerProps {
  data: {
    rotationTime: string;
    revolutionTime: string;
    radius: string;
    avgTemp: string;
  };
}

const PlanetFactsContainer = (props: PlanetFactsContainerProps) => {
  return (
    <>
      <PlanetFact title="Rotation Time" data={props.data.rotationTime} />
      <PlanetFact title="Revolution Time" data={props.data.revolutionTime} />
      <PlanetFact title="Radius" data={props.data.radius} />
      <PlanetFact title="Average Temp." data={props.data.avgTemp} />
    </>
  );
};

export default PlanetFactsContainer;
