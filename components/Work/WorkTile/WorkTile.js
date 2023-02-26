import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./WorkTile.module.scss";

const WorkTile = ({ work, classes, isDesktop }) => {
  const { company, title, location, range, responsibilities, url,gradient,blurImage, image} = work;
  const workCard = useRef(null);
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false,
  };

  useEffect(() => {
    VanillaTilt.init(workCard.current, options);
  }, [workCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl ${additionalClasses}`}
      ref={workCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-[25rem] w-[38rem] bg-black ${styles.WorkTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full top-0 left-0 object-cover opacity-30"
        />
        <Image
          placeholder="blur"
          blurDataURL={blurImage}
          src={image}
          alt={company}
          layout="fill"
          className={`${styles.projectImage} z-0`}
        />
        <div
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        ></div>
        <h1
          className="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {company}<br></br>
          {title}
        </h1>
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {location}<br></br>
          {range}
        </h2>
      
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {responsibilities}
        </h2>
      </div>
    </a>
  );
};

export default WorkTile;
