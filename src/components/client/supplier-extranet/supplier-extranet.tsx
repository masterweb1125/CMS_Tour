import React from "react";
import Client_Container from "../container/container.component";
import Link from "next/link";
import Image from "next/image";
import {
  AgentAvatarFour,
  AgentAvatarOne,
  AgentAvatarThree,
  AgentAvatarTwo,
} from "@/src/utils/images/images";

type ActionProps = {
  actionTitle: string;
  actionDesc: string;
  actionImage: string;
  actionBtnText: string;
};

const Client_AgentExploreAction = ({
  actionTitle,
  actionDesc,
  actionImage,
  actionBtnText,
}: ActionProps) => {
  return (
    <section className="w-full bg-bg-gray py-20">
      <Client_Container>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="action-content flex flex-col text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-variant-dark mb-6 leading-snug">
              {actionTitle}
            </h1>
            <p className="text-gray-variant-dark text-lg md:text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
              {actionDesc}
            </p>
            <Link
              className="mb-10 btn py-5 px-5 rounded-md btn btn-outline w-64 text-center bg-primary text-white font-semibold text-xl lg:text-2xl"
              href="#"
            >
              {actionBtnText}
            </Link>

            <div className="flex flex-row testimonials gap-2 items-center">
              <div className="avatar-iterator flex flex-row relative">
                {[
                  AgentAvatarOne,
                  AgentAvatarTwo,
                  AgentAvatarThree,
                  AgentAvatarFour,
                ].map((item, index) => {
                  return (
                    <div key={index} className={`relative z-[${index}] -ml-2`}>
                      <Image
                        src={item.src}
                        width={44}
                        height={44}
                        alt="agent avatar"
                      />
                    </div>
                  );
                })}
              </div>
              <span className="capitalize text-black text-base font-semibold leading-6">
                Trusted by 2000+ Agents
              </span>
            </div>
          </div>
          <div className="w-full h-auto relative flex flex-row justify-center lg:justify-end">
            <Image
              className="relative opacity-100"
              src={actionImage}
              alt="agent"
              width={464}
              height={592}
            />
          </div>
        </div>
      </Client_Container>
    </section>
  );
};

export default Client_AgentExploreAction;
