import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav/Nav";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
    </div>
  );
};

export default Home;
