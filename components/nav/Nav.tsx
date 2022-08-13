import { MouseEvent, useEffect, useState } from "react";
import FutureImage from "next/future/image";
import Link from "next/link";
import PlanetType from "./helpers";

import useStyles from "./styles";
import menuIcon from "../../public/menu-icon.svg";
import chevronIcon from "../../public/chevron-right.svg";
import data from "../../data/data.json";

const Nav = () => {
  const { classes } = useStyles();
  const hasWindow = typeof window !== "undefined";
  const [isVisible, setIsVisible] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [hover, setHover] = useState(false);
  const [onHoveredPlanet, setOnHoveredPlanet] = useState("");

  // immediately set isWide on load so that the nav will be visible on wider viewports
  useEffect(() => {
    setIsWide(window.innerWidth > 767);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        setIsWide(true);
      } else {
        setIsWide(false);
      }
    });
  }, [hasWindow]);

  const onHover = (e: MouseEvent, planet: PlanetType) => {
    if (e.currentTarget.id === planet.name) {
      setHover(true);
      setOnHoveredPlanet(planet.name);
    }
  };

  const offHover = () => {
    setHover(false);
    setOnHoveredPlanet("");
  };

  const planets = data.map((planet) => (
    <li
      key={planet.name}
      id={planet.name}
      className={classes.planets}
      onMouseEnter={(e) => onHover(e, planet)}
      onMouseLeave={() => offHover()}
      style={{
        color:
          hover && planet.name === onHoveredPlanet
            ? "#FFFFFF"
            : "rgba(255, 255, 255, 0.2)",
        borderTop: hover && planet.name === onHoveredPlanet ? `4px solid` : "",
        borderTopColor:
          hover && planet.name === onHoveredPlanet
            ? `${planet.themeColour}`
            : "",
      }}
    >
      <span
        style={{
          backgroundColor: planet.themeColour,
        }}
        className={classes.planetDisc}
      ></span>
      <Link href={planet.path}>
        <a>{planet.name.toUpperCase()}</a>
      </Link>
      <FutureImage
        src={chevronIcon}
        alt=""
        width={20}
        height={20}
        className={classes.chevronRight}
      />
    </li>
  ));

  const toggleNav = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className={classes.wrapper}>
      <div className={classes.navTitle}>
        <h2 className={classes.navHeading}>THE PLANETS</h2>
        <FutureImage
          src={menuIcon}
          alt="menu"
          width={36}
          height={28}
          onClick={toggleNav}
          className={classes.menuIcon}
        />
      </div>

      <div
        className={
          isVisible || isWide ? classes.isVisible : classes.isNotVisible
        }
      >
        <ul className={classes.planetsContainer}>{planets}</ul>
      </div>
    </nav>
  );
};

export default Nav;
