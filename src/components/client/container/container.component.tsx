import React from "react";

type Props = {};

const Client_Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl m-auto px-4">{children}</div>;
};

export default Client_Container;
