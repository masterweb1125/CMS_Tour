"use client";
import { setUserData } from "@/src/redux/features/User.Slice";
import { DeleteAdminCookie } from "@/src/utils/data/cookie";
import { adminSidebar } from "@/src/utils/data/sidebar";
import { AgentAvatarOne, LogoTransparent } from "@/src/utils/images/images";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Sidebar({ children }: any) {
  const user: any = useSelector((state: any) => state.User.UserInfo);
  const [mobileView, setMobileView] = useState(false);
  const theme = useTheme();
  const smallScreen: any = useMediaQuery(theme.breakpoints.up("sm"));
  const pathname = usePathname();
  const dispatch = useDispatch();
  const navigate = useRouter();
  useEffect(() => {
    if (smallScreen && mobileView) setMobileView(false);
  }, [smallScreen, mobileView]);
  function displayLimitedString(str, limit) {
    // const limit = 23;
    if (str?.length > limit) {
      return str.substring(0, limit - 3) + "...";
    }
    return str;
  }
  const LogOut = () => {
    DeleteAdminCookie();
    dispatch(setUserData({}));
    navigate.push("/");
  };

  return (
    <React.Fragment>
      {mobileView && (
        <div
          onClick={() => setMobileView(false)}
          className="absolute h-screen w-screen bg-[black] z-20"
          style={{ opacity: 0.4 }}
        ></div>
      )}

      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setMobileView((prev) => !prev)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed  top-0 left-0 z-40 w-[18rem] overflow-y-auto h-screen pb-14 border-r-2 transition-transform -translate-x-full sm:translate-x-0  ${
          mobileView ? "transform-none" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto style-4 bg-white dark:bg-gray-800">
          <Link href="/dashboard">
            <Image
              src={LogoTransparent}
              className="object w-14 mb-5"
              alt="Registration Image"
            />
          </Link>

          <ul className="space-y-2 font-medium">
            {adminSidebar(pathname).map(
              (
                {
                  title,
                  link,
                  Icon,
                }: { title: string; link: string; Icon: any },
                index
              ) => (
                <li key={index}>
                  <Link
                    href={link}
                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#FFA500] hover:text-white group ${
                      pathname === link ? "bg-[#FFA500] text-white" : ""
                    }`}
                  >
                    {Icon}
                    <span className="ms-3 text-xs">{title}</span>
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="xl:absolute bottom-0 w-60 bg-white">
            <Divider />
            <div className="px-3 py-3 w-full flex justify-between items-center">
              <Image
                width={30}
                height={30}
                src={user.profile_image}
                className="w-10"
                alt=""
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">
                  {displayLimitedString(user.name + " " + user.last_name, 25)}
                </span>
                <span className="text-xs ">
                  {displayLimitedString(user.email, 23)}
                </span>
              </div>
              <div className="pb-4">
                <svg
                onClick={LogOut}
                  className="cursor-pointer "
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                    stroke="#98A2B3"
                    className="hover:stroke-gray-600"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div
        className="p-4 md:pl-10 md:pr-6 md:py-4 sm:ml-72 h-screen"
        onClick={() => setMobileView(false)}
      >
        {children}
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
