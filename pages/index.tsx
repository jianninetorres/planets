import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

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
