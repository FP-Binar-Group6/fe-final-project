import React, { useState } from "react";
import "./searchFlight.css"

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
// Link Sementara
import { Link } from "react-router-dom";
import { FlightLand } from "@mui/icons-material";

const SearchFlight = () => {
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

  const city = [
    {
      cityName : "Jakarta"
    },
    {
      cityName : "Bandung"
    },
    {
      cityName : "Bali"
    },
    {
      cityName : "Malang"
    },

  ]

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
    <>
      <div className="search_flight_container">
        <h6>
          Pilih Jadwal Penerbangan spesial di
          <span className="logo__name"> Tiketku!</span>
        </h6>
        <div className="destination">
          <div className="destination__from__to">
            <FlightTakeoffIcon className="icon" />
            <p>From</p>
            <span
              className="destination__from__to_input"
              onClick={() => setopenDestinationFrom(!openDestinationFrom)}
            >
              {'Jakarta'}
            </span>
            {openDestinationFrom && (
              <div className="destination_options">
                <div className="search_field_area">
                  <div className="search_field">
                    <SearchIcon style={{ color: "#D0D0D0" }} />
                    <input placeholder="Masukkan Kota atau Negara" />
                  </div>
                  <CloseIcon onClick={() => setopenDestinationFrom(false)} />
                </div>
                <div className="latest_search">
                  <p>Pencarian Terkini</p>
                  <span>Hapus</span>
                </div>
                  { city.map((e, i) => (
                    <div className="latestSeachItem"> 
                      <label key={i}>{e.cityName}</label>
                      <CloseIcon style={{ color: "#8A8A8A" }} />
                    </div>
                  ))
                  }
              </div>
            )}
          </div>

          <div className="swap__destination">
            <SwapHorizIcon />
          </div>

          <div className="destination__from__to">
            <FlightLand className="icon" />
            <p>To</p>
            <span
              className="destination__from__to_input"
              onClick={() => setopenDestinationTo(!openDestinationTo)}
            >
              {`JKT`}
            </span>
            {openDestinationTo && (
              <div className="destination_options">
                <div className="search_field_area">
                  <div className="search_field">
                    <SearchIcon style={{ color: "D0D0D0" }} />
                    <input placeholder="Masukkan Kota atau Negara" />
                  </div>
                  <CloseIcon onClick={() => setopenDestinationTo(false)} />
                </div>
                <div className="latest_search">
                  <p>Pencarian Terkini</p>
                  <span>Hapus</span>
                </div>
                  { city.map((e, i) => (
                    <div className="latestSeachItem">
                      <label key={i}>{e.cityName}</label>
                      <CloseIcon style={{ color: "#8A8A8A" }} />
                    </div>
                  ))
                  }
              </div>
            )}
          </div>
        </div>

        <div className="date_and_passenger">
          <div className="date_container">
            <DateRangeIcon className="icon" />
            <p>Date</p>
            <div className="departure">
              <label>Departure</label>
              <span
                className="departure_input"
                onClick={() => setopenDate(!openDate)}
              >
                {``}
              </span>
              {openDate && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div
                    components={["DateRangeCalendar"]}
                    className="date_options"
                  >
                    <DateRangeCalendar />
                  </div>
                </LocalizationProvider>
              )}
            </div>
            {showSwitch ? (
              <div className="return">
                <label>Return</label>
                <span
                  className="return_input"
                  onClick={() => setopenDate(!openDate)}
                >
                  {``}
                </span>
              </div>
            ) : <div className="returnNotOpen">
              </div>}

          </div>

            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => setshowSwitch(!showSwitch)}
              />
            </div>
          

          <div className="passenger_container">
            <AirlineSeatReclineNormalIcon className="icon" />
            <p>To</p>
            <div className="passenger">
              <label>Passengers</label>
              <span
                className="passenger_input"
                onClick={() => setopenPassenger(!openPassenger)}
              >
                {`${
                  passenger.adult + passenger.children
                } Penumpang`}
              </span>

              {openPassenger && (
                <div className="passenger_options">
                  <CloseIcon onClick={() => setopenPassenger(false)} />
                  <hr />
                  <div className="optionItem">
                    <div className="optionText">
                      <ManIcon />
                      <div className="optionLabel">
                        <label>Dewasa</label>
                        <p>(Di bawah 2 tahun)</p>
                      </div>
                    </div>
                    <div className="option_counter">
                      <button
                        className="option_counter_button_minus"
                        onClick={() => handleOption("adult", "decrease")}
                        disabled={passenger.adult <= 1}
                      >
                        -
                      </button>
                      <span className="option_counter_number">
                        {passenger.adult}
                      </span>
                      <button
                        className="option_counter_button_plus"
                        onClick={() => handleOption("adult", "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr />

                  <div className="optionItem">
                    <div className="optionText">
                      <GirlIcon />
                      <div className="optionLabel">
                        <label>Anak</label>
                        <p>(2 - 11 tahun)</p>
                      </div>
                    </div>
                    <div className="option_counter">
                      <button
                        className="option_counter_button_minus"
                        onClick={() => handleOption("children", "decrease")}
                        disabled={passenger.children <= 0}
                      >
                        -
                      </button>
                      <span className="option_counter_number">
                        {passenger.children}
                      </span>
                      <button
                        className="option_counter_button_plus"
                        onClick={() => handleOption("children", "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr />

                  <div className="optionItem">
                    <div className="optionText">
                      <AccessibilityNewIcon />
                      <div className="optionLabel">
                        <label>Bayi</label>
                        <p>(Di bawah 2 tahun)</p>
                      </div>
                    </div>
                    <div className="option_counter">
                      <button
                        className="option_counter_button_minus"
                        onClick={() => handleOption("baby", "decrease")}
                        disabled={passenger.baby <= 0}
                      >
                        -
                      </button>
                      <span className="option_counter_number">
                        {passenger.baby}
                      </span>
                      <button
                        className="option_counter_button_plus"
                        onClick={() => handleOption("baby", "increase")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="save_passenger">
                    <button>Simpan</button>
                  </div>
                </div>
              )}
            </div>

            <div className="seat_class">
              <label>Seat Class</label>
              <span
                className="seat_class_input"
                onClick={() => setopenSeatClass(!openSeatClass)}
              >
                {`${seatClass}`}
              </span>

              {openSeatClass && (
                <div className="seatClass_options">
                  <CloseIcon onClick={() => setopenSeatClass(false)} />
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text">
                      <label>Economy</label>
                      <p>IDR 4.950.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text">
                      <label>Premium Economy</label>
                      <p>IDR 7.550.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text">
                      <label>Business</label>
                      <p>IDR 29.220.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text">
                      <label>First Class</label>
                      <p>IDR 87.620.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="save_seatClass">
                    <button>Simpan</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="search_button">
          {/* Link sementara */}
          <Link to="/search">
            <button>Cari Penerbangan</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchFlight;
