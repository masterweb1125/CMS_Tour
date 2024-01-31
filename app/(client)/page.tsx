import React from "react";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import {
  Cover,
  LightningIcon,
  MaleAgent,
  FemaleAgent,
  ExtranetMan,
} from "@/src/utils/images/images";
import Client_BrowseForm from "@/src/components/client/browser-form/browse-form.component";
import Client_ToursDirectory from "@/src/components/client/tours-main/tours-directory.component";
import Client_AgentExploreAction from "@/src/components/client/explore-action/explore-action.component";
import { tours } from "@/src/utils/data/tours";
import Client_MakeUsUnique from "@/src/components/client/make-us-unique/make-us-unique";

const ClientPage = () => {
  return (
    <>
      <Client_Hero
        bgImage={Cover.src}
        title={"Explore the Unforgettable Adventures"}
        subTitleWidth="w-4/6"
        child={<Client_BrowseForm />}
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
    </>
  );
};

export default ClientPage;
