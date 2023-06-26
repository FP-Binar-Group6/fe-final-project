import React, { useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import WestIcon from "@mui/icons-material/West";
import "./history.css";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Badge,
  Card,
} from "react-bootstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Ilustration from "../../assets/Ilustration.png";
import logo from "../../assets/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DatePickerRanger from "../../components/datepicker/DatePickerRange";

const History = () => {
  const [smShow, setSmShow] = useState(false);
  const [datepicker, setDatepicker] = useState(false);
  const [query, setQuery] = useState("");

  const history = 1;
  const success = 1;
  const unpaid = null;

  return (
    <>
      {/* Header */}
      <Container
        fluid
        className="history my-2 pb-3 "
        style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
      >
        <Row className="d-flex justify-content-center">
          <Col className="me-5" xs={8}>
            <h5>Riwayat Pemesanan</h5>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center me-3 mt-3">
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
              className="ms-1 mb-2 "
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
      {history ? (
        <>
          {/* history */}
          <Container className=" d-flex justify-content-center mt-4">
            <Row>
              <p style={{ fontWeight: "700" }}>Maret 2023</p>

              <Col md={6}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Card className="Isi1" style={{ width: "23rem" }}>
                      <div className="d-flex justify-content-start">
                        {success ? (
                          <div>
                            {" "}
                            <Badge bg="success">Issued</Badge>
                          </div>
                        ) : (
                          <div>
                            <Badge bg="danger">Unpaid</Badge>
                          </div>
                        )}
                      </div>
                      <div
                        className="Isi2"
                        style={{ boxShadow: "1px rgb(206, 204, 204)" }}
                      >
                        <div className="text-center">
                          <p style={{ fontWeight: "700" }}>
                            <LocationOnIcon style={{ color: "#8A8A8A" }} />
                            Jakarta
                          </p>
                          <p>5 Maret 2023</p>
                          <p>19:10</p>
                        </div>
                        <div className="text-center">
                          <p>4h 0m</p>
                          <ArrowRightAltIcon sx={{ fontSize: 40 }} />
                        </div>
                        <div className="text-center">
                          <p style={{ fontWeight: "700" }}>
                            <LocationOnIcon style={{ color: "#8A8A8A" }} />
                            Melbourne
                          </p>
                          <p>5 Maret 2023</p>
                          <p>21:10</p>
                        </div>
                      </div>
                      <div className="Isi2">
                        <div className="text-start" style={{ width: "7.5rem" }}>
                          <p>
                            <strong>Booking Code:</strong> 6723y2GHK
                          </p>
                        </div>
                        <div>
                          <p className="text-center" style={{ width: "5rem" }}>
                            <strong>Class:</strong> Economy
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-start"
                            style={{ fontWeight: "700", color: "#4B1979" }}
                          >
                            IDR 9.850.000
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-4">
                    <Card className="Isi1" style={{ width: "23rem" }}>
                      <div className="d-flex justify-content-start">
                        {unpaid ? (
                          <div>
                            {" "}
                            <Badge bg="success">Issued</Badge>
                          </div>
                        ) : (
                          <div>
                            <Badge bg="danger">Unpaid</Badge>
                          </div>
                        )}
                      </div>
                      <div
                        className="Isi2"
                        style={{ boxShadow: "1px rgb(206, 204, 204)" }}
                      >
                        <div className="text-center">
                          <p style={{ fontWeight: "700" }}>
                            <LocationOnIcon style={{ color: "#8A8A8A" }} />
                            Jakarta
                          </p>
                          <p>5 Maret 2023</p>
                          <p>19:10</p>
                        </div>
                        <div className="text-center">
                          <p>4h 0m</p>
                          <ArrowRightAltIcon sx={{ fontSize: 40 }} />
                        </div>
                        <div className="text-center">
                          <p style={{ fontWeight: "700" }}>
                            <LocationOnIcon style={{ color: "#8A8A8A" }} />
                            Melbourne
                          </p>
                          <p>5 Maret 2023</p>
                          <p>21:10</p>
                        </div>
                      </div>
                      <div className="Isi2">
                        <div className="text-start" style={{ width: "7.5rem" }}>
                          <p>
                            <strong>Booking Code:</strong> 6723y2GHK
                          </p>
                        </div>
                        <div>
                          <p className="text-center" style={{ width: "5rem" }}>
                            <strong>Class:</strong> Economy
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-start"
                            style={{ fontWeight: "700", color: "#4B1979" }}
                          >
                            IDR 9.850.000
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md={6} style={{ width: "23rem" }}>
                <div>
                  <div
                    className="m-2 pb-1"
                    style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
                  >
                    <div className="Isi3">
                      <p style={{ fontWeight: "700" }}>Detail pesanan</p>
                      {success ? (
                        <div>
                          {" "}
                          <Badge bg="success">Issued</Badge>
                        </div>
                      ) : (
                        <div>
                          <Badge bg="danger">Unpaid</Badge>
                        </div>
                      )}
                    </div>
                    <p>
                      Booking Code: <strong>6723y2GHK</strong>
                    </p>
                    <div className="Isi3">
                      <p>
                        <strong>19:10</strong>
                      </p>
                      <p style={{ fontWeight: "700", color: "#A06ECE" }}>
                        Keberangkatan
                      </p>
                    </div>
                    <p>5 Maret 2023</p>
                    <p>Soekarno Hatta - Terminal 1A Domestik</p>
                  </div>
                  <div
                    className="Isi2"
                    style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
                  >
                    <div className="d-flex">
                      <div className="d-flex align-items-center pe-3">
                        <img src={logo} alt="logo" />
                      </div>
                      <div>
                        <p style={{ fontWeight: "700", width: "10rem" }}>
                          Jet Air-Economy JT-203
                        </p>

                        <p style={{ fontWeight: "700" }}>informasi :</p>
                        <p style={{ width: "15rem" }}>
                          penumpang 1:Mr. Harry Potter ID: 1234567
                        </p>
                        <p style={{ width: "15rem" }}>
                          penumpang 1:Miss. Hermione ID: 789658
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pt-3 pb-2"
                    style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
                  >
                    <div className="Isi2">
                      <p style={{ fontWeight: "700" }}>21:10</p>
                      <p style={{ fontWeight: "700", color: "#A06ECE" }}>
                        Kedatangan
                      </p>
                    </div>
                    <div>
                      <p>5 Maret 2023</p>
                      <p>Melbourne Interntional Airport</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="pt-3">
                        <p style={{ fontWeight: "700" }}>Rincian Harga</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>2 Adults</p>
                        <p>IDR 9.550.000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>1 Baby</p>
                        <p>IDR 0</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Tax</p>
                        <p>IDR 300.000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p style={{ fontWeight: "700" }}>Total</p>
                        <p style={{ fontWeight: "700", color: "#A06ECE" }}>
                          IDR 9.550.000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    {success ? (
                      <div>
                        {" "}
                        <Button
                          variant="trasparant"
                          style={{
                            padding: "0.5rem",
                            width: "18rem",
                            fontWeight: "700",
                            background: "#A06ECE",
                            color: "white",
                          }}
                        >
                          Cetak Tiket
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          variant="danger"
                          style={{
                            padding: "0.5rem",
                            width: "18rem",
                            fontWeight: "700",

                            color: "white",
                          }}
                        >
                          Lanjut Bayar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          {/* empty history */}
          <Container>
            <Row>
              <Col>
                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                  {/* visible only lg */}
                  <img
                    className="d-none  d-lg-block"
                    src={Ilustration}
                    alt="ilustration"
                    style={{ width: "30%" }}
                  />

                  {/* visible only md */}
                  <img
                    className="d-none d-md-block d-lg-none"
                    src={Ilustration}
                    alt="ilustration"
                    style={{ width: "40%" }}
                  />

                  {/* visible only xs / sm */}
                  <img
                    className="d-block d-sm-none"
                    src={Ilustration}
                    alt="ilustration"
                    style={{ width: "50%" }}
                  />

                  <p
                    style={{
                      marginTop: "2rem",
                      color: "#A06ECE",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Oops! Riwayat pesanan kosong!
                  </p>
                  <p
                    style={{
                      marginBottom: "2rem",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Anda belum melakukan pemesanan penerbangan
                  </p>
                  <Button
                    variant="transparant"
                    style={{ background: "#A06ECE", color: "white" }}
                  >
                    Cari Penerbangan
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default History;
