import React, { useEffect, useState } from "react";
import type { Tours } from "@/src/types/client/tours.types";
import Client_ToursDirectoryItem from "./tours-directory-item.component";
import Client_Container from "../container/container.component";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { addToursData } from "@/src/redux/features/general.slice";


type ToursProps = {
  tours: Array<Tours> | undefined;
  directoryTitle: string;
  subPara: string;
};

const Client_ToursDirectory = ({
  tours,
  directoryTitle,
  subPara,
}: ToursProps) => {
  const filterData: any = useSelector((root: any) => root?.general?.filter);
  const [Tours, setTours] = useState<any>([])
  const dispatch = useDispatch();
  // Extract filter criteria
  const { destination, category, price } = filterData;
  // Apply filters
  let filteredTours = Tours;

  if (destination) {
    filteredTours = filteredTours?.filter(
      (tour:any) =>
        tour?.destination?.toLowerCase() === destination?.toLowerCase()
    );
  }

  if (category) {
    filteredTours = filteredTours?.filter(
      (tour:any) => tour.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (price) {
    const [minPrice, maxPrice] = price.split("-").map(Number);
    filteredTours = filteredTours?.filter(
      (tour: any) => tour.tourPrice >= minPrice && tour.tourPrice <= maxPrice
    );
  }

  //  retrieving tours from db
  const FetchingTours = async () => {
    try {
      const res = await API_DOMAIN.get("/api/v1/tour");
      setTours(res?.data?.data)
      dispatch(addToursData(res?.data?.data))
    } catch (error) {
      console.log("something went wrong: ", error);
      toast.error("Retrieving tours data failed")
    }
  }

  useEffect(() => {
    FetchingTours();
  }, [])
  
  return (
    <Client_Container>
      <div className="directory-titles pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between justify-start items-start">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-[72px] mb-4 capitalize">
              {directoryTitle}
            </h1>
            <h5 className="text-gray-text text-lg leading-7 font-medium">
              {subPara}
            </h5>
          </div>

          <div className="mt-4 md:flex hidden">
            <Link
              type="submit"
              className="rounded py-3 px-4 btn btn-outline bg-primary text-white font-semibold text-base leading-4 md:w-[160px] w-[160px] text-center"
              href="/explore-more"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-10 md:mb-16 lg:mb-20">
        {filteredTours?.slice(0, 6).map((tourItem:any, index:number) => (
          <div key={index} className="md:col-span-1 lg:col-span-1">
            <Client_ToursDirectoryItem tour={tourItem} />
          </div>
        ))}
      </div>

      <div className="md:hidden grid grid-cols-1 gap-6 justify-center mb-10 mb-16">
        {filteredTours?.slice(0, 2).map((tourItem:any, index:number) => (
          <div key={index} className="md:col-span-1 lg:col-span-1">
            <Client_ToursDirectoryItem tour={tourItem} index={index} />
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-end mb-5">
        <Link
          type="submit"
          className="rounded py-3 px-4 btn btn-outline bg-primary text-white font-semibold text-base leading-4 md:w-[160px] w-[160px] text-center mb-3"
          href="/explore-more"
        >
          Explore More
        </Link>
      </div>
    </Client_Container>
  );
};

export default Client_ToursDirectory;
