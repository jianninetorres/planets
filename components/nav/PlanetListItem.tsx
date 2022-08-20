import { MouseEventHandler, useState } from "react";
import chevronIcon from "../../public/chevron-right.svg";
import FutureImage from "next/future/image";
import Link from "next/link";
import useStyles from "./styles";
import { PlanetType } from "./helpers";

interface PlanetListItemProps {
  data: PlanetType[];
}

const PlanetListItem = (props: PlanetListItemProps): JSX.Element => {
  const [hover, setHover] = useState(false);
  const [onHoveredPlanet, setOnHoveredPlanet] = useState("");
  const [hoverColor, setHoverColor] = useState("");
  const { classes } = useStyles(hoverColor);

  const onHover = (e: HTMLLIElement, planet: PlanetType) => {
    if (e.id === planet.name) {
      setHover(true);
      setOnHoveredPlanet(planet.name);
      setHoverColor(planet.themeColour);
    }
  };

  const offHover = () => {
    setHover(false);
    setOnHoveredPlanet("");
  };

  const List = props.data.map((planet) => {
    return (
      <li
        key={planet.name}
        id={planet.name}
        className={`${classes.planets} ${
          hover && planet.name === onHoveredPlanet ? classes.hoverColor : ""
        } ${
          hover && planet.name === onHoveredPlanet ? classes.hoverBorderTop : ""
        } ${
          hover && planet.name === onHoveredPlanet
            ? classes.hoverBorderTopColor
            : ""
        }`}
        onMouseEnter={(e) => onHover(e.currentTarget, planet)}
        onMouseLeave={() => offHover()}
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
    );
  });

  return <ul className={classes.planetsContainer}>{List}</ul>;
};

export default PlanetListItem;
