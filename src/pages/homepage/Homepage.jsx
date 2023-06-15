import React, { useState } from "react";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";

import banner from "./asset/imgBanner.png";

import DestinationCards from "../../components/destinationCards/DestinationCards";

import SearchFlight from "../../components/searchFlight/SearchFlight";

const Homepage = () => {
  const [showSwitch, setshowSwitch] = useState(false);
  const [openPassenger, setopenPassenger] = useState(false);
  const [openSeatClass, setopenSeatClass] = useState(false);
  const [openDestinationFrom, setopenDestinationFrom] = useState(false);
  const [openDestinationTo, setopenDestinationTo] = useState(false);
  const [openDate, setopenDate] = useState(false);

  const [seatClass, setseatClass] = useState("");
  const [passenger, setPassenger] = useState({
    adult: 1,
    children: 0,
    baby: 0,
  });

  const handleOption = (name, operation) => {
    setPassenger((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? passenger[name] + 1 : passenger[name] - 1,
      };
    });
  };

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
