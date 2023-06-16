import React from "react";
import "./booking.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import BiodataForm from "../../components/biodata-form/BiodataForm";
import DetailCard from "../../components/detail-card/DetailCard";
import PaymentCard from "../../components/payment-card/PaymentCard";
import pic from "../../assets/🦆 illustration _Cart shopping list_.png";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCheckout = location.pathname === "/booking/checkout";
  const isPayment = location.pathname === "/booking/payment";
  const isSuccess = location.pathname === "/booking/success";

  return (
    <div className="booking">
      <div className="booking__header">
        <h2>Isi Data Diri</h2>
        <NavigateNextIcon color="disabled" />
        <h2
          style={{
            color: isCheckout || isPayment || isSuccess ? "#000000" : "#8A8A8A",
          }}
        >
          Bayar
        </h2>
        <NavigateNextIcon color="disabled" />
        <h2 style={{ color: isSuccess ? "#000000" : "#8A8A8A" }}>Selesai</h2>
      </div>
      <div
        className="booking__notif"
        style={{
          background: "red",
          display: !isCheckout && !isPayment && !isSuccess ? "block" : "none",
        }}
      >
        <p>Selesaikan dalam 00:00:00</p>
      </div>
      <div
        className="booking__notif"
        style={{ background: "red", display: !!isPayment ? "block" : "none" }}
      >
        <p>Selesaikan Pembayaran sampai 10 Maret 2023 12:00</p>
      </div>
      <div
        className="booking__notif"
        style={{
          background: "#73CA5C",
          display: !!isCheckout ? "block" : "none",
        }}
      >
        <p>Data Anda berhasil tersimpan!</p>
      </div>
      <div
        className="booking__notif"
        style={{
          background: "#73CA5C",
          display: !!isSuccess ? "block" : "none",
        }}
      >
        <p>Terima kasih atas pembayaran transaksi</p>
      </div>

      <div className="booking__biodata">
        {/* slicing untuk pengisian data diri */}
        {!isPayment && !isSuccess && (
          <>
            <div>
              <BiodataForm isCheckout={isCheckout} />
            </div>
            <div className="booking__biodata__detail">
              <h3>Detail Penerbangan</h3>
              <DetailCard />
              <button
                style={{ display: isCheckout ? "block" : "none" }}
                onClick={() => navigate("/booking/payment")}
              >
                Lanjut Bayar
              </button>
            </div>
          </>
        )}

        {/* slicing untuk mendapat booking code */}
        {!!isPayment && (
          <>
            <div className="data__pembayaran">
              <PaymentCard />
              <button
                className="btn__save"
                onClick={() => navigate("/booking/success")}
              >
                Bayar
              </button>
            </div>
            <div className="booking__code">
              <div className="booking__code__judul">
                <h3>Booking Code:</h3> <span>6723y2GHK</span>
              </div>
              <DetailCard />
            </div>
          </>
        )}
      </div>

      {/* slicing saat semua proses booking sukses */}
      {!!isSuccess && (
        <div className="booking__biodata__done">
          <img src={pic} alt="" />
          <p style={{ color: "#7126B5" }}>Selamat!</p>
          <p>Transaksi Pembayaran Tiket Sukses!</p>
          <div className="done__button">
            <button>Terbitkan Tiket</button>
            <button onClick={() => navigate("/")}>Cari Penerbangan Lain</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
