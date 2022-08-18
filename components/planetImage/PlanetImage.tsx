import Image from "next/image";

interface PlanetImage {
  name: string;
  src: string;
}

const PlanetImage = (props: PlanetImage) => {
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
