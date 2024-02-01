import React from "react";
import ClientContainer from "../container/container.component";
import Image from "next/image";
import Link from "next/link";

type CircleSetProps = {
  count: number;
};

type CustomerProps = {
  customerTitle: string;
  customerDesc: string;
  customerImage: string;
  customerImageAvatar: string;
  customerBtnText: string;
};

const CircleSet = ({ count }: CircleSetProps) => {
  const circles = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="w-[17px] h-[17px] bg-amber-500 rounded-full"
    ></div>
  ));

  return (
    <div className="w-[67px] h-[17px] md:justify-start justify-center items-start mt-8 gap-2 inline-flex">
      {circles}
    </div>
  );
};

const ClientCustomerSupport = ({
  customerTitle,
  customerDesc,
  customerImage,
  customerImageAvatar,
  customerBtnText,
}: CustomerProps) => {
  return (
    <ClientContainer>
      <div className="container bg-white flex flex-col justify-center items-center md:relative md:mb-10 md:bg-slate-50 rounded-md md:px-5 mt-44">
        <div className="bg-primary mb-4 w-full md:w-[80%] md:h-[20%] md:absolute md:top-[-3rem] rounded-md flex md:flex-row items-center justify-between p-3">
          <p className="text-sm md:text-lg text-white mb-2 md:mb-0 md:mr-4">
            Get Help From Our Customer Support
          </p>
          <Link
            href="#"
            className="bg-white font-semibold w-[40%] md:w-auto  px-4 py-3 md:px-4 md:py-2 rounded-md"
          >
            {customerBtnText}
          </Link>
        </div>
        <div className="w-full md:flex justify-evenly items-center mt-[80px]">
          <div className=" w-[362px] h-[431px]">
            <Image
              src={customerImage}
              alt=""
              width={362}
              height={431}
              className="rounded-md h-full"
            />
          </div>

          <div className="w-full md:w-1/2 p-4 flex justify-start flex-col bg-slate-50">
            <h2 className="text-black text-xl md:text-3xl font-bold md:font-semibold leading-normal mb-5">
              {customerTitle}
            </h2>
            <div>
              <div className="flex flex-row justify-start items-center gap-3">
                <Image
                  src={customerImageAvatar}
                  alt=""
                  width={50}
                  height={50}
                />
                <div className="flex flex-col justify-center">
                  <h4 className="text-black text-lg font-semibold leading-normal">
                    Jhon Elbert
                  </h4>
                  <p className="text-neutral-500 text-lg font-medium leading-normal">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <div className="text-zinc-700 text-lg font-medium mt-3 leading-[30px]">
                <p>{customerDesc}</p>
              </div>
              <div className="md:text-left text-center">
                <CircleSet count={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientContainer>
  );
};

export default ClientCustomerSupport;
