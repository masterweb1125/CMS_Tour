"use client";
import React from "react";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import {
  Cover,
  LightningIcon,
  MaleAgent,
  FemaleAgent,
  ExtranetMan,
  CustomerServiceFemale,
  TestimonialAvatar,
} from "@/src/utils/images/images";
import Client_BrowseForm from "@/src/components/client/browser-form/browse-form.component";
import Client_ToursDirectory from "@/src/components/client/tours-main/tours-directory.component";
import Client_AgentExploreAction from "@/src/components/client/explore-action/explore-action.component";
import { tours } from "@/src/utils/data/tours";
import Client_MakeUsUnique from "@/src/components/client/make-us-unique/make-us-unique";
import Client_BlogTourDirectory from "@/src/components/client/blog-main/blog-directory.component";
import { blogs } from "@/src/utils/data/blogs";
import Client_CustomerSupport from "@/src/components/client/customer-support/customer-support.component";

const ClientPage = () => {
  return (
    <>
      <Client_Hero
        bgImage={Cover.src}
        title={"Explore the Unforgettable Adventures"}
        subTitleWidth="w-4/6"
        child={<Client_BrowseForm />}
        minHeight="min-h-screen"
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        }
      />

      <Client_ToursDirectory
        directoryTitle="Most popular tours"
        subPara="Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        tours={tours}
      />

      <Client_AgentExploreAction
        actionImage={FemaleAgent.src}
        actionTitle="Are you a Travel Agent? Who wants to Manage Tours?"
        actionDesc="Travel Agent Extranet, your one-stop shop for managing all your client bookings & maximizing your earning potential!"
        actionBtnText="Explore Extranet"
      />

      <Client_MakeUsUnique
        actionImage={MaleAgent.src}
        actionIcon={LightningIcon.src}
        actionTitle="What Make Us Unique"
        actionSubheading="Features"
        actionDesc="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. "
      />

      <Client_AgentExploreAction
        actionImage={ExtranetMan.src}
        actionTitle="Supplier Extranet Page Design"
        actionDesc="Travel Agent Extranet, your one-stop shop for managing all your client bookings & maximizing your earning potential!"
        actionBtnText="Explore Extranet"
      />

      <Client_BlogTourDirectory
        directoryTitle="Our Blogs"
        subPara="Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        blogs={blogs}
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

export default ClientPage;
