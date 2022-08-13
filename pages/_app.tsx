import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Nav from "../components/nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: "Open Sans, sans serif",
        spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
        colors: {
          mercury: ["rgba(65, 158, 87, 0)"],
          venus: ["rgba(237, 162, 73, 0)"],
          earth: ["rgba(109, 46, 213, 0)"],
          mars: ["rgba(209, 76, 50, 0)"],
          jupiter: ["rgba(216, 58, 52, 0)"],
          saturn: ["rgba(205, 81, 32, 0)"],
          uranus: ["rgba(30, 193, 162, 0)"],
          neptune: ["rgba(45, 104, 240, 0)"],
          text: ["rgba(255, 255, 255, 0)"],
          background: ["rgba(7, 7, 36, 0)"],
          hover: ["rgba(56, 56, 79, 0)"],
          border: ["rgba(255, 255, 255, 0.2)"],
        },
      }}
    >
      <Nav />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
