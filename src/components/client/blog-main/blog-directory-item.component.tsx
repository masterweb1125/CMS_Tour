import React from "react";
import { Blogs } from "@/src/types/client/blogs.types";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import { BlogAgentAvatar } from "@/src/utils/images/images";

const Client_BlogDirectoryItem = ({ blog }: { blog: Blogs }) => {
  return (
    <div className="card tour-card p-4 flex flex-col rounded-2xl gap-6  bg-white shadow-md">
      <div
        className="card-media relative cover bg-center bg-no-repeat h-56 w-full rounded"
        style={{ backgroundImage: `url(${blog.coverPic})` }}
      ></div>
      <div className="card-content">
        <div className="title-heading flex flex-col justify-between mb-5">
          <h4 className="text-primary text-l font-semibold leading-7">
            {blog.name}
          </h4>
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-semibold text-black-variant leading-7">
              {blog.blogHeading} 
            </h2>
            <ArrowOutward />
          </div>
        </div>
        <div className="tour-details text-black-variant text-base font-normal  flex flex-col gap-5">
          <p className="description w-[90%] text-slate-600 text-base font-medium leading-normal mb-5">
            {blog.description}
          </p>

          <div className="w-[135px] h-10 justify-start items-center gap-3 inline-flex">
            <Image
              src={BlogAgentAvatar.src}
              alt={"Agent"}
              width={50}
              height={50}
            />
            <div className="flex-col justify-start items-start inline-flex gap-1">
              <div className="text-gray-900 text-sm font-semibold leading-tight">
                {blog.agent?.firstName} {blog.agent?.lastName}
              </div>
              <div className="text-sm font-normal leading-tight flex flex-row gap-1">
                <p>{blog.agent?.date.day}</p>
                <p>{blog.agent?.date.month}</p>
                <p>{blog.agent?.date.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client_BlogDirectoryItem;
