import BlogPostCard from "@/src/components/dashboard/resourceandcenter/BlogPostCard";
import { blogs } from "@/src/utils/data/blogs";
import { Grid } from "@mui/material";

function CommissionAndIncentive() {
  return (
    <div>
      <Grid container mt={3}>
        <Grid item xs={12} md={5.6}>
          <h1 className="font-bold text-3xl">Our Blogs</h1>
          <p className="mt-2 text-[#626262] text-xs font-medium leading-5">
            Embark on a journey to unforgettable destinations, where
            breathtaking landscapes meet vibrant cultures. Your adventure of a
            lifetime starts right here!
          </p>
        </Grid>

        <Grid item xs={12} md={4.5}></Grid>
      </Grid>

      <Grid container mt={1} spacing={1}>
        {blogs.map((item, index) => (
          <Grid key={index} item xs={12} md={4} lg={3}>
            <BlogPostCard blog={item} key={index} />
          </Grid>
        ))}
      </Grid>

      <Grid container mt={10}>
        <Grid item xs={12} md={5.6}>
          <h1 className="font-bold text-3xl">Tutorials</h1>
          <p className="mt-2 text-[#626262] text-xs font-medium leading-5">
            Embark on a journey to unforgettable destinations, where
            breathtaking landscapes meet vibrant cultures. Your adventure of a
            lifetime starts right here!
          </p>
        </Grid>

        <Grid item xs={12} md={4.5}></Grid>
      </Grid>

      <Grid container mt={1} spacing={1}>
        {blogs.map((item, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <BlogPostCard blog={item} />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </div>
  );
}

export default CommissionAndIncentive;
