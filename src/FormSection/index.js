import React from "react";
import "./index.css";
const FormSection = (props) => {
  return (
    <div className="form-section">
      <div className="form-area">
        <div className="corner-img">
          <img src="/corner1.webp" alt="testing"></img>
        </div>
        <div className="corner-img2">
          <img src="/corner2.webp" alt="testing"></img>
        </div>
        <div className="corner-img3">
          <img src="/corner3.webp" alt="testing"></img>
        </div>
        <div className="corner-img4">
          <img src="/corner4.webp" alt="testing"></img>
        </div>
        <div className="topImage">
          <img src="storyTopImg.webp" alt="testing"></img>
          <div className="Hedding">
            <h1>
              ARE YOU <br></br> ATTENDING?
            </h1>
          </div>
        </div>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <div className="details">
          <details>
            <summary>1 Guest</summary>
          </details>
        </div>

        <textarea placeholder="Your Message"></textarea>
        <div className="Btn-area">
          <button>R.S.V.P</button>
        </div>
      </div>
    </div>
  );
};
export default FormSection;
