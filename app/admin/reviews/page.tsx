"use client";
import Review from "@/src/components/admin/reviews/Review";
import { RiStarSFill } from "react-icons/ri";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { getAverageRating, getReview, hendleGetTotalRevenue } from "@/src/redux/service/AdminApi";
import { FaStar } from "react-icons/fa";
import { Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { setLocale } from "yup";

interface StarRatingProps {
  rating: number; // The rating value from 0 to 5
}

const RatingProgressBars = ({ barsChart }) => {
  const totalRatings = Object.values(barsChart).reduce((acc, val) => acc + val, 0);
  const maxBarWidth = 280;

  const calculateWidth = (rating) => {
    if (totalRatings === 0) return 0;
    return (rating / totalRatings) * maxBarWidth;
  };

  return (
    <div className="flex flex-col text-[#FFA500] gap-2">
      {Object.entries(barsChart).map(([key, value], index) => (
        <div key={index} className="flex gap-2 items-center text-xl">
          <RiStarSFill />
          <h5 className="text-black font-semibold text-sm">{key.replace("rating", "")}</h5>
          <div
            className="h-[7px] rounded-[5px]"
            style={{ width: calculateWidth(value), backgroundColor: getColor(key) }}
          ></div>
          <h5 className="text-xs text-black font-semibold">{value}</h5>
        </div>
      ))}
    </div>
  );
};

const getColor = (key) => {
  switch (key) {
    case "rating5":
      return "#2FB59E";
    case "rating4":
      return "#E07DFF";
    case "rating3":
      return "#F5BE36";
    case "rating2":
      return "#A2E2F9";
    case "rating1":
      return "#F67519";
    default:
      return "#000";
  }
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className='flex items-center gap-[2px] text-[20px] pl-2'>
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} color={index < clampedRating ? '#FFA500' : '#E9E9E9'} />
      ))}
    </div>
  );
};

function Chats() {
  const [isLoading, setisLoading] = useState(true)
  const [revenueData, setRevenueData] = useState({});
  const [averageRatingYear, setAverageRatingYear] = useState<number>(new Date().getFullYear());
  const [averageRating, setAverageRating] = useState<string>("0.0");
  const [reviews, setReviews] = useState([]);
  const [analytics, setAnalytics] = useState({});

  const fetchData = async () => {
    setisLoading(true)
    try {
      const res = await hendleGetTotalRevenue();
      setRevenueData(res);
      const reviewsData = await getReview();
      const averageRatingData = await getAverageRating(averageRatingYear);
      setAverageRating(averageRatingData.averageRating);
      setAnalytics(averageRatingData); // Set analytics data correctly
      setReviews(reviewsData);
      setisLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Reviews</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={3} className="flex items-center">
          <SearchInput />
        </Grid>
      </Grid>

      <Grid container className="gap-3 md:gap-0 ">
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Total Revenue"
            count={revenueData?.totalRevenue}
            percentage={`${revenueData?.percentageChange}%`}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Average Rating"
            Component={() => (
              <div className="flex flex-col">
                <div className="flex pt-4 gap-1">
                  <div className="text-black text-2xl font-bold ">{averageRating}</div>
                  <StarRating rating={parseFloat(averageRating)} />
                </div>
                <div className="text-[#475467] font-medium text-base my-4">
                  Average Rating of the year {averageRatingYear}
                </div>
              </div>
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            Component={() => (
              <RatingProgressBars barsChart={analytics.barsChart || {}} />
            )}
          />
        </Grid>
      </Grid>

      <Grid container className="mt-5 border rounded-lg">
        {isLoading?'Loading...':reviews.filter(filter => !filter.review.public).length === 0 ?<h4 className="py-2 px-2">No Unpublic Review Found</h4>:reviews.filter(filter => !filter.review.public).map((item) => (
          <Review key={item.review._id} {...item} fetchData={fetchData} />
        ))}
      </Grid>
    </div>
  );
}

export default Chats;
