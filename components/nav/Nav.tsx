import { useEffect, useState } from "react";
import data from "../../data/data.json";
import FutureImage from "next/future/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

import menuIcon from "../../public/menu-icon.svg";
import PlanetListItem from "./PlanetListItem";

const Nav = () => {
  const { classes } = useStyles("");
  const router = useRouter();
  const hasWindow = typeof window !== "undefined";
  const [isVisible, setIsVisible] = useState(false);
  const [isWide, setIsWide] = useState(false);

  // immediately set isWide on load so that the nav will be visible on wider viewports
  useEffect(() => {
    setIsWide(window.innerWidth > 767);
  }, []);

  // close nav after navigating to a different page
  useEffect(() => {
    setIsVisible(false);
  }, [router.query]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        setIsWide(true);
      } else {
        setIsWide(false);
      }
    });
  }, [hasWindow]);

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
        <PlanetListItem data={data} />
      </div>
    </nav>
  );
};

export default Nav;
