import React from "react";
import "./index.css";
const CommonBanner = (props) => {
  return (
    <div className="BannerSection">
      <div className="linierGrideant"></div>
      <h2>{props.heading}</h2>
    </div>
  );
};
export default CommonBanner;
