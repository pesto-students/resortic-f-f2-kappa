import React, { useState } from "react";
import Rating from "../../atoms/Rating/Rating";
import resortimg1 from "../../../assets/resort-images/resort1.jpg";
import { getRandomImage } from "../../../utils/utils";
import styles from "./BookedDetails.module.css";
import { Row, Col, Tag, Button, Modal, DatePicker } from "antd";
import axios from "../../../axios";
import * as APIS from "../../../constant/Apis";
// import { FaMapMarkedAlt } from "react-icons/fa";
import { EnvironmentOutlined } from "@ant-design/icons";
import WithLoading from "../../../HOC/WithLoading";
import moment from "moment";
const { RangePicker } = DatePicker;

export default WithLoading(function BookedDetails({
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
  roomName,
  bookingId,
  onSuccessCancel,
  status,
  isLoading
}) {
  const [checkInDate, setCheckInDate] = useState(moment(checkinDate));
  const [checkInTime] = useState(checkinTime);
  const [checkOutDate, setCheckOutDate] = useState(moment(checkoutDate));
  const [checkOutTime] = useState(checkoutTime);
  const [isModalTimeVisible, setIsModalTimeVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDates, setmodalDates] = useState([checkInDate, checkOutDate]);

  const showReScheduleModal = () => {
    setIsModalTimeVisible(true);
  };

  const handleOk = async () => {
    setCheckInDate(modalDates[0]);
    setCheckOutDate(modalDates[1]);
    const updateBook = {
      check_in: modalDates[0].format("YYYY-MM-DD"),
      check_out: modalDates[1].format("YYYY-MM-DD"),
    };
    console.log(updateBook);
    await axios
      .put(APIS.updateBooking + "/" + bookingId, updateBook)
      .then(function (response) {
        console.log("response of updateBooking", response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setIsModalTimeVisible(false);
  };

  const handleCancel = () => {
    setIsModalTimeVisible(false);
  };
  const showCancelModal = () => {
    setIsModalVisible(true);
  };

  const handlCanceleOk = async () => {
    await axios
      .delete(APIS.updateBooking + "/" + bookingId)
      .then(function (response) {
        console.log("response of deleteBooking", response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    onSuccessCancel();
    setIsModalVisible(false);
  };

  const handleCancelCancel = () => {
    setIsModalVisible(false);
  };
  const bookedtiming = (
    <Row gutter={8} justify="space-around" align="middle">
      <Col>
        <h6>
          <strong>Check In</strong>
        </h6>
        <h3>{checkInDate.format("ddd, DD MMM YYYY")}</h3>
        <h5>{checkInTime || "09:00 AM"}</h5>
      </Col>
      <Col>
        <h6>
          <strong>Check Out</strong>
        </h6>
        <h3>{checkOutDate.format("ddd, DD MMM YYYY")}</h3>
        <h5>{checkOutTime || "06:00 PM"}</h5>
      </Col>
      <Col>
        <h6>
          <strong>Guests</strong>
        </h6>
        <h3>
          {guestNum || 1} Guests | {roomsNum || 1} Rooms
        </h3>
        <h5>{nightsNum || 1} Days</h5>
      </Col>
      {type === "upcoming" || type === "past" ? (
        <Col>
          <Row gutter={8}>
            <h3>Paid Amount</h3>
            <h3>: ₹{amount || "error"}</h3>
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
        1 x Day Room Use calculated from 9am to 6pm (Check-In and Check-Out on
        same day)
      </p>
      <p> {roomName} </p>
      <p> {guestNum || 1} Adults</p>
      <p> Rooms only</p>
      <a href="#top">View booking and Cancellation Policy</a>
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
                width: "100%",
              }}
              onClick={showReScheduleModal}
            >
              Re-Schedule
            </Button>
            <Button
              type="primary"
              style={{
                "background-color": "red",
                "border-style": "none",
                width: "100%",
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
                autoFocus
                defaultValue={[checkInDate, checkOutDate]}
                onCalendarChange={(val) => setmodalDates(val)}
              />
            </Modal>
            <Modal
              title="Confirmation"
              visible={isModalVisible}
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
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <img
            src={getRandomImage() || resortimg1}
            alt="Booked resort"
            className={styles.img}
          />
        </Col>
        <Col xs={24} sm={16} md={16} lg={16} xl={16}>
          <h2>{resortName}</h2>
          <p>
            <EnvironmentOutlined /> {resortLoc}
          </p>
          <Rating value={resortRating} />
          {type === "past" ? (
            <p><Tag color={status==="Cancelled"?"red":"green"}>{status}</Tag></p>
          ) : (
            ""
          )}
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
})
