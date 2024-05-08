import BreadCrame from "@/src/components/client/blog-main/BreadCrame";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import BlogPostCard from "@/src/components/dashboard/resourceandcenter/BlogPostCard";
import { blogs } from "@/src/utils/data/blogs";
import { BlogDetailsImagePost, BlogImagePost } from "@/src/utils/images/images";
import { Grid, Container } from "@mui/material";
import Image from "next/image";

let list = ["Home", "Blogs", "Travel Instructions"];

const Client_TourDetail = () => {
  return (
    <div className="">
      <Container>
        <div className="flex gap-3 mt-5 mb-12">
          <BreadCrame list={list} />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Models Sizzled The Ramp at a Fashion Show in LA Fashion Week
          </h1>
        </div>
      </Container>

      <div className=" mt-7">
        <Container>
          <Grid container mb={3} spacing={3}>
            <Grid item xs={12}>
              <div>
                <Image src={BlogDetailsImagePost} alt={""} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
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
              </div>
            </Grid>

            <Grid item xs={12}>
              <h1 className="text-3xl font-semibold">Explore More</h1>
            </Grid>

            {blogs.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <BlogPostCard blog={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Client_TourDetail;
