import React, { useState } from "react";
import Rating from "../../atoms/Rating/Rating";
import resortimg1 from "../../../assets/resort1.jpg";
import styles from "./BookedDetails.module.css";
import { Row, Col, Tag, Button, Modal, DatePicker } from "antd";
// import { FaMapMarkedAlt } from "react-icons/fa";
import { EnvironmentOutlined } from "@ant-design/icons";
import moment from "moment";
const { RangePicker } = DatePicker;

export default function BookedDetails({
  resortImage,
  resortName,
  resortLoc,
  resortRating,
  checkinDate,
  checkinTime,
  checkoutDate,
  checkoutTime,
  guestNum,
  roomsNum,
  nightsNum,
  type,
  amount,
}) {
  const [checkInDate] = useState(checkinDate);
  const [checkInTime] = useState(checkinTime);
  const [checkOutDate] = useState(checkoutDate);
  const [checkOutTime] = useState(checkoutTime);
  const [isModalTimeVisible, setIsModalTimeVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalTimeVisible(true);
  };

  const handleOk = () => {
    setIsModalTimeVisible(false);
  };

  const handleCancel = () => {
    setIsModalTimeVisible(false);
  };
  const showCancelModal = () => {
    setIsModalVisible(true);
  };

  const handlCanceleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancelCancel = () => {
    setIsModalVisible(false);
  };

  const dateFormat = "DD/MM/YYYY HH:mm";
  const bookedtiming = (
    <Row gutter={8} justify="space-around" align="middle">
      <Col>
        <h6>
          <strong>Check In</strong>
        </h6>
        <h3>{formatDate(checkInDate) || formatDate(new Date())}</h3>
        <h5>{checkInTime || "09:00 AM"}</h5>
      </Col>
      <Col>
        <h6>
          <strong>Check Out</strong>
        </h6>
        <h3>{formatDate(checkOutDate) || formatDate(new Date())}</h3>
        <h5>{checkOutTime || "10:00 PM"}</h5>
      </Col>
      <Col>
        <h6>
          <strong>Guests</strong>
        </h6>
        <h3>
          {guestNum || 0} Guests | {roomsNum || 0} Rooms
        </h3>
        <h5>{nightsNum || 1} Nights</h5>
      </Col>
      {type === "upcoming" || type === "past" ? (
        <Col>
          <Row gutter={8}>
            <h3>Paid Amount:</h3>
            <h3>₹{amount || "error"}</h3>
          </Row>
        </Col>
      ) : (
        ""
      )}
    </Row>
  );

  const roomDetails = (
    <div className={styles.roomDetails}>
      <p>
        {" "}
        1 x Day Use Room calculated from 9am to 6pm (Check-In and Check-Out on
        same day)
      </p>
      <p> 2 Adults</p>
      <p> Rooms only</p>
      <a href="#top" >View booking and Cancellation Policy</a>
    </div>
  );

  const roomdetail_Buttons = (
    <>
      {type === "upcoming" ? (
        <Row gutter={16}>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            {roomDetails}
          </Col>
          <Col
            className={styles.buttonContainer}
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
          >
                <Button
                  type="primary"
                  style={{
                    "background-color": "#0FCD22",
                    "border-style": "none",
                    "width": "100%",
                  }}
                  onClick={showModal}
                >
                  Re-Schedule
                </Button>
                <Button
                  type="primary"
                  style={{
                    "background-color": "red",
                    "border-style": "none",
                    "width": "100%",
                  }}
                  onClick={showCancelModal}
                >
                  Cancel
                </Button>

            <Modal
              title="Re-Schedule"
              visible={isModalTimeVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Choose the dates you want re-Schedule to:</p>
              <RangePicker
                showTime
                defaultValue={[
                  moment("26/11/2021 06:00", dateFormat),
                  moment("27/11/2021 21:00", dateFormat),
                ]}
              />
            </Modal>
            <Modal
              title="Confirmation"
              visible={isModalVisible}
              onOk={handlCanceleOk}
              onCancel={handleCancelCancel}
              footer={[
                <Button key="No" onClick={handleCancelCancel} type="primary">
                  No
                </Button>,
                <Button key="Yes" onClick={handlCanceleOk}>
                  Yes
                </Button>,
              ]}
            >
              <p>Are you sure you want to cancel this booking ?</p>
            </Modal>
          </Col>
        </Row>
      ) : (
        <div>{roomDetails}</div>
      )}
    </>
  );

  return (
    <div>
      <Row gutter={16} justify="center">
        {/* <Col span={8}> */}
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <img
            src={resortImage || resortimg1}
            alt="Booked resort"
            className={styles.img}
          />
        </Col>
        {/* <Col span={16}> */}
        <Col xs={24} sm={16} md={16} lg={16} xl={16}>
          <h2>{resortName}</h2>
          <p>
            <EnvironmentOutlined /> {resortLoc}
          </p>
          <Rating value={resortRating} />
        </Col>
      </Row>
      <div className={styles.bookedTimeContainer}>{bookedtiming}</div>
      {type === "upcoming" || type === "past" ? (
        ""
      ) : (
        <Tag color="green">Great choice have a pleasent Stay 😄</Tag>
      )}
      {roomdetail_Buttons}
    </div>
  );
}

function formatDate(dateVar) {
  if (dateVar) {
    return dateVar.toUTCString().slice(0, 16);
  }
}
