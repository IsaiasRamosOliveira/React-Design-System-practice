import React from "react";
import "./Content.scss"

type ContentType = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentType) => {
  return <main className="content">{children}</main>;
};

export default Content;
