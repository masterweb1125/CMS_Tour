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

export const GetAllAgency = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/agency");
    return res.data;
  } catch (error) {
    console.log("Error in Get agency");
  }
};

export const GetAgencyAnalytics = async (agency) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/agency/analytics/${agency}`);
    return res.data;
  } catch (error) {
    console.log("Error in Agency analytics");
  }
};

export const GetTourById = async (tourId) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/tour/${tourId}`);
    return res.data.data;
  } catch (error) {
    console.log("Error i n get tour by id", error);
  }
};
export const GetUserById = async (userId) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/auth/${userId}`);
    return res.data.data;
  } catch (error) {
    console.log("Error i n get tour by id", error);
  }
};

export const GetTourByAgencyId = async (agencyId) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/tour/agency/${agencyId}`);
    return res.data;
  } catch (error) {
    console.log("Error in Get tour by agency id", error);
  }
};
export function convertToHours(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Check if the dates are valid
  if (isNaN(start) || isNaN(end)) {
    throw new Error("Invalid date format");
  }

  // Calculate the difference in milliseconds
  const differenceInMs = end - start;

  // Convert milliseconds to hours
  const differenceInHours = differenceInMs / (1000 * 60 * 60);

  return differenceInHours;
}
export function shortenString(input, length = 86) {
  // Check if the input is a string
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  // Check if the string is longer than the specified length
  if (input.length > length) {
    // Return the first 86 characters followed by an ellipsis
    return input.substring(0, length) + "...";
  } else {
    // Return the original string if it is 86 characters or shorter
    return input;
  }
}

export const GetTourAverageRating = async (tourId) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/reviews/tour/${tourId}`);
    return res.data;
  } catch (error) {
    console.log("Error in Tour Average Rating");
  }
};

export function getDateRangeInfo(startDate, endDate) {
  // Parse the input dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Check if the input dates are valid
  if (isNaN(start) || isNaN(end)) {
    throw new Error(
      "Invalid date format. Please provide valid start and end dates in the format 'YYYY-MM-DD'."
    );
  }

  // Calculate the difference in time
  const timeDifference = end - start;

  // Calculate the number of days (including both start and end dates)
  const dayCount = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  return dayCount;
}
export const GetTourReviewsByTourId = async (tourId) => {
  try {
    const res = await API_DOMAIN.get(`/api/v1/reviews/tour/reviews/${tourId}`);
    return res.data;
  } catch (error) {
    console.log("Error in get reviews by tour id", error);
  }
};

export const DateformateMonthNameDateYear = (dateString) => {
  const date = new Date(dateString);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
};
export const GetReferralUser = async () => {
  try {
    const res = await API_DOMAIN.get("/api/v1/referral/user");
    return res.data;
  } catch (error) {
    console.log("Error in get referral users ");
  }
};

export const UpdateReferralUser = async (userid,user)=>{
  try {
    const res = await API_DOMAIN.post(`/api/v1/referral/user/${userid}`,{...user})
    return res.data;
  } catch (error) {
    console.log("Error update referral user")
  }
}

export const Search = async(query)=>{
try {
  const res =await API_DOMAIN.get(`/api/v1/search?${query}`)
  return res.data;
} catch (error) {
  console.log("Error in Searching")
}
}

export const GetAllDiscounts = async ()=>{
try {
  const res =await API_DOMAIN.get('/api/v1/discount')
  return res.data;
} catch (error) {
  console.log("Error in get All discounts",error)
}
}

export const CreateDiscount = async (data)=>{
  try {
    const res = await API_DOMAIN.post('/api/v1/discount/create',{data});
    return res.data;
  } catch (error) {
    console.log("Error in discount creation",error)
  }
}
export const UpdateDiscount = async (id,data)=>{
  try {
    const res = await API_DOMAIN.put(`/api/v1/discount/update/${id}`,{data});
    return res.data;
  } catch (error) {
    console.log("Error in discount creation",error)
  }
}
export const DeleteDiscount = async (id)=>{
  try {
    const res = await API_DOMAIN.delete(`/api/v1/discount/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error in discount creation",error)
  }
}