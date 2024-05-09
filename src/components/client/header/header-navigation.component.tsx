import React from "react";
import { mainMenu } from "@/src/utils/constants/menu";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

type Props = {
  text?: string;
};

const Client_HeaderNavigation = ({ text }: Props) => {
  return (
    <ul
      className={`hidden lg:flex flex-row flex-wrap gap-x-6 ${
        text || "text-white"
      }`}
    >
      {mainMenu.map((item, index) => {
        return (
          <li className="text-lg font-medium leading-7" key={index}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Client_HeaderNavigation;
