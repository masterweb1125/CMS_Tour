import { Blogs } from "@/src/types/client/blogs.types";
import { BlogImageAvator } from "@/src/utils/images/images";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard = ({ blog }: { blog: Blogs }) => {
  return (
    <div className="card tour-card p-4 mt-3 flex flex-col rounded-2xl gap-6 bg-white shadow-md border">
      <div
        className="card-media relative cover bg-center bg-no-repeat h-48 w-full rounded-2xl"
        style={{ backgroundImage: `url(${blog.coverPic})` }}
      />
      <div className="card-content">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-base font-semibold text-black-variant">
            <Link href="/user/blogs/blogdetails">{blog.blogHeading}</Link>
          </h2>
          <ArrowOutward />
        </div>

        <div className="tour-details text-black-variant text-base font-normal flex flex-col gap-5">
          <p className="text-[#475467] text-[12px] font-medium leading-[1.4rem]">
            {blog.description}
          </p>

          <div className="w-[135px] h-10 justify-start items-center gap-3 inline-flex">
            <Image
              src={BlogImageAvator.src}
              alt={"Agent"}
              width={50}
              height={50}
            />
            <div className="flex-col justify-start items-start inline-flex gap-1">
              <div className="text-gray-900 text-sm font-semibold leading-tight">
                {blog.agent?.firstName} {blog.agent?.lastName}
              </div>
              <div className="text-xs font-medium leading-tight flex flex-row gap-1 text-[#475467]">
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

export default BlogPostCard;
