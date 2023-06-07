import "./navbar.css";

import React from "react";
import logo from "../../assets/logo.png";
import LoginIcon from "@mui/icons-material/Login";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = true;

  const pointer = { cursor: "pointer" };
  return (
    <div className="navbar">
      {isLoggedIn ? (
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="" />
          </Link>
          <div className="navbar__menu">
            <FormatListBulletedIcon sx={{ fontSize: 24 }} style={pointer} />
            <NotificationsNoneIcon sx={{ fontSize: 24 }} style={pointer} />
            <PersonOutlineOutlinedIcon sx={{ fontSize: 24 }} style={pointer} />
          </div>
        </div>
      ) : (
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="" />
          </Link>
          <button>
            <LoginIcon sx={{ color: "white" }} /> Masuk
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
