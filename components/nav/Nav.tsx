import { useEffect, useState } from "react";
import FutureImage from "next/future/image";

import useStyles from "./styles";
import menuIcon from "../../public/menu-icon.svg";
import chevronIcon from "../../public/chevron-right.svg";
import data from "../../data/data.json";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const { classes } = useStyles();
  const hasWindow = typeof window !== "undefined";

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

  const planets = data.map((planet) => (
    <li key={planet.name} className={classes.planets}>
      <span
        style={{
          backgroundColor: planet.themeColour,
        }}
        className={classes.planetDisc}
      ></span>
      {planet.name.toUpperCase()}
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
