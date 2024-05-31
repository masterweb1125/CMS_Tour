import { Blogs } from "@/src/types/client/blogs.types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogPostCard from "../../supplierdashboard/resourceandcenter/BlogPostCard";
import Client_Container from "../container/container.component";
import toast from "react-hot-toast";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { UseDispatch, useDispatch } from "react-redux";
import { addBlogs } from "@/src/redux/features/general.slice";

type BlogsProps = {
  blogs: Array<Blogs> | undefined;
  directoryTitle: string;
  subPara: string;
};

const Client_BlogTourDirectory = ({
  blogs,
  directoryTitle,
  subPara,
}: BlogsProps) => {

  const [Blogs, setBlogs] = useState([])
  const dispatch = useDispatch();

  const FetchingBlogs = async () => {
   try {
     const res = await API_DOMAIN.get("api/v1/blog");
     setBlogs(res?.data?.data);
     dispatch(addBlogs(res?.data?.data))
     dispatch
   } catch (error) {
     console.log("fetching blogs failed: ", error);
     toast.error("Retrieving blogs failed", {
       style: { width: "auto", height: "auto" },
       duration: 3000,
     });
   }
}



useEffect(() => {
  FetchingBlogs();
}, [])


  return (
    <Client_Container>
      <div className="directory-titles pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between justify-start items-start">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-[72px] mb-3 capitalize">
              {directoryTitle}
            </h1>
            <h5 className="text-gray-text text-lg leading-7 mb-3 font-medium">
              {subPara}
            </h5>
          </div>

          <Link
            type="submit"
            className="rounded py-3 px-4 btn btn-outline bg-primary text-white font-semibold text-base leading-4 w-[160px] md:w-[190px] text-center"
            href="/user/blogs"
          >
            Explore More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-10 md:mb-16 lg:mb-20">
        {Blogs?.map((blogItem, index) => {
          return <BlogPostCard key={index} Index={index} blog={blogItem} />;
        })}
      </div>
      {/* return <Client_BlogDirectoryItem key={index} blog={blogItem} />; */}
    </Client_Container>
  );
};

export default Client_BlogTourDirectory;
