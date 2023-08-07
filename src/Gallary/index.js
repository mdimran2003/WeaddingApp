import React from "react";
import "./index.css";
const Gallary = (prompt) => {
  return (
    <div className="gallary-section">
      <div className="gallary-area">
        <div className="gallary-head-containt">
          <img src="/storyTopImg.webp" alt="error"></img>
          <h2>OUR MEMORIES</h2>
        </div>
        <div className="gallary-image">
          <div className="gallary-img">
            <img src="/gallaryImg1.webp" alt="error"></img>
          </div>
          <div className="gallary-img">
            <img src="/gallaryImg2.webp" alt="error"></img>
          </div>
          <div className="gallary-img">
            <img src="/gallaryImg3.webp" alt="error"></img>
          </div>
        </div>
        <div className="gallary-image">
          <div className="gallary-img">
            <img src="/gallaryImg1.webp" alt="error"></img>
          </div>
          <div className="gallary-img">
            <img src="/gallaryImg2.webp" alt="error"></img>
          </div>
          <div className="gallary-img">
            <img src="/gallaryImg3.webp" alt="error"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallary;
