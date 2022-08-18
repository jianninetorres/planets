import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: `1px solid ${theme.colors.lightgrey}`,
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
  },
  title: {
    fontSize: "0.65em",
    color: theme.colors.lightgrey,
    letterSpacing: "0.73px",
    margin: 0,
  },
  data: {
    fontSize: "20px",
    margin: 0,
  },
}));

interface PlanetFactProps {
  title: string;
  data: string;
}

const PlanetFact = (props: PlanetFactProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{props.title.toUpperCase()}</h4>
      <h2 className={classes.data}>{props.data}</h2>
    </div>
  );
};

export default PlanetFact;
