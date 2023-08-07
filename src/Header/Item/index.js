import React from "react";
import "./index.css";
const Item = (props) => {
  return <li onClick={() => props.onChangePage(props.label)}>{props.label}</li>;
};
export default Item;
