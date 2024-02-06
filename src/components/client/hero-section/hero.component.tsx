import React from "react";
import { HeroProps } from "@/src/types/client/hero.types";
import "./hero.styles.css";

const Client_Hero: React.FC<HeroProps> = ({
  bgImage,
  subTitle,
  title,
  child,
  subTitleWidth = "auto",
  minHeight = "min-h-screen",
}) => {
  return (
    <section
      className={`bg-cover bg-no-repeat ${minHeight} pt-28 pb-14 lg:pt-0 h-max flex flex-col justify-center items-center w-full text-center gap-8`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-normal text-white block">
        {title}
      </h1>
      <p
        className={`text-sm md:text-md lg:text-lg font-medium leading-7 text-white ${subTitleWidth}`}
      >
        {subTitle}
      </p>
      {child}
    </section>
  );
};

export default Client_Hero;
