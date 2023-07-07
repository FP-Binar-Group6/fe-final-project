import React, { useEffect, useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import WestIcon from "@mui/icons-material/West";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DatePickerRanger from "../../components/datepicker/DatePickerRange";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./notifikasi.css";
import EllipseDanger from "../../assets/EllipseDanger.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "../../redux/actions/notif";

function Notifikasi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(false);
  const [datepicker, setDatepicker] = useState(false);
  const [query, setQuery] = useState("");

  const { notifs } = useSelector((state) => state.notif);

  useEffect(() => {
    dispatch(getNotif());
  }, [dispatch]);
  console.log(notifs);
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
            <h5>Notifikasi</h5>
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
                    placeholder="Pencarian Notifikasi"
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
                    placeholder="Pencarian Notifikasi"
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
      {notifs ? (
        <>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              {notifs &&
                notifs.map((notif) => (
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
                            Pembayaran
                          </p>
                        </div>
                        <p style={{ color: "#8A8A8A" }}>
                          <img
                            className="ms-2"
                            src={EllipseDanger}
                            alt="ellipseDanger"
                          />
                        </p>
                      </div>
                      <div className="ms-4">
                        <p
                          className="ms-3 text-justify"
                          style={{ fontWeight: "500" }}
                        >
                          {notif.createdAt} {/* Data api belum data */}
                        </p>
                      </div>
                      <div className="ms-4">
                        <p className="ms-3" style={{ color: "#8A8A8A" }}></p>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Notifikasi;
