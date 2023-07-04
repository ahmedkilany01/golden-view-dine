import React from "react";
import Style from "./style.module.css";

const Container = ({ children }) => {
  return <div className={Style.main_container}>{children}</div>;
};

export default Container;
