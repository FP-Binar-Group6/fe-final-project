import React, { useEffect, useState } from "react";
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
  Accordion,
} from "react-bootstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Ilustration from "../../assets/Ilustration.png";
import airline from "../../assets/airline.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DatePickerRanger from "../../components/datepicker/DatePickerRange";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../redux/actions/history";

const History = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(false);
  const [datepicker, setDatepicker] = useState(false);
  const [query, setQuery] = useState("");

  const { historys } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  return (
    <>
      {/* Header */}
      <Container
        fluid
        className="notifikasi my-5 pb-3 "
        style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
      >
        <Row className="d-flex justify-content-center">
          <Col className="mt-5 me-5" xs={8}>
            <h5>Beranda</h5>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center me-3 mt-3">
          <Col xs={6} className="pb-2">
            <div
              onClick={() => navigate("/")}
              className="d-flex align-items-center  p-2 ps-2"
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
          <Col xs={5} className="d-flex d-block d-sm-none">
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
                    className="d-none d-md-block d-lg-block"
                    style={{
                      width: "23rem",
                      borderRadius: "8px 0 0 8px",
                    }}
                    type="text"
                    placeholder="Masukan Nomor Penerbangan"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                    value={query}
                  />
                  <Form.Control
                    className="d-block d-sm-none"
                    style={{
                      width: "12rem",
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
      {historys.length > 0 ? (
        <>
          {/* history */}
          {/* history visable in lg and md */}
          <Container>
            <Row>
              {historys &&
                historys.map((history) => (
                  <Row className=" d-flex justify-content-center  mb-5 ">
                    <Col lg={5} className=" d-flex justify-content-center">
                      <Row>
                        <Col
                          lg={5}
                          className="mb-4 d-flex d-none d-md-block d-lg-block"
                        >
                          <Card className="Isi1" style={{ width: "23rem" }}>
                            <div className="d-flex justify-content-start">
                              {history.payment.paymentStatus ? (
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
                                  <LocationOnIcon
                                    style={{ color: "#8A8A8A" }}
                                  />
                                  {
                                    history.tickets[0].seat.schedule
                                      .departureAirport.cityName
                                  }
                                </p>
                                <p style={{ width: "5rem" }}>
                                  {" "}
                                  {
                                    history.tickets[0].seat.schedule
                                      .departureTime
                                  }
                                </p>
                              </div>
                              <div className="text-center">
                                <ArrowRightAltIcon sx={{ fontSize: 40 }} />
                              </div>
                              <div className="text-center">
                                <p style={{ fontWeight: "700" }}>
                                  <LocationOnIcon
                                    style={{ color: "#8A8A8A" }}
                                  />
                                  {
                                    history.tickets[0].seat.schedule
                                      .arrivalAirport.cityName
                                  }
                                </p>
                                <p style={{ width: "5rem" }}>
                                  {" "}
                                  {history.tickets[0].seat.schedule.arrivalTime}
                                </p>
                              </div>
                            </div>
                            <div className="Isi2">
                              <div
                                className="text-start"
                                style={{ width: "7.5rem" }}
                              >
                                <p>
                                  <strong>Booking Code:</strong>{" "}
                                  {history.payment.bookingCode}
                                </p>
                              </div>
                              <div>
                                <p
                                  className="text-center"
                                  style={{ width: "5rem" }}
                                >
                                  <strong>Class:</strong>{" "}
                                  {history.tickets[0].seat.schedule.kelas.name}
                                </p>
                              </div>
                              <div>
                                <p
                                  className="text-start"
                                  style={{
                                    fontWeight: "700",
                                    color: "#4B1979",
                                  }}
                                >
                                  IDR {history.payment.totalPrice}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      lg={7}
                      style={{ width: "23rem" }}
                      className="d-flex d-none d-md-block d-lg-block"
                    >
                      <div>
                        <div
                          className="m-2 pb-1"
                          style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
                        >
                          <div className="Isi3">
                            <p style={{ fontWeight: "700" }}>Detail pesanan</p>
                            {history.payment.paymentStatus ? (
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
                          <p className="pt-1 pb-1">
                            Booking Code:{" "}
                            <strong>{history.payment.bookingCode}</strong>
                          </p>
                          <div className="Isi3 pt-1 pb-1">
                            <p>
                              <strong>
                                {history.tickets[0].seat.schedule.departureTime}
                              </strong>
                            </p>
                            <p style={{ fontWeight: "700", color: "#A06ECE" }}>
                              Keberangkatan
                            </p>
                          </div>
                          <p></p>
                          <p className="pb-1">
                            {
                              history.tickets[0].seat.schedule.departureAirport
                                .name
                            }
                          </p>
                        </div>
                        <div
                          className="Isi2"
                          style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
                        >
                          <div className="d-flex">
                            <div className="d-flex align-items-center pe-3">
                              <img src={airline} alt="airline" />
                            </div>
                            <div>
                              <p style={{ fontWeight: "700", width: "10rem" }}>
                                {history.tickets[0].seat.schedule.airline.name}
                              </p>

                              <p style={{ fontWeight: "700" }}>informasi :</p>
                              <p className="pb-1" style={{ width: "18rem" }}>
                                penumpang 1: {history.tickets[0].title}{" "}
                                {history.tickets[0].firstName}{" "}
                                {history.tickets[0].lastName}
                                <p>
                                  {" "}
                                  <strong>ID:</strong>
                                  {history.tickets[0].idCardNumber}
                                </p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="pt-3 pb-2"
                          style={{ boxShadow: "0px 2px rgb(206, 204, 204)" }}
                        >
                          <div className="Isi2 pt-1 pb-1">
                            <p style={{ fontWeight: "700" }}>
                              {history.tickets[0].seat.schedule.arrivalTime}
                            </p>
                            <p style={{ fontWeight: "700", color: "#A06ECE" }}>
                              Kedatangan
                            </p>
                          </div>
                          <div>
                            <p></p>
                            <p>
                              {
                                history.tickets[0].seat.schedule.arrivalAirport
                                  .name
                              }
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="pt-3">
                              <p style={{ fontWeight: "700" }}>Rincian Harga</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p>Adult</p>
                              <p>
                                IDR{" "}
                                {history.tickets[0].seat.schedule.kelas.price}
                              </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p>Tax</p>
                              <p>IDR </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p style={{ fontWeight: "700" }}>Total</p>
                              <p
                                style={{ fontWeight: "700", color: "#A06ECE" }}
                              >
                                IDR {history.payment.totalPrice}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          {history.payment.paymentStatus ? (
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
                                onClick={() => navigate("/booking/payment")}
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
                    {/* history only in xs */}
                    <Row>
                      <Col className="d-flex  d-xs-block d-md-none d-lg-none">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item>
                            <Accordion.Header>
                              <div>
                                <div className="d-flex justify-content-start">
                                  {history.payment.paymentStatus ? (
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
                                <div className="Isi2">
                                  <div>
                                    <p
                                      className="text-center"
                                      style={{ fontWeight: "700" }}
                                    >
                                      <LocationOnIcon
                                        style={{ color: "#8A8A8A" }}
                                      />
                                      {
                                        history.tickets[0].seat.schedule
                                          .departureAirport.cityName
                                      }
                                    </p>
                                    <p style={{ width: "4rem" }}>
                                      {" "}
                                      {
                                        history.tickets[0].seat.schedule
                                          .departureTime
                                      }
                                    </p>
                                  </div>
                                  <div className="text-center mt-5">
                                    <ArrowRightAltIcon sx={{ fontSize: 30 }} />
                                  </div>
                                  <div>
                                    <p
                                      className="text-center"
                                      style={{ fontWeight: "700" }}
                                    >
                                      <LocationOnIcon
                                        style={{ color: "#8A8A8A" }}
                                      />
                                      {
                                        history.tickets[0].seat.schedule
                                          .arrivalAirport.cityName
                                      }
                                    </p>

                                    <p style={{ width: "4rem" }}>
                                      {" "}
                                      {
                                        history.tickets[0].seat.schedule
                                          .arrivalTime
                                      }
                                    </p>
                                  </div>
                                </div>
                                <div className="Isi2">
                                  <div
                                    className="text-start"
                                    style={{ width: "4rem" }}
                                  >
                                    <p>
                                      <strong>Booking Code:</strong>{" "}
                                      {history.payment.bookingCode}
                                    </p>
                                  </div>
                                  <div>
                                    <p
                                      className="text-center"
                                      style={{ width: "6.5rem" }}
                                    >
                                      <strong>Class:</strong>{" "}
                                      {
                                        history.tickets[0].seat.schedule.kelas
                                          .name
                                      }
                                    </p>
                                  </div>
                                  <div>
                                    <p
                                      className="text-start "
                                      style={{
                                        fontWeight: "700",
                                        color: "#4B1979",
                                        width: "4rem",
                                      }}
                                    >
                                      IDR {history.payment.totalPrice}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div>
                                <div
                                  className="m-2 pb-1"
                                  style={{
                                    boxShadow: "0px 2px rgb(206, 204, 204)",
                                  }}
                                >
                                  <div className="Isi3">
                                    <p style={{ fontWeight: "700" }}>
                                      Detail pesanan
                                    </p>
                                    {history.payment.paymentStatus ? (
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
                                  <p className="pt-1">
                                    Booking Code:{" "}
                                    <strong>
                                      {history.payment.bookingCode}
                                    </strong>
                                  </p>
                                  <div className="Isi3 pt-1">
                                    <p>
                                      <strong></strong>
                                    </p>
                                    <p
                                      style={{
                                        fontWeight: "700",
                                        color: "#A06ECE",
                                      }}
                                    >
                                      Keberangkatan
                                    </p>
                                  </div>
                                  <p></p>
                                  <p
                                    className="pb-1"
                                    style={{ width: "10rem" }}
                                  >
                                    {
                                      history.tickets[0].seat.schedule
                                        .departureAirport.name
                                    }
                                  </p>
                                </div>
                                <div
                                  className="Isi2"
                                  style={{
                                    boxShadow: "0px 2px rgb(206, 204, 204)",
                                  }}
                                >
                                  <div className="d-flex">
                                    <div className="d-flex align-items-center pe-3">
                                      <img src={airline} alt="airline" />
                                    </div>
                                    <div>
                                      <p
                                        style={{
                                          fontWeight: "700",
                                          width: "8rem",
                                        }}
                                      >
                                        {
                                          history.tickets[0].seat.schedule
                                            .airline.name
                                        }
                                      </p>

                                      <p style={{ fontWeight: "700" }}>
                                        informasi :
                                      </p>
                                      <p
                                        className="pb-1"
                                        style={{ width: "8rem" }}
                                      >
                                        penumpang 1: {history.tickets[0].title}{" "}
                                        {history.tickets[0].firstName}{" "}
                                        {history.tickets[0].lastName}
                                        <p>
                                          {" "}
                                          <strong>ID:</strong>
                                          {history.tickets[0].idCardNumber}
                                        </p>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="pt-3 pb-2"
                                  style={{
                                    boxShadow: "0px 2px rgb(206, 204, 204)",
                                  }}
                                >
                                  <div className="Isi2">
                                    <p>
                                      <strong></strong>
                                    </p>

                                    <p
                                      style={{
                                        fontWeight: "700",
                                        color: "#A06ECE",
                                      }}
                                    >
                                      Kedatangan
                                    </p>
                                  </div>
                                  <div>
                                    <p></p>
                                    <p>
                                      {
                                        history.tickets[0].seat.schedule
                                          .arrivalAirport.name
                                      }
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <div className="pt-3">
                                      <p style={{ fontWeight: "700" }}>
                                        Rincian Harga
                                      </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <p>Adult</p>
                                      <p>
                                        IDR{" "}
                                        {
                                          history.tickets[0].seat.schedule.kelas
                                            .price
                                        }
                                      </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                      <p>Tax</p>
                                      <p>IDR 0</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <p style={{ fontWeight: "700" }}>Total</p>
                                      <p
                                        style={{
                                          fontWeight: "700",
                                          color: "#A06ECE",
                                        }}
                                      >
                                        IDR {history.payment.totalPrice}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                  {history.payment.paymentStatus ? (
                                    <div>
                                      {" "}
                                      <Button
                                        variant="trasparant"
                                        style={{
                                          padding: "0.5rem",
                                          width: "12rem",
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
                                        onClick={() =>
                                          navigate("/booking/payment")
                                        }
                                        variant="danger"
                                        style={{
                                          padding: "0.5rem",
                                          width: "12rem",
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
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Col>
                    </Row>
                  </Row>
                ))}
            </Row>
          </Container>
        </>
      ) : (
        <>
          {/* empty history */}{" "}
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
                    onClick={() => navigate("/")}
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
