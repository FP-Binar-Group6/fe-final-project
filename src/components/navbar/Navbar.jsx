import "./navbar.css";

import React from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navbar = () => {
  const isLoggedIn = true;

  const pointer = { cursor: "pointer" };
  return (
    <div className="navbar">
      {isLoggedIn ? (
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src={logo} alt="" />
            <div className="navbar__search">
              <input type="text" placeholder="Cari di sini ..." />
              <SearchIcon color="disabled" sx={{ fontSize: 24 }} />
            </div>
          </div>
          <div className="navbar__menu">
            <FormatListBulletedIcon sx={{ fontSize: 24 }} style={pointer} />
            <NotificationsNoneIcon sx={{ fontSize: 24 }} style={pointer} />
            <PersonOutlineOutlinedIcon sx={{ fontSize: 24 }} style={pointer} />
          </div>
        </div>
      ) : (
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src={logo} alt="" />
            <div className="navbar__search">
              <input type="text" placeholder="Cari di sini ..." />
              <SearchIcon color="disabled" sx={{ fontSize: 24 }} />
            </div>
          </div>
          <button>
            <LoginIcon sx={{ color: "white" }} /> Masuk
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
