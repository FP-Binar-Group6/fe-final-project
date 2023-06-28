import React, { useState } from "react";
import "./biodataForm.css";
import { Autocomplete, Switch, TextField } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const BiodataForm = ({ isCheckout }) => {
  const listTitle = ["Mr.", "Mrs.", "Ms.", "Miss"];

  const navigate = useNavigate();

  const [checkedPemesan, setCheckedPemesan] = useState(false);
  const [checkedPenumpang, setCheckedPenumpang] = useState(false);

  const [namaPemesan, setNamaPemesan] = useState("");
  const [lastNamePemesan, setLastNamePemesan] = useState("");
  const [teleponPemesan, setTeleponPemesan] = useState("");
  const [emailPemesan, setEmailPemesan] = useState("");

  const [namaPenumpang, setNamaPenumpang] = useState("");
  const [lastNamePenumpang, setLastNamePenumpang] = useState("");
  const [lahir, setLahir] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");
  const [paspor, setPaspor] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [berlaku, setBerlaku] = useState("");
  const [teleponPenumpang, setTeleponPenumpang] = useState("");
  const [emailPenumpang, setEmailPenumpang] = useState("");

  const onBooking = (e) => {
    e.preventDefault();
    navigate("/booking/checkout");
  };

  return (
    <>
      <div className="biodata__form">
        {/* slicing untuk biodata form pemesan */}
        <div className="booking__biodata__form__pemesan">
          <h2>Isi Data Pemesan</h2>
          <form className="booking__biodata__form__pemesan__input">
            <p className="judul">
              Data Diri Pemesan{" "}
              <CheckCircleIcon
                sx={{ color: isCheckout ? "#73CA5C" : "#8A8A8A" }}
              />
            </p>
            <div className="list">
              <div className="list__input">
                <p>Nama Lengkap</p>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  disabled={isCheckout ? true : false}
                  value={namaPemesan}
                  onChange={(e) => setNamaPemesan(e.target.value)}
                />
              </div>
              <div className="list__switch">
                <p>Punya Nama Keluarga?</p>
                <Switch
                  color="secondary"
                  checked={checkedPemesan}
                  onChange={(e) => setCheckedPemesan(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled={isCheckout ? true : false}
                />
              </div>
              <div
                className="list__input"
                style={{ display: checkedPemesan ? "block" : "none" }}
              >
                <p>Nama Keluarga</p>
                <input
                  type="text"
                  placeholder="Nama Keluarga"
                  disabled={isCheckout ? true : false}
                  value={lastNamePemesan}
                  onChange={(e) => setLastNamePemesan(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>Nomor Telepon</p>
                <input
                  type="text"
                  placeholder="Nomor Telepon"
                  disabled={isCheckout ? true : false}
                  value={teleponPemesan}
                  onChange={(e) => setTeleponPemesan(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Contoh: johndoe@gmail.com"
                  disabled={isCheckout ? true : false}
                  value={emailPemesan}
                  onChange={(e) => setEmailPemesan(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>

        {/* slicing untuk biodata form penumpang */}
        <div className="booking__biodata__form__penumpang">
          <h2>Isi Data Penumpang</h2>
          <form className="booking__biodata__form__penumpang__input">
            <p className="judul">
              Data Diri Penumpang 1 - Adult
              <CheckCircleIcon
                sx={{ color: isCheckout ? "#73CA5C" : "#8A8A8A" }}
              />
            </p>
            <div className="list">
              <div className="list__title">
                <p>Title</p>
                <Autocomplete
                  disablePortal
                  size="small"
                  id="combo-box-demo"
                  options={listTitle}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Title" />
                  )}
                  disabled={isCheckout ? true : false}
                />
              </div>
              <div className="list__input">
                <p>Nama Lengkap</p>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  disabled={isCheckout ? true : false}
                  value={namaPenumpang}
                  onChange={(e) => setNamaPenumpang(e.target.value)}
                />
              </div>
              <div className="list__switch">
                <p>Punya Nama Keluarga?</p>
                <Switch
                  color="secondary"
                  checked={checkedPenumpang}
                  onChange={(e) => setCheckedPenumpang(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled={isCheckout ? true : false}
                />
              </div>
              <div
                className="list__input"
                style={{ display: checkedPenumpang ? "block" : "none" }}
              >
                <p>Nama Keluarga</p>
                <input
                  type="text"
                  placeholder="Nama Keluarga"
                  disabled={isCheckout ? true : false}
                  value={lastNamePenumpang}
                  onChange={(e) => setLastNamePenumpang(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>Tanggal Lahir</p>
                <input
                  type="date"
                  disabled={isCheckout ? true : false}
                  value={lahir}
                  onChange={(e) => setLahir(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>Kewarganegaraan</p>
                <input
                  type="text"
                  placeholder="Kewarganegaraan"
                  disabled={isCheckout ? true : false}
                  value={kewarganegaraan}
                  onChange={(e) => setKewarganegaraan(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>KTP/Paspor</p>
                <input
                  type="text"
                  placeholder="KTP/Paspor"
                  disabled={isCheckout ? true : false}
                  value={paspor}
                  onChange={(e) => setPaspor(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>Negara Penerbit</p>
                <input
                  type="text"
                  placeholder="Negara Penerbit"
                  disabled={isCheckout ? true : false}
                  value={penerbit}
                  onChange={(e) => setPenerbit(e.target.value)}
                />
              </div>
              <div className="list__input">
                <p>Berlaku Sampai</p>
                <input
                  type="date"
                  disabled={isCheckout ? true : false}
                  value={berlaku}
                  onChange={(e) => setBerlaku(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        type="submit"
        className="btn__save"
        style={{ display: isCheckout ? "none" : "block" }}
        onClick={onBooking}
      >
        Simpan
      </button>
    </>
  );
};

export default BiodataForm;
