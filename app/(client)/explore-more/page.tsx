
import React from "react";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import {
  SunsetCover,
  CustomerServiceFemale,
  TestimonialAvatar,
  CustomTourCover,
} from "@/src/utils/images/images";
import Client_BrowseForm from "@/src/components/client/browser-form/browse-form.component";
import Client_CustomerSupport from "@/src/components/client/customer-support/customer-support.component";
import Client_MoreTours from "@/src/components/client/explore-more-tour/more-tour-section/more-tour.component";
import { tours } from "@/src/utils/data/tours";
import Client_CustomBrowseForm from "@/src/components/client/explore-more-tour/custom-tour-form/custom-tour-form.component";
import Client_CustomTourHero from "@/src/components/client/custom-tour-hero/custom-tour-hero.component";


const Client_ExploreMoreTour = () => {
 
  return (
    <>
      <Client_Hero
        bgImage={SunsetCover.src}
        title={"Radiance of Our Sunset Escapes"}
        subTitleWidth="w-4/6"
        child={<Client_BrowseForm />}
        minHeight="min-h-screen"
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        }
      />

      <Client_MoreTours
        directoryTitle="Check Out Our Tour Packages"
        subPara="Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        tours={tours}
      />

      <Client_CustomTourHero
        bgImage={CustomTourCover.src}
        child={<Client_CustomBrowseForm />}
      />

      <div className="flex justify-center">
        <Client_CustomerSupport
          customerTitle="What Our Customers Say About Us"
          customerDesc="Overall, I can't recommend your tours enough. Thank you for
      providing such a delightful and stress-free travel experience.
      I'm already looking forward to my next adventure with your
      company! stress-free travel experience."
          customerImage={CustomerServiceFemale.src}
          customerImageAvatar={TestimonialAvatar.src}
          customerBtnText="Contact Us"
        />
      </div>
    </>
  );
};

export default Client_ExploreMoreTour;
