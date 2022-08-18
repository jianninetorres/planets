import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  container: {
    textAlign: "center",
  },
}));

interface PlanetDescriptionProps {
  title: string;
  content: string;
  source: string;
}

const PlanetDescription = (props: PlanetDescriptionProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <h2>{props.title.toUpperCase()}</h2>
      <p>{props.content}</p>
      <p className="citation">
        Source:{" "}
        <a href={props.source} className="external">
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default PlanetDescription;
