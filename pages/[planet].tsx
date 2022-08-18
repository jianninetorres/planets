import type { NextPage } from "next";
import Head from "next/head";
import data from "../data/data.json";
import { useRouter } from "next/router";

const Planet: NextPage = () => {
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
    <div className="">
      <Head>
        <title>{content.name === "Earth" ? "Home" : content.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>{content.name}</div>
    </div>
  );
};

export default Planet;
