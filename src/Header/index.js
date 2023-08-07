import React from "react";
import "./index.css";
import Item from "./Item";
const Navebar = (props) => {
  const pageChange = (pageName) => {
    props.menuClick(pageName);
  };

  return (
    <div className="naveBAR">
      <div className="container">
        <div className="navigationSection">
          <div className="logoArea" onClick={props.logoClick}>
            <img src="/logo1.webp" alt="error"></img>
          </div>
          <div className="navList">
            <ul>
              <Item label="Our Story" onChangePage={pageChange} />
              <Item label="Location" onChangePage={pageChange} />
              <Item label="Gallery" onChangePage={pageChange} />
              <Item label="Guest book" onChangePage={pageChange} />
              <Item label="Pages" onChangePage={pageChange} />
              <Item label="Contact" onChangePage={pageChange} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navebar;
