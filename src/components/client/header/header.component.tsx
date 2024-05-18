"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AgentAvatarOne, LogoTransparent } from "@/src/utils/images/images";
import Client_MobileDrawer from "./header-drawer.component";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo, setUserData } from "@/src/redux/features/User.Slice";
import { useRouter } from "next/navigation";
import Client_HeaderNavigation from "./header-navigation.component";

type Props = {
  text?: string;
};

const Client_Header = (props: Props) => {
  const user: any = useSelector((root: any) => root?.User?.UserInfo);
  const dispatch = useDispatch();
  const navigate = useRouter();

  const LogOut = () => {
    dispatch(setUserData(""));
    
  };

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
          {user?.name ? (
            <div
              className={`btn ${
                props.text ? "text-black" : "text-white"
              } font-semibold bg-transparent hover:cursor-pointer px-4 py-2 rounded-md min-w-20 text-center`}
            >
              <Link href="/auth/login" onClick={LogOut}>
                Logout
              </Link>
            </div>
          ) : (
            <>
              <div
                className={`btn ${
                  props.text ? "text-black" : "text-white"
                } font-semibold bg-transparent hover:cursor-pointer px-4 py-2 rounded-md min-w-20 text-center`}
              >
                <Link href={"/auth/login"}>Login</Link>
              </div>
              <div
                className={`${
                  props.text ? "text-black" : "text-black"
                } text-base font-semibold leading-6 bg-white hover:cursor-pointer px-4 py-2 rounded-md min-w-22 text-center`}
              >
                <Link href={"/auth/register"}>Register</Link>
              </div>
            </>
          )}
        </div>
        <Client_MobileDrawer />
      </div>
    </header>
  );
};

export default Client_Header;
