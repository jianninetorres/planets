import { useState } from "react";
import Image from "next/image";
import data from "../../data/data.json";
import FutureImage from "next/future/image";
import useStyles from "./styles";
import menuIcon from "../../public/menu-icon.svg";
import chevronIcon from "../../public/chevron-right.svg";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { classes } = useStyles();

  const planets = data.map((planet) => (
    <li key={planet.name} className={classes.planets}>
      <span
        style={{
          display: "block",
          marginRight: "25px",
          backgroundColor: planet.themeColour,
          borderRadius: 100,
          width: "20px",
          height: "20px",
        }}
      ></span>
      {planet.name}
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
        The Planets{" "}
        <FutureImage
          src={menuIcon}
          alt="menu"
          width={24}
          height={24}
          onClick={toggleNav}
        />
      </div>
      <div className={isVisible ? classes.isVisible : classes.isNotVisible}>
        <ul className={classes.planetsContainer}>{planets}</ul>
      </div>
    </nav>
  );
};

export default Nav;
