import React from "react";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import { ExploreWorldCover } from "@/src/utils/images/images";
import Client_RecomendedTours from "@/src/components/client/tour-detail-page/recomended-tours/recomended-tour.component";
import Client_TourDetailHeader from "@/src/components/client/tour-detail-page/tour-header/tour-header.component";
import Client_TourDetailDescription from "@/src/components/client/tour-detail-page/tour-details/tour-detail.component";
const Client_TourDetail = () => {
  return (
    <>
      <Client_Hero
        bgImage={ExploreWorldCover.src}
        title={"Radiance of Our Sunset Escapes"}
        subTitleWidth="w-4/6"
        child={""}
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        }
      />
      <Client_TourDetailHeader />
     <Client_TourDetailDescription />
      <Client_RecomendedTours />
    </>
  );
};

export default Client_TourDetail;
