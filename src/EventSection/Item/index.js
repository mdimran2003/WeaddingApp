import React from "react";
import "./index.css";

const Item = (props) => {
  return (
    <div className="eventContent-box">
      <h4>{props.heading}</h4>
      <p className="dateP">{props.date}</p>
      <img src={props.imageUrl} alt="checking"></img>
      <span>{props.time}</span>
      <p>{props.details}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Item;
