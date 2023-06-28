import React, { useState } from "react";
import "./destinationCards.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import destinasiFav from "../../assets/images/destinasiFav.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import imageDestination1 from "../../assets/homepage-image/destination_card_option.png";
import { Autoplay } from "swiper";

const types = ['Semua', 'Asia', 'Amerika', 'Australia', 'Eropa', 'Afrika'];
const destinationItem = [
  {
    offer : "limited",
    destinationFrom : "Jakarta",
    destinationTo : "bangkok",
    destinationPlane : "airasia",
    destinationDate : "20-30 Maret 2023",
    destinationPrice : "950.000"
  },
  {
    offer : "limited",
    destinationFrom : "Jakarta",
    destinationTo : "bangkok",
    destinationPlane : "airasia",
    destinationDate : "20-30 Maret 2023",
    destinationPrice : "950.000"
  },
  {
    offer : "limited",
    destinationFrom : "Jakarta",
    destinationTo : "bangkok",
    destinationPlane : "airasia",
    destinationDate : "20-30 Maret 2023",
    destinationPrice : "950.000"
  },
  {
    offer : "limited",
    destinationFrom : "Jakarta",
    destinationTo : "bangkok",
    destinationPlane : "airasia",
    destinationDate : "20-30 Maret 2023",
    destinationPrice : "950.000"
  },
  {
    offer : "limited",
    destinationFrom : "Jakarta",
    destinationTo : "bangkok",
    destinationPlane : "airasia",
    destinationDate : "20-30 Maret 2023",
    destinationPrice : "950.000"
  },
  {
    offer : "limited",
    destinationFrom : "Jakarta",
    destinationTo : "bangkok",
    destinationPlane : "airasia",
    destinationDate : "20-30 Maret 2023",
    destinationPrice : "950.000"
  },
]



const DestinationCards = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <div className="destination_favorite">
         <h6>Destinasi Favorit</h6>
         <div className="destination_category">
           {types.map(type => (
            <div className='destination_category_option' key={type} active={active === type} onClick={()=>setActive(type)}>
              <SearchIcon />{type}
            </div>
          ))}
        </div>

        <div className="destination_cards">
          <Swiper
            breakpoints={{
              320 :{
                slidesPerView : 2
              },
              600 :{
                slidesPerView : 3
              },
              1024 : {
                slidesPerView : 5
              }
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

          {destinationItem.map((e, i) => (
            <SwiperSlide className="destinationWrapper">
              <img className='destinationImg' src={destinasiFav} alt="" />
              <p className="destinationPlace">{e.destinationFrom} - &gt; {e.destinationTo}</p>
              <p className="destinationPlane">{e.destinationPlane}</p>
              <p className="destinationDate">{e.destinationDate}</p>
              <p className="destinationPrice">Mulai dari <span>IDR {e.destinationPrice}</span></p>
            </SwiperSlide>
          ))

          }

        </Swiper>
      </div> 
    </div>
  );
};

export default DestinationCards;