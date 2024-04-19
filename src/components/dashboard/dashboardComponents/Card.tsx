import React from "react";
import {
  GreenArrow,
  GreenChart,
  KababMenu,
  RedArrow,
  RedChart,
} from "./CardItems";

function CardComponent({
  title,
  count,
  percentage,
  records,
  descritpion,
  Component,
}: {
  title?: string;
  count?: any;
  percentage?: string;
  records?: string;
  descritpion?: string;
  Component?: any;
}) {
  const percentageFlag = count > "15%";

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {title && (
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <KababMenu />
        </div>
      )}

      {count && <p className="text-black text-2xl font-bold pt-2">{count}</p>}

      {descritpion?.length && (
        <p className="pt-2 text-[#979797] text-sm">{descritpion}</p>
      )}

      {Component && <Component />}

      {percentage && (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              {percentageFlag ? <GreenArrow /> : <RedArrow />}
              <div
                className={`${
                  percentageFlag ? "text-[#027A48]" : "text-[#B42318]"
                } font-medium`}
              >
                {percentage}
              </div>
            </div>
            <div className="text-[#475467] font-medium text-base">
              vs last month
            </div>
          </div>
          {percentageFlag ? <GreenChart /> : <RedChart />}
        </div>
      )}

      {records && (
        <div className="flex justify-between items-center my-5">
          <div className="text-[#475467] font-medium text-base">
            {records} people Traveled
          </div>
        </div>
      )}
    </div>
  );
}

export default CardComponent;
