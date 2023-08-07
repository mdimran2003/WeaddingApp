import React from "react";
import "./index.css";
import Item from "./Item";
const EventSection = (prompt) => {
  return (
    <div className="eventContaner">
      <div className="event-box">
        <Item
          heading="Rehearsal Dinner"
          date="July 20, 2020"
          imageUrl="/eventImg1.webp"
          time="12:00PM-2:00PM"
          details="The Sierra Resort 14"
          description="Pacific Grove Monterey, CA"
        />
        <Item
          heading="Rehearsal Dinner"
          date="July 20, 2020"
          imageUrl="/eventBgImg2.webp"
          time="12:00PM-2:00PM"
          details="The Sierra Resort 14"
          description="Pacific Grove Monterey, CA"
        />
        <Item
          heading="Rehearsal Dinner"
          date="July 20, 2020"
          imageUrl="/eventBgImg.3webp.webp"
          time="12:00PM-2:00PM"
          details="The Sierra Resort 14"
          description="Pacific Grove Monterey, CA"
        />
      </div>
    </div>
  );
};
export default EventSection;
