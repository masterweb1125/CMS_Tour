"use client";
import { Tours } from "@/src/types/client/tours.types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FilterModal from "./tours-filtermodal";
import { tours } from "@/src/utils/data/tours";

const Client_ToursDirectoryItem = ({ tour, index }: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card tour-card p-4 flex flex-col rounded-2xl gap-6  bg-white shadow-md">
      <div
        className="card-media relative cover bg-center h-56 w-full rounded-lg"
        style={{ backgroundImage: `url(${tour?.imageUrl})` }}
      >
        <div className="favorite-container bg-white absolute top-3 right-3 rounded-lg text-black">
          <IconButton>
            <FavoriteBorderIcon fontSize="small" color="inherit" />
          </IconButton>
        </div>
      </div>

      <div className="card-content">
        <div className="title-price flex flex-row justify-between mb-5">
          <h2 className="text-2xl font-semibold text-black-variant leading-7">
            {tour?.name}
          </h2>
          <h4 className="text-primary text-2xl font-semibold leading-7">
            ${tour?.tourPrice}
          </h4>
        </div>

        <div className="agent-details mb-5 flex flex-row items-center gap-2">
          <Image
            src={tours[1]?.agent?.avatarUrl || ""}
            width={20}
            height={20}
            alt={tours[index]?.agent?.firstName || "agent pic"}
          />
          <h5 className="text-xs font-medium leading-3 text-black-variant">
            @{tours[1]?.agent?.firstName} <span className="opacity-70">from</span>{" "}
            {tour?.location}
          </h5>
        </div>

        <div className="tour-details text-black-variant text-xs font-normal leading-4 flex flex-col gap-5">
          <p className="description">{tour?.description}</p>

          <div className="tour-meta flex flex-col gap-2">
            <div className="tour-timings flex flex-row gap-2 items-center">
              <WatchLaterIcon fontSize="small" sx={{ color: "#1D1D1F" }} />
              <span className="text-black-variant text-xs font-normal leading-3">
                {tours[1]?.duration?.hours} hours, {tours[index]?.duration?.minutes} minutes
              </span>
            </div>

            <div className="tour-viewers flex flex-row gap-2 items-center">
              <PersonIcon fontSize="small" sx={{ color: "#1D1D1F" }} />
              <span className="text-black-variant text-xs font-normal leading-3">
                {tours[1]?.viewers} viewers
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-actions flex flex-row gap-2">
        <button
          onClick={handleOpen}
          className="rounded-lg py-2 px-4 btn btn-outline w-full max-w bg-primary text-white font-semibold text-xs leading-4"
        >
          Book Now
        </button>

        <Link className="w-full" href={`/tour-detail/${tour._id}`}>
          <button
            type="submit"
            className="rounded-lg py-2 px-4 btn btn-outline w-full max-w bg-gray-variant text-black-variant font-semibold text-xs leading-4"
          >
            View Detail
          </button>
        </Link>
      </div>

      <FilterModal open={open} tourDetail={tour} handleClose={handleClose} />
    </div>
  );
};

export default Client_ToursDirectoryItem;
