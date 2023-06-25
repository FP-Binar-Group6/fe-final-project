import React, { useState } from "react";
import "./paymentCard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import gopay from "../../assets/Logo GoPay (PNG-240p) - FileVector69.png";
import { Checkbox } from "@mui/material";
import bca from "../../assets/BCA Mobile App Logo PNG Vector (EPS) Free Download.png";
import mandiri from "../../assets/lambang livin by mandiri.png";
import bri from "../../assets/Logo_baru_BRImo.png";
import mastercard from "../../assets/mastercard logo.png";
import visa from "../../assets/visa logo.png";
import amex from "../../assets/amex logo.png";
import paypal from "../../assets/paypal logo.png";

const PaymentCard = () => {
  const [isGopay, setIsGopay] = useState(false);
  const [isVirtual, setIsVirtual] = useState(false);
  const [isCredit, setIsCredit] = useState(false);

  return (
    <div className="payment">
      <h2>Isi Data Pembayaran</h2>
      <div className="list__pembayaran">
        {/* gopay */}
        <div className="gopay" onClick={() => setIsGopay(!isGopay)}>
          <p>Gopay</p>
          {isGopay ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          className="gopay__detail"
          style={{ display: isGopay ? "block" : "none" }}
        >
          <img src={gopay} alt="" />
          <p>Kamu akan diarahkan ke GoPay untuk menyelesaikan pembelian.</p>
        </div>

        {/* virtual account */}
        <div
          className="virtual__account"
          onClick={() => setIsVirtual(!isVirtual)}
        >
          <p>Virtual Account</p>
          {isVirtual ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          className="virtual__account__detail"
          style={{ display: isVirtual ? "block" : "none" }}
        >
          <div className="bca">
            <Checkbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<TripOriginIcon sx={{ color: "#4B1979" }} />}
            />
            <img src={bca} alt="" />
            <p>BCA Mobile Banking</p>
          </div>
          <div className="mandiri">
            <Checkbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<TripOriginIcon sx={{ color: "#4B1979" }} />}
            />
            <img src={mandiri} alt="" />
            <p>Livin' by Mandiri</p>
          </div>
          <div className="bri">
            <Checkbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<TripOriginIcon sx={{ color: "#4B1979" }} />}
            />
            <img src={bri} alt="" />
            <p>BRImo</p>
          </div>
        </div>

        {/* credit card */}
        <div className="credit__card" onClick={() => setIsCredit(!isCredit)}>
          <p>Credit Card</p>
          {isCredit ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          className="credit__card__detail"
          style={{ display: isCredit ? "block" : "none" }}
        >
          <div className="credit__card__logo">
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={amex} alt="" />
            <img src={paypal} alt="" />
          </div>
          <div className="credit__card__input">
            <p>Card Number</p>
            <input type="text" placeholder="4480 0000 0000 0000" />
            <p>Card Holder Name</p>
            <input type="text" placeholder="John Doe" />
            <div className="credit__card__date">
              <div className="credit__card__input">
                <p>CVV</p>
                <input type="text" placeholder="000" />
              </div>
              <div className="credit__card__input">
                <p>Expiry Date</p>
                <input type="text" placeholder="07/24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
