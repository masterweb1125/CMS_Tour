"use client";
import BreadCrame from "@/src/components/client/blog-main/Blog_profile_breadcrame";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import BlogPostCard from "@/src/components/dashboard/resourceandcenter/BlogPostCard";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { blogs } from "@/src/utils/data/blogs";
import { BlogImagePost } from "@/src/utils/images/images";
import { Grid, Container } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

let list = ["Home", "Blogs"];

const Client_TourDetail = () => {
  const [Blogs, setBlogs] = useState<any>([]);
 const [filteredBlogs, setFilteredBlogs] = useState<any>([]);
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchChange = (event:any) => {
   setSearchTerm(event.target.value);
   filterBlogs(event.target.value);
 };

 const filterBlogs = (value:any) => {
   const filtered = Blogs?.filter((blog:any) =>
     blog?.blogTitle?.toLowerCase()?.includes(value?.toLowerCase())
   );
   setFilteredBlogs(filtered);
 };



  const FetchingBlogs = async () => {
    try {
      const res = await API_DOMAIN.get("api/v1/blog");
      console.log("res.blog: ", res.data);
      setFilteredBlogs(res?.data?.data);
      setBlogs(res?.data?.data);
    } catch (error) {
      console.log("fetching blogs failed: ", error);
      toast.error("Retrieving blogs failed", {
        style: { width: "auto", height: "auto" },
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    FetchingBlogs();
  }, []);


  return (
    <div className="">
      <div className="flex gap-3 my-5 pl-20">
        <BreadCrame list={list} />
      </div>
      <div className="">
        <Image src={BlogImagePost} alt="" />
      </div>

      <div className="mt-7">
        <Container>
          <Grid container mb={3} spacing={3}>
            <Grid item xs={12} md={9}>
              <div>
                <h1 className="text-3xl font-semibold font-mont">Our Blogs</h1>
                <h6 className="text-xs text-[#475467] pt-3">
                  Embark on a journey to unforgettable destinations,
                </h6>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <SearchInput value={searchTerm} onChange={handleSearchChange} />
            </Grid>
          </Grid>
          <Grid container mb={3} spacing={3}>
            {filteredBlogs.map((item:any, index:any) => (
              <Grid item xs={12} md={3} key={index}>
                <BlogPostCard blog={item} Index={index} />
              </Grid>
            ))}


            
            {/* {blogs.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <BlogPostCard blog={item} />
              </Grid>
            ))} */}
            {/* {blogs.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <BlogPostCard blog={item} />
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Client_TourDetail;
