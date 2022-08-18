import Image from "next/image";
import useStyles from "./styles";

interface PlanetImageProps {
  name: string;
  src: string;
}

const PlanetImage = (props: PlanetImageProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Image
        src={props.src}
        alt={`Animated image of ${props.name}`}
        width={300}
        height={300}
        layout="intrinsic"
      />
    </div>
  );
};

export default PlanetImage;
