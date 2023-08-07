import React from "react";
import CommonBanner from "../CommonBanner";

import Gallary from "../Gallary";
import GiftSection from "../GiftArea";

import MapSection from "../MapSection";
import Partner from "../PartnerSection";
import StorySection from "../Story";
const StoryPage = () => {
  return (
    <>
      <CommonBanner heading="Our Story" />
      <StorySection />
      <GiftSection />
      <Gallary />
      <MapSection />
      <Partner />
    </>
  );
};
export default StoryPage;
