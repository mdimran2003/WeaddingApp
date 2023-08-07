import React from "react";
import Banner from "../Banner";
import EventSection from "../EventSection";

import FormSection from "../FormSection";
import Gallary from "../Gallary";
import GiftSection from "../GiftArea";

import MapSection from "../MapSection";
import Partner from "../PartnerSection";
import StorySection from "../Story";
const HomePage = () => {
  return (
    <>
      <Banner />
      <StorySection />
      <EventSection />
      <Gallary />
      <GiftSection />
      <FormSection />
      <MapSection />
      <Partner />
    </>
  );
};
export default HomePage;
