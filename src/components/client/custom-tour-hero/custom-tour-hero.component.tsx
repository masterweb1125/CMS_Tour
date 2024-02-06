import React from "react";
import { CustomTourProps } from "@/src/types/client/customtour.types";

const Client_CustomTourHero: React.FC<CustomTourProps> = ({
  bgImage,
  child,
}) => {
  return (
    <section
      className={`bg-cover bg-no-repeat pt-28 pb-14 lg:pt-0 h-max flex flex-col justify-center items-center w-full text-center gap-8 min-h-screen`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {child}
    </section>
  );
};

export default Client_CustomTourHero;
