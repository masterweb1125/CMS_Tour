import Client_Hero from "@/src/components/client/hero-section/hero.component";
import { HelpAndSupport } from "@/src/utils/images/images";

export default function Hero() {
  return (
    <Client_Hero
      bgImage={HelpAndSupport.src}
      title={"Explore The World"}
      subTitleWidth="w-4/6"
      minHeight="min-h-[382px]"
      subTitle={
        "Embark on a journey to unforgettable destinations, where breathtaking landscapes meet "
      }
    />
  );
}
