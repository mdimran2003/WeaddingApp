import "./App.css";
import Navebar from "./Header";
import React, { useState } from "react";

import StoryPage from "./OurStory";
import Location from "./Location";
import GallaryIcon from "./GallaryIcon";
import GuestBook from "./GuestBook";
import Pages from "./Pages";
import Contact from "./Contact";
import Footer from "./Footer";
import HomePage from "./HomePage";

function App() {
  const [page, setPage] = useState("Home");
  const pageOpen = (pageName) => {
    setPage(pageName);
  };

  const logoClicked = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <Navebar menuClick={pageOpen} logoClick={() => logoClicked("Home")} />
      {page === "Home" && <HomePage />}
      {page === "Our Story" && <StoryPage />}
      {page === "Location" && <Location />}
      {page === "Gallery" && <GallaryIcon />}
      {page === "Guest book" && <GuestBook />}
      {page === "Pages" && <Pages />}
      {page === "Contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;
