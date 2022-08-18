import Image from "next/image";

interface PlanetImageProps {
  name: string;
  src: string;
}

const PlanetImage = (props: PlanetImageProps) => {
  return (
    <div>
      <Image
        src={props.src}
        alt={`Animated image of ${props.name}`}
        width={200}
        height={200}
        layout="fill"
        objectFit="scale-down"
      />
    </div>
  );
};

export default PlanetImage;
