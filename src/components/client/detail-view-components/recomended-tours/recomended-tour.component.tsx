import React from "react";
import Client_Container from "../../container/container.component";
import { tours } from "@/src/utils/data/tours";
import Client_ToursDirectoryItem from "@/src/components/client/tours-main/tours-directory-item.component";

const Client_RecomendedTours = () => {
  return (
    <div>
      <Client_Container>
        <div className="flex flex-col justify-start">
          <h1 className="text-black text-bold lg:text-3xl md:text-2xl text-1xl gap-5 font-semibold">
            Recomended For You
          </h1>
          <div className="md:grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-10 md:mb-16 lg:mb-20">
            {tours?.splice(3).map((tourItem, index) => (
              <div key={index} className="md:col-span-1 lg:col-span-1">
                <Client_ToursDirectoryItem tour={tourItem} />
              </div>
            ))}
          </div>
        </div>
      </Client_Container>
    </div>
  );
};

export default Client_RecomendedTours;
