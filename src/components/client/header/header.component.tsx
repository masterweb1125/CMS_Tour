import Link from "next/link";
import { AgentAvatarOne, LogoTransparent } from "@/src/utils/images/images";
import Image from "next/image";
import Client_MobileDrawer from "./header-drawer.component";
import Client_HeaderNavigation from "./header-navigation.component";
import "./header.styles.css";

type Props = {
  text?: string;
};

const Client_Header = (props: Props) => {
  return (
    <header className="absolute w-full bg-transparent overflow-hidden">
      <div className="max-w-7xl m-auto px-4 flex flex-row flex-wrap justify-between items-center py-3">
        <div className="overflow-hidden relative">
          <Image
            src={LogoTransparent.src}
            alt="Tropical"
            width={60}
            height={64}
          />
        </div>

        <Client_HeaderNavigation text={props.text} />

        <div className="account-actions flex flex-row gap-2">
          <div
            className={`btn ${
              props.text ? "text-black" : "text-white"
            }  bg-transparent font-semibold hover:cursor-pointer px-4 py-2 rounded-md min-w-20 text-center`}
          >
            <Link href={"/auth/login"}>Login</Link>
          </div>
          <div className="text-black btn text-base font-semibold leading-6 bg-white hover:cursor-pointer px-4 py-2 rounded-md min-w-22 text-center">
            <Link href={"/auth/register"}>Register</Link>
          </div>

          {/* <Image src={AgentAvatarOne} alt="" className="w-12" /> */}
        </div>
        <Client_MobileDrawer />
      </div>
    </header>
  );
};

export default Client_Header;
