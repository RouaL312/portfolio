/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { MENULINKS, WORK } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fade } from "react-reveal";
import styles from "./Work.module.scss";
import Button from "../Button/Button";
import WorkTile from "./WorkTile/WorkTile";

const Work = ({ clientWidth }) => {
  const targetSection = useRef(null);
  const inputRef = useRef(null);
  const macRef = useRef(null);

  // Add more "false" elements when the job profiles increase. Rn it is only one -> [Spacenos]
  const [checked, setChecked] = useState([false]);
  const [isActive, setIsActive] = useState(false);
  const [gunStyle, setGunStyle] = useState({});

  // onClick -> option chosen from the nerf gun animation
  const [mockupStyle, setMockupStyle] = useState({});
  const [macTopStyle, setMacTopStyle] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection, isActive]);
  return (
    <section
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
              A quick recap of where I&apos;ve worked.{" "}
            </h2>
          </div>
          <div
          className={`${
            clientWidth > 650 ? "mt-12" : "mt-8"
          } flex project-wrapper w-fit seq`}
        >
          {WORK.map((work, index) => (
            <WorkTile
              classes={
                index === WORK.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"
              }
              work={work}
              key={work.company}
            />
          ))}

        </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
