import React from "react";
import "./index.css";
const MapSection = (props) => {
  return (
    <div className="map-section">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.040022268874!2d77.28116391489186!3d28.568560882443027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38908e6166b%3A0xc5857003a0433cc3!2s208%2F18%2C%20Jogabai%20Extension%2C%20Zakir%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1667038860702!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"></iframe>
    </div>
  );
};
export default MapSection;
