import React from "react";
import Client_Container from "../container/container.component";
import Image from "next/image";
import "./unique.styles.css";

type ActionProps = {
  actionTitle: string;
  actionSubheading: string;
  actionImage: string;
  actionDesc: string;
  actionIcon: string;
};

const Client_MakeUsUnique = ({
  actionTitle,
  actionSubheading,
  actionImage,
  actionDesc,
  actionIcon,
}: ActionProps) => {
  return (
    <section className="w-full bg-bg-white py-20">
      <Client_Container>
        <div className="flex-reverse flex flex-col gap-12 md:flex-row justify-between items-center">
          <div className="w-full md:w-2/5 relative  flex justify-center lg:justify-start">
            <Image
              className="relative opacity-100"
              alt="agent"
              width={500}
              height={600}
              src={actionImage}
            />
          </div>
          <div className="action-content flex flex-col text-left w-full md:w-3/5 mt-8 md:mt-0">
            <p className="text-amber-400 text-base font-semibold leading-normal text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              {actionSubheading}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-variant-dark mb-6 leading-snug">
              {actionTitle}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl lg:text-xl font-medium mb-8 leading-relaxed">
              {actionDesc}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Quick Customer Support",
                  description:
                    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                },
                {
                  title: "Quick Customer Support",
                  description:
                    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                },
                {
                  title: "Quick Customer Support",
                  description:
                    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                },
                {
                  title: "Quick Customer Support",
                  description:
                    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col text-left lg:w-full">
                  <Image
                    src={actionIcon}
                    alt={""}
                    width={40}
                    height={40}
                    className="relative opacity-100 mb-4"
                  />
                  <div>
                    <h3 className="text-gray-900 text-lg md:text-sm font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-sm  font-medium leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Client_Container>
    </section>
  );
};

export default Client_MakeUsUnique;
