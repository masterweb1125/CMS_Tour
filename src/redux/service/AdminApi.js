import { API_DOMAIN } from "@/src/redux/service/APIs";

export const hendleGetTotalRevenue = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/booking/totalRevenue");
    const totalRevenue = await res;
    //   console.log(totalRevenue);
    return await totalRevenue.data;
  } catch (error) {
    console.log("TotalRevenue", error);
  }
};
export const hendleGetTotalBooking = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/booking/totalBooking");
    const totalRevenue = await res;
    //   console.log(totalRevenue);
    return await totalRevenue.data;
  } catch (error) {
    console.log("TotalBooking", error);
  }
};
export const hendleGetTotalBookingShadular = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/booking/totalBookingShadular");
    const totalRevenue = await res;
    //   console.log(totalRevenue);
    return await totalRevenue.data;
  } catch (error) {
    console.log("TotalBookingShadular", error);
  }
};
export const hendleGetAllBookings = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/booking");
    const AllBookings = await res;

    return await AllBookings.data;
  } catch (error) {
    console.log("AllBooking Server Error", error);
  }
};
export const hendleGetAllTours = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/tour");
    const AllTours = await res;

    return await AllTours.data.data;
  } catch (error) {
    console.log("AllBooking Server Error", error);
  }
};

// helper funtions

export const hendleGetTourLocation = (id, AllTours) => {
  const tourLocation = AllTours.filter((item) => item._id === id)[0].location;
  return tourLocation;
};

export const getReview = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/reviews");
    return res.data;
  } catch (error) {
    console.log("Error in fetch all revies", error);
  }
};

export const getAllReviewsDetail = async (reviewId) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/reviews/details/${reviewId}`);
    return res.data;
  } catch (error) {
    console.log("Error in Fetch reviews", error);
  }
};

export const getAverageRating = async (year) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/reviews/analytics`);
    return res.data;
  } catch (error) {
    console.log("Error in get average rating ", error);
  }
};
export const handleCreateReview = async (data) => {
  try {
    const res = await API_DOMAIN.post("/api/v1/reviews", data);

    return res.data;
  } catch (error) {
    console.log("Error in Create review", error);
  }
};

export const MakeReviewPublic = async (reviewid) => {
  try {
    const res = await API_DOMAIN.post(`/api/v1/reviews/public/${reviewid}`);
    return res.data;
  } catch (error) {
    console.log("Error in Make review Public", error);
  }
};

export const GetAllAgency = async ()=>{
  try {
    const res = await API_DOMAIN.get("/api/v1/agency");
    return res.data;
    
  } catch (error) {
    console.log("Error in Get agency")
  }
}