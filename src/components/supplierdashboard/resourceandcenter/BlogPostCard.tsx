import { Blogs } from "@/src/types/client/blogs.types";
import { BlogImageAvator } from "@/src/utils/images/images";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import { blogs } from "@/src/utils/data/blogs";
import Link from "next/link";

// slice the string
export const truncateString = (str:string, num:number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + " ...";
};


const BlogPostCard = ({ blog, Index }: any) => {
  return (
    <Link href={`/user/blogs/${blog?._id}`} className="card tour-card p-4 mt-3 flex flex-col rounded-2xl gap-6 bg-white shadow-md border cursor-pointer">
      <div
        className="card-media relative cover bg-center bg-no-repeat h-48 w-full rounded-2xl"
        style={{ backgroundImage: `url(${blogs[Index]?.coverPic})` }}
      />
      <div className="card-content">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-base font-semibold text-black-variant">
            {truncateString(blog?.blogTitle, 26)}
          </h2>
          <ArrowOutward />
        </div>

        <div className="tour-details text-black-variant text-base font-normal flex flex-col gap-5">
          <p className="text-[#475467] text-[12px] font-medium leading-[1.4rem]">
            {truncateString(blog?.blogDesc, 100)}
          </p>

          <div className="w-[240px] h-10 justify-start items-center gap-3 inline-flex ">
            <Image
              src={BlogImageAvator.src}
              alt={"Agent"}
              width={50}
              height={50}
            />
            <div className="flex-col justify-start items-start inline-flex gap-1">
              <div className="text-gray-900 text-sm font-semibold leading-tight">
                {blog?.publisherName}
              </div>
              <div className="text-xs font-medium leading-tight flex flex-row gap-1 text-[#475467]">
                {blog?.publishDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
