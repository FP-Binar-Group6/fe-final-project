import React, { useEffect, useState } from "react";
import "./searchFlight.css";

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

import { format } from "date-fns";
import { Calendar } from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useDispatch, useSelector } from "react-redux";

import { getAllAirport, getPostAirport } from "../../redux/actions/home";
import { FlightLand } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SearchFlight = () => {
  const [showSwitch, setshowSwitch] = useState(false);
  const [openPassenger, setopenPassenger] = useState(false);
  const [openSeatClass, setopenSeatClass] = useState(false);
  const [openDestinationFrom, setopenDestinationFrom] = useState(false);
  const [openDestinationTo, setopenDestinationTo] = useState(false);
  const [openDateDeparture, setopenDateDeparture] = useState(false);
  const [openDateReturn, setopenDateReturn] = useState(false);
  const [calenderDeparture, setCalenderDeparture] = useState("");
  const [calenderReturn, setCalenderReturn] = useState("");
  const [filterNameTo, setFilterNameTo] = useState("");
  const [filterNameFrom, setFilterNameFrom] = useState("");
  const [destinationItem, setDestinationItem] = useState("")
  
  const airport = useSelector((state)=>state.home.airport);
  const [kotakeberangkatan, setKotakeberangkatan] = useState("Jakarta");
  const [destinationItemTo, setDestinationItemTo] = useState("Surabaya");
  const data = [{
    "airportId": 1,
    "name": "Soekarno-Hatta International Airport",
    "code": "CGK",
    "cityName": "Jakarta"
},
{
    "airportId": 2,
    "name": "Ngurah Rai International Airport",
    "code": "DPS",
    "cityName": "Denpasar"
},
{
    "airportId": 3,
    "name": "Juanda International Airport",
    "code": "SUB",
    "cityName": "Surabaya"
},
{
    "airportId": 4,
    "name": "Husein Sastranegara International Airport",
    "code": "BDO",
    "cityName": "Bandung"
},]

  console.log("airport", airport)
  console.log("data", data)
  
  useEffect(() => {

    
  dispatch(getAllAirport())
  }, []);

  const [seatClass, setSeatClass] = useState("");
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
  

  const submitPassenger = (e) => {
    e.preventDefault();
    setopenPassenger(false)
  }

  const handleCalenderDeparture = (date) =>{
    console.log(date);
    setCalenderDeparture(format(date, "MM/dd/yyyy"))
  }
  const handleCalenderReturn = (date) =>{
    console.log(date);
    setCalenderReturn(format(date, "MM/dd/yyyy"))
  }

  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();

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
               {kotakeberangkatan}
            </span>
            {openDestinationFrom && (
              <div className="destination_options">
                <div className="search_field_area">
                  <div className="search_field">
                    <SearchIcon style={{ color: "#D0D0D0" }} />
                    <input placeholder="Masukkan Kota atau Negara"  type="text" value={filterNameFrom} onChange={(e)=>setFilterNameFrom(e.target.value)}/>
                  </div>
                  <CloseIcon onClick={() => setopenDestinationFrom(false)} />
                </div>
                <div className="latest_search">
                  <p>Pencarian Terkini</p>
                  <span>Hapus</span>
                </div>

                {
                  airport.map((kota)=>{
                    
                    return(
                      <>
                      <div onClick ={()=>setKotakeberangkatan(kota.cityName)} className="latestSeachItem">
                      <label>{kota.cityName}</label>
                      <CloseIcon style={{ color: "#8A8A8A" }} />
                    </div>
                    <hr />
                      </>
                  )
                  })
                }
                {/* {posts?.length > 0 &&
                  posts.map((post) => (
                <div className="latestSeachItem" onClick={(e)=>setDestinationItem("Jakarta")}>
                  <label>{post?.cityName}</label>
                  <CloseIcon style={{ color: "#8A8A8A" }} />
                </div>
                  ))
                } */}
                {/* {getPostAirport.cityName.filter((airport)=>airport.cityName === filterNameFrom) &&
                  <div className="latestSeachItem" onClick={(e)=>setDestinationItem("Jakarta")}>
                  <label>Jakarta</label>
                  <CloseIcon style={{ color: "#8A8A8A" }} />
                </div>
                } */}
                <hr />
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
              {destinationItemTo}
            </span>
            {openDestinationTo && (
              <div className="destination_options">
                <div className="search_field_area">
                  <div className="search_field">
                    <SearchIcon style={{ color: "D0D0D0" }} />
                    <input placeholder="Masukkan Kota atau Negara" type="text" value={filterNameTo} onChange={(e)=>setFilterNameTo(e.target.value)}/>
                  </div>
                  <CloseIcon onClick={() => setopenDestinationTo(false)} />
                </div>
                <div className="latest_search">
                  <p>Pencarian Terkini</p>
                  <span>Hapus</span>
                </div>

                {
                  airport.map((kota)=>{
                    
                    return(
                      <>
                      <div onClick ={()=>setDestinationItemTo(kota.cityName)} className="latestSeachItem">
                      <label>{kota.cityName}</label>
                      <CloseIcon style={{ color: "#8A8A8A" }} />
                    </div>
                    <hr />
                      </>
                  )
                  })
                }
                <div className="latestSeachItem" onClick={(e)=>setDestinationItemTo("Jakarta")}>
                  <label>Jakarta</label>
                  <CloseIcon style={{ color: "#8A8A8A" }} />
                </div>
                <hr />
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
                onClick={() => setopenDateDeparture(!openDateDeparture)}
                value={calenderDeparture}
              >
                {calenderDeparture}
              </span>
              {openDateDeparture && (
                  <div
                    components={["DateRangeCalendar"]}
                    className="date_options"
                  >
                  <Calendar onChange={handleCalenderDeparture} date={new Date()} className="CalendarElement" color="#7126B5" />
                    {/* <DateRangeCalendar onChange={handleCalender} date = {new Date()}/> */}
                  </div>
              )}
            </div>
            {showSwitch ? (
              <div className="return">
                <label>Return</label>
                <span
                  className="return_input"
                  onClick={() => setopenDateReturn(!openDateReturn)}
                  value={calenderReturn}
                >
                  {calenderReturn}
                </span>
              {openDateReturn && (
                  <div
                    components={["DateRangeCalendar"]}
                    className="date_options"
                  >
                  <Calendar onChange={handleCalenderReturn} className="CalendarElement" date={new Date()} color="#7126B5" disabledDays={{ before: new Date() }}/>
                    {/* <DateRangeCalendar onChange={handleCalender} date = {new Date()}/> */}
                  </div>
              )}
              </div>
            ) : <div className="returnNotOpen">
              </div>}

          </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
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
                    <button onClick={submitPassenger}>Simpan</button>
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
                    <div className="seat_option_text" onClick={()=>setSeatClass("Economy")}>
                      <label>Economy</label>
                      <p>IDR 4.950.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text" onClick={()=>setSeatClass("Premium Economy")}>
                      <label>Premium Economy</label>
                      <p>IDR 7.550.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text" onClick={()=>setSeatClass("Business")}>
                      <label>Business</label>
                      <p>IDR 29.220.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="seat_optionItem">
                    <div className="seat_option_text" onClick={()=>setSeatClass("First Class")}>
                      <label>First Class</label>
                      <p>IDR 87.620.000</p>
                    </div>
                    <div className="option_counter">
                      <CheckCircleIcon style={{ color: "#73CA5C" }} />
                    </div>
                  </div>
                  <hr />
                  <div className="save_seatClass">
                    <button onClick={()=>setopenSeatClass(!openSeatClass)}>Simpan</button>
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