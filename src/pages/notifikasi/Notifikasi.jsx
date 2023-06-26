import React, { useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import WestIcon from "@mui/icons-material/West";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DatePickerRanger from "../../components/datepicker/DatePickerRange";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Ellipse from "../../assets/Ellipse.png";
import "./notifikasi.css";
import EllipseDanger from "../../assets/EllipseDanger.png";

function Notifikasi() {
  const [smShow, setSmShow] = useState(false);
  const [datepicker, setDatepicker] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <>
      {/* Header */}
      <Container
        fluid
        className="notifikasi my-5 pb-3 "
        style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
      >
        <Row className="d-flex justify-content-center">
          <Col className="me-5" xs={8}>
            <h5>Notifikasi</h5>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col xs={6} className="pb-2">
            <div
              className="d-flex align-items-center  p-2 ps-3"
              style={{
                background: "#A06ECE",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <WestIcon className="me-3" />
              Beranda
            </div>
          </Col>

          {/* visible in lg */}
          <Col xs={2} className="d-flex d-none  d-lg-block">
            <Button
              onClick={() => setDatepicker(true)}
              className="ms-3 me-3 mb-2 "
              variant="transparant"
              style={{
                borderRadius: "24px",
                border: "solid #A06ECE",
              }}
            >
              <FilterAltOutlinedIcon
                sx={{ fontSize: 25 }}
                style={{ color: "#8A8A8A" }}
              />
              Filter
            </Button>

            <SearchOutlinedIcon
              className=" ms-4 mb-2"
              onClick={() => setSmShow(true)}
              sx={{ fontSize: 40 }}
              style={{ color: "#A06ECE", cursor: "pointer" }}
            />
          </Col>

          {/* visible only in md */}
          <Col xs={3} className="d-flex d-none d-md-block d-lg-none">
            <Button
              onClick={() => setDatepicker(true)}
              className="mb-2 "
              variant="transparant"
              style={{
                borderRadius: "24px",
                border: "solid #A06ECE",
              }}
            >
              <FilterAltOutlinedIcon
                sx={{ fontSize: 25 }}
                style={{ color: "#8A8A8A" }}
              />
              Filter
            </Button>

            <SearchOutlinedIcon
              className=" ms-3 mb-2"
              onClick={() => setSmShow(true)}
              sx={{ fontSize: 40 }}
              style={{ color: "#A06ECE", cursor: "pointer" }}
            />
          </Col>

          {/* visible only in sm/xs */}
          <Col xs={4} className="d-flex d-block d-sm-none">
            <Button
              onClick={() => setDatepicker(true)}
              className="mb-2 d-flex"
              variant="transparant"
              style={{
                width: "6rem",
                borderRadius: "24px",
                border: "solid #A06ECE",
              }}
            >
              <FilterAltOutlinedIcon
                sx={{ fontSize: 25 }}
                style={{ color: "#8A8A8A" }}
              />
              Filter
            </Button>

            <SearchOutlinedIcon
              className=" ms-3 mb-2"
              onClick={() => setSmShow(true)}
              sx={{ fontSize: 40 }}
              style={{ color: "#A06ECE", cursor: "pointer" }}
            />
          </Col>

          {/* Modal Seacrh */}
          <Modal
            size="md"
            show={smShow}
            centered
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-xs"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-xs">
                <Form.Group
                  className="mb-1 d-flex align-items-center"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{
                      width: "17rem",
                      borderRadius: "8px 0 0 8px",
                    }}
                    type="text"
                    placeholder="Masukan Nomor Penerbangan"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                    value={query}
                  />
                  <Button
                    type="submit"
                    variant="transparant"
                    style={{
                      background: "#A06ECE",
                      color: "white",
                      borderRadius: "0 8px 8px 0px",
                    }}
                  >
                    <SearchOutlinedIcon />
                  </Button>
                </Form.Group>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-between">
                <p>Pencarian Terkini</p>
                <p style={{ color: "red" }}>hapus</p>
              </div>
              <div>
                <p>{query}</p>
              </div>
            </Modal.Body>
          </Modal>

          {/* modal date picker */}
          <Modal
            size="md"
            show={datepicker}
            onHide={() => setDatepicker(false)}
            centered
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <DatePickerRanger />
            </Modal.Body>
          </Modal>
        </Row>
      </Container>

      {/* body */}
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} className="mb-3 mt-3">
            <div
              style={{
                boxShadow: "0px 1px rgb(206, 204, 204)",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <NotificationsIcon
                    style={{
                      color: "white",
                      background: "rgba(113, 38, 181, 0.5",
                      borderRadius: "20px",
                    }}
                  />
                  <p className="ms-3" style={{ color: "#8A8A8A" }}>
                    Promosi
                  </p>
                </div>
                <p style={{ color: "#8A8A8A" }}>
                  20 Maret, 14:04
                  <img className="ms-2" src={Ellipse} alt="ellipse" />
                </p>
              </div>
              <div className="ms-4">
                <p className="ms-3 text-justify" style={{ fontWeight: "500" }}>
                  Dapatkan Potongan 50% Tiket!
                </p>
              </div>
              <div className="ms-4">
                <p className="ms-3" style={{ color: "#8A8A8A" }}>
                  Syarat dan Ketentuan berlaku!
                </p>
              </div>
            </div>
          </Col>
          <Col md={8} className=" mb-3 mt-3">
            <div style={{ boxShadow: "0px 1px rgb(206, 204, 204)" }}>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <NotificationsIcon
                    style={{
                      color: "white",
                      background: "rgba(113, 38, 181, 0.5",
                      borderRadius: "20px",
                    }}
                  />
                  <p className="ms-3" style={{ color: "#8A8A8A" }}>
                    Notifikasi
                  </p>
                </div>
                <div>
                  <p style={{ color: "#8A8A8A" }}>
                    5 Maret, 14:04
                    <img
                      className="ms-2"
                      src={EllipseDanger}
                      alt="ellipseDanger"
                    />
                  </p>
                </div>
              </div>
              <div className="ms-4">
                <p className="ms-3 text-justify" style={{ fontWeight: "500" }}>
                  Terdapat perubahan pada jadwal penerbangan kode booking 45GT6.
                  Cek jadwal perjalanan Anda disini!
                </p>
              </div>
              <div className="ms-4"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Notifikasi;
