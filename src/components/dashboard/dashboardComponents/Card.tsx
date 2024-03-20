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
}: {
  title: string;
  count: string;
  percentage?: string;
  records?: string;
}) {
  const percentageFlag = count > "15%";

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <KababMenu />
      </div>

      <p className="text-black text-2xl font-bold pt-2">{count}</p>

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
