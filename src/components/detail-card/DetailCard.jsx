import React from "react";
import "./detailCard.css";
import airlineLogo from "../../assets/airline.png";

const DetailCard = () => {
  return (
    <div>
      <div className="detail__date">
        <div className="date">
          <p>07:00</p>
          <span>3 Maret 2023</span>
        </div>
        <div className="status">
          <p>keberangkatan</p>
        </div>
      </div>
      <p className="nama__terminal">Soekarno Hatta - Terminal 1A Domestik</p>
      <div className="line"></div>
      <div className="detail__pesawat">
        <img src={airlineLogo} alt="" />
        <div>
          <dl type="none" className="kategori__pesawat">
            <dt>Jet Air - Economy</dt>
            <dt>JT - 203</dt>
          </dl>
          <p className="pType">Informasi:</p>
          <dl type="none" className="informasi__pesawat">
            <dt>Baggage 20 kg</dt>
            <dt>Cabin baggage 7 kg</dt>
            <dt>In Flight Entertainment</dt>
          </dl>
        </div>
      </div>
      <div className="line"></div>
      <div className="detail__date">
        <div className="date">
          <p>11:00</p>
          <span>3 Maret 2023</span>
        </div>
        <div className="status">
          <p>kedatangan</p>
        </div>
      </div>
      <p className="nama__terminal">Melbourne International Airport</p>
      <div className="line"></div>
      <div className="detail__price">
        <p className="pType">Rincian Harga:</p>
        <div className="rincian__harga">
          <dl type="none" className="keterangan">
            <dt>1 Adult</dt>
            <dt>1 Baby</dt>
            <dt>Tax</dt>
          </dl>
          <dl type="none" className="harga">
            <dt>IDR 4.775.000</dt>
            <dt>IDR 0</dt>
            <dt>IDR 300.000</dt>
          </dl>
        </div>
      </div>
      <div className="line"></div>
      <div className="total__harga">
        <p className="pType">Total:</p>
        <span>IDR 5.075.000</span>
      </div>
    </div>
  );
};

export default DetailCard;
