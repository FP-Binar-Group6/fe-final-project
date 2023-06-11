import React, { useState } from 'react'
import "./destinationCards.css"
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import imageDestination1 from "../../pages/homepage/asset/destination_card_option.png";

const types = ['Semua', 'Asia', 'Amerika', 'Australia', 'Eropa', 'Afrika'];

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
          <div className="destination_card_option">
            <img src={imageDestination1} alt='' />
            <span className="offer">Limited</span>
            <div id="detail_card">
              <p id="flight">
                Jakarta <ArrowRightAltIcon /> Bangkok{" "}
              </p>
              <p id="plane">AirAsia</p>
              <p id="schedule">20-30 Maret 2023</p>
              <p id="price">
                Mulai dari <span>IDR 950.000</span>{" "}
              </p>
            </div>
          </div>
          <div className="destination_card_option">
            <img src={imageDestination1} alt='' />
            <span className="offer">Limited</span>
            <div id="detail_card">
              <p id="flight">
                Jakarta <ArrowRightAltIcon /> Bangkok{" "}
              </p>
              <p id="plane">AirAsia</p>
              <p id="schedule">20-30 Maret 2023</p>
              <p id="price">
                Mulai dari <span>IDR 950.000</span>{" "}
              </p>
            </div>
          </div>
          <div className="destination_card_option">
            <img src={imageDestination1} alt='' />
            <span className="offer">Limited</span>
            <div id="detail_card">
              <p id="flight">
                Jakarta <ArrowRightAltIcon /> Bangkok{" "}
              </p>
              <p id="plane">AirAsia</p>
              <p id="schedule">20-30 Maret 2023</p>
              <p id="price">
                Mulai dari <span>IDR 950.000</span>{" "}
              </p>
            </div>
          </div>
          <div className="destination_card_option">
            <img src={imageDestination1}  alt=''/>
            <span className="offer">Limited</span>
            <div id="detail_card">
              <p id="flight">
                Jakarta <ArrowRightAltIcon /> Bangkok{" "}
              </p>
              <p id="plane">AirAsia</p>
              <p id="schedule">20-30 Maret 2023</p>
              <p id="price">
                Mulai dari <span>IDR 950.000</span>{" "}
              </p>
            </div>
          </div>
          <div className="destination_card_option">
            <img src={imageDestination1} alt='' />
            <span className="offer">Limited</span>
            <div id="detail_card">
              <p id="flight">
                Jakarta <ArrowRightAltIcon /> Bangkok{" "}
              </p>
              <p id="plane">AirAsia</p>
              <p id="schedule">20-30 Maret 2023</p>
              <p id="price">
                Mulai dari <span>IDR 950.000</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DestinationCards