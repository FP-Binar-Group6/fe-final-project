import React, { useState } from "react";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";

// import banner from "./asset/imgBanner.png";

import banner from "../../assets/homepage-image/imgBanner.png"

import DestinationCards from "../../components/destinationCards/DestinationCards";

import SearchFlight from "../../components/searchFlight/SearchFlight";

const Homepage = () => {

  return (
    <div className="homepage__container">
      <div className="banner">
        <img src={banner} alt="banner" />
        <div className="background__banner"></div>
        <SearchFlight />
      </div>

      <DestinationCards />
    </div>
  );
};

export default Homepage;
