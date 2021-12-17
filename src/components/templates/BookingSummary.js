import React, { useState, useEffect } from "react";
import resortimg2 from "../../assets/resort-images/resort2.jpg";
import AccordionComponent from "../atoms/Accordion/Accordion-Component";
import BookedDetails from "../molecules/BookedDetails/BookedDetails";
import GuestBookForm from "../molecules/GuestBookForm/GuestBookForm";
import PaymentSummary from "../molecules/PaymentSummary/PaymentSummary";
import { CustomButton } from "../atoms/CustomButton/CustomButton";
import moment from "moment";
import { Row, Col, message, Spin, Modal, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";

import axios from "../../axios";
import * as APIS from "../../constant/Apis";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function formatDate(dateVar) {
  if (dateVar) {
    return dateVar.toUTCString().slice(0, 16);
  }
}

const loadingIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

export default function BookingSummary() {
  const [formDetails, setformDetails] = useState("");
  const [resortData, setResortData] = useState("");
  const [roomData, setRoomData] = useState("");
  const [loading, setLoading] = useState(false);
  const [bokModalVisible, setBokModalVisible] = useState(false);
  const [isLoadingdata, setIsLoadingData] = useState(true);

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resortId = searchParams.get("resortID");
  const roomId = searchParams.get("roomID");
  const squery = JSON.parse(searchParams.get("searchQuery"));

  const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
  const userId = localData.userId;

  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  const tomorrow_m = moment().add(1, "days");
  const checkIn_m = moment(squery.checkIn || tomorrow_m);
  const checkOut_m = moment(squery.checkOut || tomorrow_m);
  const totalDays = checkOut_m.diff(checkIn_m, "days") + 1;

  console.log(squery);

  const handleBokModalOk = () => {
    setBokModalVisible(false);
  };

  const handleOk = () => {
    if (!userId) {
      navigate("/");
    } else {
      navigate(`/booking-history?userId=${userId}`);
    }
  };

  const resortFullData = async () => {
    window.scrollTo(0, 0);
    await axios
      .get(APIS.getFullResortDetails + "/" + resortId)
      .then(function (response) {
        console.log("response of resort", response.data.value);
        if (response.data.value) {
          response.data.value.rating =
            response.data.value.reviewtables.length > 0
              ? response.data.value.reviewtables[0].rating
              : "1";
          setResortData(response.data.value);
          setRoomData(
            response.data.value.roomtables.filter(
              (rooms) => rooms.id === roomId
            )[0]
          );
          setIsLoadingData(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        message.error("Loading Data Failed!!");
      });
  };

  const onFinish = (values) => {
    setformDetails(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    resortFullData();
  }, []);

  useEffect(() => {
    if (roomData === "") {
      return false;
    } else {
      const totalCharges = (squery.room || 1) * roomData.room_price * totalDays;
      const discountAmount = Math.ceil(totalCharges * (10 / 100));
      const priceToPay = totalCharges - discountAmount;
      const taxes = Math.ceil(priceToPay * 0.18);
      const totalAmount = priceToPay + taxes;

      async function displayRazorpay() {
        setLoading(true);
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
        console.log("uservalue: ", formDetails);

        if (!res) {
          setLoading(false);
          message.error("Razorpay SDK failed to load. Are you online?");
          return;
        }

        const orderPayload = {
          amount: totalAmount,
          currency: "INR",
        };
        const orderIdData = await axios
          .post(APIS.getRazorOrderId, orderPayload)
          .then(function (response) {
            console.log(response.data.data);
            return response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        if (!orderIdData) {
          setLoading(false);
          message.error("Booking failed!!");
          return;
        }
        console.log("stuff: ", orderIdData);

        const options = {
          key: process.env.REACT_APP_RAZORPAY_ID,
          currency: orderIdData.currency,
          amount: totalAmount,
          order_id: orderIdData.id,
          name: "Book your resort",
          description: "Thank you for booking with us. Have a pleasent stay",
          handler: async function (response) {
            const bookPayload = {
              user_id_proof: formDetails.idProof,
              mobile: formDetails.phone,
              email: formDetails.email,
              check_in: formatDate(new Date(squery.checkIn || tomorrow)),
              check_out: formatDate(new Date(squery.checkOut || tomorrow)),
              status: "Reserved",
              rooms_count: 1,
              resorttableId: resortId,
              usertableId: userId,
              roomtableId: roomId,
            };
            var guests = [
              formDetails.title +
                formDetails.firstName +
                " " +
                formDetails.lastName,
            ];
            var guestAdd = [];
            if (formDetails.users) {
              guestAdd = formDetails.users.map((user) => {
                return user.title + user.first + " " + user.last;
              });
            }
            guests = [...guests, ...guestAdd];
            bookPayload.guests = guests.toString();

            const mailPayload = {
              to: formDetails.email,
              name: guests[0],
              resortname: resortData.resort_name,
              address: resortData.address,
              checkin: checkIn_m.format("ddd, DD MMM YYYY"),
              checkout: checkOut_m.format("ddd, DD MMM YYYY"),
              Adults: squery.adult || 1,
              Children: squery.child || 0,
              roomcount: squery.room || 1,
              roomtype: roomData.room_name,
              Package: "rooms only",
              Amount: totalAmount,
              contact: resortData.contact_number,
              mail: resortData.resort_email,
            };

            bookPayload.mail = mailPayload;

            const bookingData = await axios
              .post(APIS.addBooking, bookPayload)
              .then(function (response) {
                console.log("booking", response);
                return response.data.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });

            if (!bookingData) {
              setLoading(false);
              message.error("Booking failed!!");
              return;
            }

            const paymentPayload = {
              order_id: orderIdData.id,
              payment_id: response.razorpay_payment_id,
              payment_signature: response.razorpay_signature,
              total: totalCharges + taxes,
              discount: "10%",
              paid_amount: totalAmount,
              payment_status: "successfull",
              bookingtableId: bookingData.id,
              usertableId: userId,
            };
            resortData.bookId = bookingData.id;
            resortData.bookAmount = totalAmount;

            const paymentDataMsg = await axios
              .post(APIS.addPaymentApi, paymentPayload)
              .then(function (response) {
                console.log("payment:", response);
                return response.data.data.msg;
              })
              .catch(function (error) {
                console.log(error);
              });
            if (paymentDataMsg === "Transaction successfull.") {
              setLoading(false);
              setBokModalVisible(true);
              message.success("Booked Successfully");
              // navigate("/");
            } else {
              setLoading(false);
              message.error("Booking failed!!");
            }
          },
          prefill: {
            name: "RESORTIC Ltd.",
            email: formDetails.email,
            contact: formDetails.numberPrefix + formDetails.phone,
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
      displayRazorpay();
      return true;
    }
  }, [formDetails]);

  return (
    <div style={{ padding: "15px 0px" }}>
      <Row gutter={16} justify="start">
        <Col xs={23} sm={23} md={14} lg={{ span: 14, offset: 2 }} xl={14}>
          <AccordionComponent title="Booking Details">
            <BookedDetails
              resortImage={resortimg2}
              resortName={resortData.resort_name}
              resortLoc={resortData.address}
              resortRating={resortData.rating}
              checkinDate={new Date(squery.checkIn || tomorrow)}
              checkoutDate={new Date(squery.checkOut || tomorrow)}
              nightsNum={totalDays}
              guestNum={squery.adult}
              roomsNum={squery.room}
              roomName={roomData.room_name}
              isLoading={isLoadingdata}
              type="booking"
            />
          </AccordionComponent>
        </Col>
        <Col xs={23} sm={23} md={8} lg={6} xl={6}>
          <PaymentSummary
            roomsNum={squery.room || 1}
            nightsNum={totalDays}
            pricePerRoom={roomData.room_price}
            discount="10"
            isLoading={isLoadingdata}
          />
        </Col>
      </Row>
      <Row justify="start">
        <Col xs={23} sm={23} md={14} lg={{ span: 14, offset: 2 }} xl={14}>
          <AccordionComponent title="Guest Details">
            <Spin indicator={loadingIcon} spinning={loading}>
              <GuestBookForm
                onSubmit={onFinish}
                onSubmitFailed={onFinishFailed}
              />
            </Spin>
          </AccordionComponent>
        </Col>
      </Row>
      <Row></Row>
      <Modal
        title="Booking Details"
        visible={bokModalVisible}
        onOk={handleBokModalOk}
        style={{ top: 20 }}
        footer={[
          <CustomButton onClick={handleOk} style={{ width: "20%" }}>
            OK
          </CustomButton>,
        ]}
      >
        <p>
          <strong> Your booking was confirmed. 😎</strong>
        </p>
        <p>Details of Booking</p>
        <div style={{ paddingLeft: "1em" }}>
          <p>
            <strong>Booking ID :</strong>
            <span style={{ paddingLeft: "3em" }}></span>
            {resortData.bookId}
            <br />
            <strong>Resort :</strong>
            <span style={{ paddingLeft: "5em" }}></span>
            {resortData.resort_name}
            <br />
            <strong>Address :</strong>
            <span style={{ paddingLeft: "4.3em" }}></span>
            {resortData.address}
            <br />
            <strong>Check In :</strong>
            <span style={{ paddingLeft: "4em" }}></span>
            {checkIn_m.format("ddd, DD MMM YYYY")}
            <br />
            <strong>Check Out :</strong>
            <span style={{ paddingLeft: "3em" }}></span>
            {checkOut_m.format("ddd, DD MMM YYYY")}
            <br />
            <strong>Adults :</strong>
            <span style={{ paddingLeft: "5em" }}></span>
            {squery.adult || 1}
            <br />
            <strong>Children :</strong>
            <span style={{ paddingLeft: "4em" }}></span>
            {squery.child || 0}
            <br />
            <strong>Room :</strong>
            <span style={{ paddingLeft: "5em" }}></span>
            {squery.room || 1} {roomData.room_name}
            <br />
            <strong>Package :</strong>
            <span style={{ paddingLeft: "4em" }}></span>Rooms Only
            <br />
            <strong>Amount Paid :</strong>
            <span style={{ paddingLeft: "2em" }}></span>₹{resortData.bookAmount}
          </p>
        </div>
        <p>
          Contact resort at <br />
          <strong>Mobile: </strong>+91-{resortData.contact_number} <br />
          <strong>Mail: </strong>
          {resortData.resort_email}
        </p>
        To reschedule/cancel your bookings, please login and navigate to Manage
        Bookings
        <br />
        Details Regarding your Booking will be sent to th provided Mail-Id
        shortly!!
      </Modal>
    </div>
  );
}
