"use client"
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import Client_RecomendedTours from "@/src/components/client/tour-detail-page/recomended-tours/recomended-tour.component";
import Client_TourDetailDescription from "@/src/components/client/tour-detail-page/tour-details/tour-detail.component";
import Client_TourDetailHeader from "@/src/components/client/tour-detail-page/tour-header/tour-header.component";
import { ExploreWorldCover } from "@/src/utils/images/images";
import { tours } from "@/src/utils/data/tours";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "@/src/redux/service/APIs";

const Client_TourDetail = ({ params }: any) => {
  const tourId = params.id;
  const [Tour, setTour] = useState();

  // below is the function used for to fetch tour data
  const FetchingTourData = async () => {
    try {
      const res = await API_DOMAIN.get(`/api/v1/tour/${tourId}`);
      setTour(res?.data?.data);
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  
  }


useEffect(() => {
  FetchingTourData();
}, [params])



  return (
    <>
      <Client_Hero
        bgImage={ExploreWorldCover.src}
        title={"Explore The World"}
        subTitleWidth="w-3/6"
        smallText={true}
        child={""}
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet"
        }
      />

      <Client_TourDetailHeader tour={Tour ? Tour : null} />
      <Client_TourDetailDescription tour={Tour ? Tour : null} />
      <Client_RecomendedTours />
    </>
  );
};

export default Client_TourDetail;
