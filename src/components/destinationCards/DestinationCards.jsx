import React, { useEffect, useState } from "react";
import "./destinationCards.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinationFav } from "../../redux/actions/home";
import { useNavigate } from "react-router-dom";
import { getSearchSchedule } from "../../redux/actions/search";

const types = ["Semua", "Asia", "Amerika", "Australia", "Eropa", "Afrika"];

const DestinationCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [departureAirportId, setDepartureId] = useState();
  const [arrivalAirportId, setArrivalId] = useState();
  const [departureTime, setDepartureTime] = useState();
  const [className, setClassName] = useState("");

  const destinasiFavorite = useSelector((state) => state.home.destinationFav);

  useEffect(() => {
    dispatch(getAllDestinationFav());
  }, [dispatch]);

  const [active, setActive] = useState(types[0]);
  return (
    <div className="destination_favorite">
      <h6>Destinasi Favorit</h6>
      <div className="destination_category">
        {types.map((e, i) => (
          <div
            className="destination_category_option"
            key={i}
            active={active == e.toString()}
            onClick={() => setActive(e)}
          >
            <SearchIcon />
            {e}
          </div>
        ))}
      </div>

      <div className="destination_cards">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {destinasiFavorite.map((e, i) => {
            const priceConvert = new Intl.NumberFormat("id-ID", {
              style: "decimal",
              currency: "IDR",
            }).format(e?.kelas?.price);

            return (
              <SwiperSlide
                className="destinationWrapper"
                key={i}
                onClick={() => {
                  setDepartureId(e?.departureAirport?.airportId);
                  setArrivalId(e?.arrivalAirport?.airportId);
                  setDepartureTime();
                  setClassName("");
                }}
              >
                <img
                  className="destinationImg"
                  src={e?.arrivalAirport?.cityImage}
                  alt=""
                />
                <p className="destinationPlace">
                  {e?.departureAirport?.cityName} <ArrowRightAltIcon />{" "}
                  {e?.arrivalAirport?.cityName}
                </p>
                <p className="destinationPlane">{e?.airline?.name}</p>
                <p className="destinationDate">{e?.destinationDate}</p>
                <p className="destinationPrice">
                  Mulai dari <span>IDR {priceConvert}</span>
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationCards;
