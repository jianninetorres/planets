import Image from "next/image";
import data from "../../data/data.json";
import useStyles from "./styles";
import menuIcon from "../../public/menu-icon.svg";

const Nav = () => {
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
    </li>
  ));

  return (
    <nav className={classes.wrapper}>
      <div className={classes.navTitle}>
        The Planets <Image src={menuIcon} alt="menu" width={24} height={24} />
      </div>
      <div>
        <ul className={classes.planetsContainer}>{planets}</ul>
      </div>
    </nav>
  );
};

export default Nav;
