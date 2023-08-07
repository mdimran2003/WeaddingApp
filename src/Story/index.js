import React from "react";
import "./index.css";

const StorySection = (props) => {
  return (
    <div className="stoyArea">
      <div className="storyContent-area">
        <div className="Imagebox">
          <img src="/storyImg.webp" alt="error"></img>
        </div>
        <div className="containtBox">
          <img src="/storyTopImg.webp" alt="error"></img>
          <h1>OUR STORY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudan.
          </p>
        </div>
      </div>
    </div>
  );
};
export default StorySection;
