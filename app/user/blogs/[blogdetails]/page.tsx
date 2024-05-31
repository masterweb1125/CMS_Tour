"use client";
import BreadCrame from "@/src/components/client/blog-main/Blog_profile_breadcrame";
import BlogPostCard from "@/src/components/dashboard/resourceandcenter/BlogPostCard";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { blogs } from "@/src/utils/data/blogs";
import { BlogDetailsImagePost } from "@/src/utils/images/images";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

let list = ["Home", "Blogs", "Travel Instructions"];

const Client_TourDetail = ({ params }: any) => {

  const blogId = params.blogdetails;
  const [Blog, setBlog] = useState(blogId);

  const Blogs: any = useSelector((root: any) => root?.general?.blogs);
  // below is the function used for to fetch tour data
  const FetchingBlogData = async () => {
    try {
      const res = await API_DOMAIN.get(`/api/v1/blog/${blogId}`);
      setBlog(res?.data?.data);
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };

  useEffect(() => {
    FetchingBlogData();
  }, [params]);

  return (
    <div className="">
      <Container>
        <div className="flex gap-3 mt-5 mb-12">
          <BreadCrame list={list} />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">
            {Blog?.blogTitle}
          </h1>
        </div>
      </Container>

      <div className=" mt-7">
        <Container>
          <Grid container mb={3} spacing={3}>
            <Grid item xs={12}>
              <div>
                <Image src={BlogDetailsImagePost} alt="" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <p className="tracking-[2px] leading-8">{Blog?.blogDesc}</p>
              {/* <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                </p>
                <br />
                <p>
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis
                  id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet.
                </p>
                <br />
                <p>
                  Pellentesque commodo lacus at sodales sodales. Quisque
                  sagittis orci ut diam condimentum, vel euismod erat placerat.
                  In iaculis arcu eros, eget tempus orci facilisis id.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
                  mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                  fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
                <br />

                <div>
                  <h1 className="text-3xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
                <br />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                </p>
                <br />
                <p>
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis
                  id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet.
                </p>
                <br />
                <p>
                  Pellentesque commodo lacus at sodales sodales. Quisque
                  sagittis orci ut diam condimentum, vel euismod erat placerat.
                  In iaculis arcu eros, eget tempus orci facilisis id.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
                  mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                  fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
                <br />
              </div> */}
            </Grid>

            <Grid item xs={12}>
              <h1 className="text-3xl font-semibold">Explore More</h1>
            </Grid>

            {Blogs.map((item:any, index:any) => (
              <Grid item xs={12} md={3} key={index}>
                <BlogPostCard blog={item} Index={index} key={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Client_TourDetail;
