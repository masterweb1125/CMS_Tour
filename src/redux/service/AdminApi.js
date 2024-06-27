import { API_DOMAIN } from "@/src/redux/service/APIs";

export const hendleGetTotalRevenue = async()=>{
     try {
          const res = await API_DOMAIN.get("/api/v1/booking/totalRevenue");
          const totalRevenue = await res;
        //   console.log(totalRevenue);
          return await totalRevenue.data;
        } catch (error) {
          console.log("TotalRevenue", error);
        }
    
}
export const hendleGetTotalBooking= async()=>{
     try {
          const res = await API_DOMAIN.get("/api/v1/booking/totalBooking");
          const totalRevenue = await res;
        //   console.log(totalRevenue);
          return await totalRevenue.data;
        } catch (error) {
          console.log("TotalBooking", error);
        }
    
}
export const hendleGetTotalBookingShadular= async()=>{
     try {
          const res = await API_DOMAIN.get("/api/v1/booking/totalBookingShadular");
          const totalRevenue = await res;
        //   console.log(totalRevenue);
          return await totalRevenue.data;
        } catch (error) {
          console.log("TotalBookingShadular", error);
        }
    
}
export const hendleGetAllBookings = async ()=>{
  try {
    const res = await API_DOMAIN.get("/api/v1/booking");
    const AllBookings = await res;
  
    return await AllBookings.data
  } catch (error) {
    console.log("AllBooking Server Error", error);
  }
}
export const hendleGetAllTours = async ()=>{
  try {
    const res = await API_DOMAIN.get("/api/v1/tour");
    const AllTours = await res;
  
    return await AllTours.data.data
  } catch (error) {
    console.log("AllBooking Server Error", error);
  }
}

// helper funtions 

export const hendleGetTourLocation=(id,AllTours)=>{
  const tourLocation = AllTours.filter((item)=>item._id === id)[0].location;
  return tourLocation
}
