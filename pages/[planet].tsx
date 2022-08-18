import type { NextPage } from "next";
import Head from "next/head";
import data from "../data/data.json";
import { useRouter } from "next/router";
import useStyles from "./styles";

import PlanetImage from "../components/planetImage/PlanetImage";
import PlanetDescription from "../components/planetDescription/PlanetDescription";
import PlanetFactsContainer from "../components/planetFacts/PlanetFactsContainer";

const Planet: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const name = router.query.planet;
  const content = data.find((planet) => {
    return planet.path === `/${name}`;
  });

  if (!content) {
    return (
      <>
        <Head>
          <title>Out of this world</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>It looks like you’ve left our solar system :(</div>
      </>
    );
  }

  return (
    <div className={classes.container}>
      <Head>
        <title>{content.name === "Earth" ? "Home" : content.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PlanetImage
        name={content.name}
        src={`/planets-images/external/${content.name}-external.svg`}
      />
      <PlanetDescription
        title={content.name}
        content={content.overview.content}
        source={content.overview.source}
      />
      <PlanetFactsContainer
        data={{
          rotationTime: content.rotation,
          revolutionTime: content.revolution,
          radius: content.radius,
          avgTemp: content.temperature,
        }}
      />
    </div>
  );
};

export default Planet;
