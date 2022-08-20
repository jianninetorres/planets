import { useReducer, useState } from "react";
import chevronIcon from "../../public/chevron-right.svg";
import FutureImage from "next/future/image";
import Link from "next/link";
import useStyles from "./styles";
import { PlanetType } from "./helpers";
import {
  ACTION_TYPES,
  INITIAL_STATE,
  planetListItemReducer,
} from "./planetListItemReducer";

interface PlanetListItemProps {
  data: PlanetType[];
}

const PlanetListItem = (props: PlanetListItemProps): JSX.Element => {
  const [state, dispatch] = useReducer(planetListItemReducer, INITIAL_STATE);
  const { classes } = useStyles(state.hoverColor);

  const onHover = (e: HTMLLIElement, planet: PlanetType) => {
    if (e.id === planet.name) {
      dispatch({
        type: ACTION_TYPES.HOVER,
        payload: {
          onHoveredPlanet: planet.name,
          hoverColor: planet.themeColour,
        },
      });
    }
  };

  const offHover = () => {
    dispatch({
      type: ACTION_TYPES.NOT_HOVER,
      payload: {
        onHoveredPlanet: "",
        hoverColor: "",
      },
    });
  };

  const List = props.data.map((planet) => {
    return (
      <li
        key={planet.name}
        id={planet.name}
        className={`${classes.planets} ${
          state.hover && planet.name === state.onHoveredPlanet
            ? classes.hoverColor
            : ""
        } ${
          state.hover && planet.name === state.onHoveredPlanet
            ? classes.hoverBorderTop
            : ""
        } ${
          state.hover && planet.name === state.onHoveredPlanet
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
