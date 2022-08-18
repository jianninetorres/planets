import { PlanetType } from "../nav/helpers";
import PlanetFact from "./PlanetFact";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  container: {
    display: "grid",
    gridGap: "8px",
  },
}));

interface PlanetFactsContainerProps {
  data: {
    rotationTime: string;
    revolutionTime: string;
    radius: string;
    avgTemp: string;
  };
}

const PlanetFactsContainer = (props: PlanetFactsContainerProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <PlanetFact title="Rotation Time" data={props.data.rotationTime} />
      <PlanetFact title="Revolution Time" data={props.data.revolutionTime} />
      <PlanetFact title="Radius" data={props.data.radius} />
      <PlanetFact title="Average Temp." data={props.data.avgTemp} />
    </div>
  );
};

export default PlanetFactsContainer;
