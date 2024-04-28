import React from "react";
import { HeroProps } from "@/src/types/client/hero.types";
import "./hero.styles.css";

const Client_Hero: React.FC<HeroProps> = ({
  bgImage,
  subTitle,
  title,
  child,
  subTitleWidth = "auto",
  minHeight,
  smallText
}) => {
  return (
    <section
      className={`bg-cover bg-no-repeat ${minHeight} pt-28 pb-14 lg:pt-20 h-80 flex flex-col justify-center items-center w-full text-center gap-8`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-normal text-white block">
        {title}
      </h1>
      <div className={`${smallText ? "w-[950px]" : "w-[1150px]"} flex align-items justify-center px-2`}>

        <p
          className={`text-sm md:text-xs lg:text-lg font-light text-white ${subTitleWidth}`}
        >
          {subTitle}
        </p>
      </div>
      {child}
    </section>
  );
};

export default Client_Hero;
