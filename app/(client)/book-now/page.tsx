import CartPage from "@/src/components/client/cart-page/cart-page.component";
import Client_Hero from "@/src/components/client/hero-section/hero.component";
import { AddToCard } from "@/src/utils/images/images";
import React from "react";

const Client_TourDetail = () => {
  return (
    <React.Fragment>
      <Client_Hero
        bgImage={AddToCard.src}
        title={"Radiance of Our Sunset Escapes"}
        subTitleWidth="w-4/6"
        child={""}
        subTitle={
          "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet vibrant cultures. Your adventure of a lifetime starts right here!"
        }
      />
      <CartPage />
    </React.Fragment>
  );
};

export default Client_TourDetail;
