import React from "react";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import {
  SunsetCover,
  CustomerServiceFemale,
  TestimonialAvatar,
} from "@/src/utils/images/images";
import Client_BrowseForm from "@/src/components/client/browser-form/browse-form.component";
import Client_CustomerSupport from "@/src/components/client/customer-support/customer-support.component";

const page = () => {
  return (
    <>
      <Client_Hero
        bgImage={SunsetCover.src}
        title={"Radiance of Our Sunset Escapes"}
        subTitleWidth="w-4/6"
        child={<Client_BrowseForm />}
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        }
      />
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
    </>
  );
};

export default page;
