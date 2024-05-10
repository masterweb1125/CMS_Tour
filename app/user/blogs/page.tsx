"use client";
import BreadCrame from "@/src/components/client/blog-main/Blog_profile_breadcrame";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import BlogPostCard from "@/src/components/dashboard/resourceandcenter/BlogPostCard";
import { blogs } from "@/src/utils/data/blogs";
import { BlogImagePost } from "@/src/utils/images/images";
import { Grid, Container } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

let list = ["Home", "Blogs"];

const Client_TourDetail = () => {

 const [filteredBlogs, setFilteredBlogs] = useState(blogs);
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchChange = (event:any) => {
   setSearchTerm(event.target.value);
   filterBlogs(event.target.value);
 };

 const filterBlogs = (value:any) => {
   const filtered = blogs.filter((blog) =>
     blog.blogHeading.toLowerCase().includes(value.toLowerCase())
   );
   setFilteredBlogs(filtered);
 };




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
            {filteredBlogs.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <BlogPostCard blog={item} />
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
