import React, { useState, useEffect } from "react";
import resortimg2 from "../../assets/resort2.jpg";
import AccordionComponent from "../atoms/Accordion/Accordion-Component";
import { CustomButton } from "../atoms/CustomButton/CustomButton";
import BookedDetails from "../molecules/BookedDetails/BookedDetails";
import GuestBookForm from "../molecules/GuestBookForm/GuestBookForm";
import PaymentSummary from "../molecules/PaymentSummary/PaymentSummary";
import { Row, Col, Form, message } from "antd";
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

export default function BookingSummary() {
  const [formDetails, setformDetails] = useState("");
  const [resortData, setResortData] = useState("");
  const [roomData, setRoomData] = useState("");

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resortId = searchParams.get("resortID");
  const roomId = searchParams.get("roomID");
  const squery = JSON.parse(searchParams.get("searchQuery"));

  // console.log(squery);
  // console.log(resortId);
  // console.log(roomId);

  const resortFullData = async () => {
    await axios
      .get(APIS.getFullResortDetails + "/" + resortId)
      .then(function (response) {
        console.log("response of resort", response.data.value);
        setResortData( response.data.value );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // resortFullData();
  const onFinish = (values) => {
    setformDetails(values);
    // displayRazorpay();
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    resortFullData();
    if (formDetails === "") {
      return false;
    } else {
      async function displayRazorpay() {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
        console.log("uservalue: ", formDetails);

        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }

        const orderPayload = {
          amount: 600,
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
        console.log("stuff: ", orderIdData);

        const options = {
          key: process.env.REACT_APP_RAZORPAY_ID,
          currency: orderIdData.currency,
          amount: orderIdData.amount,
          order_id: orderIdData.id,
          name: "Book your resort",
          description: "Thank you for booking with us. Have a pleasent stay",
          handler: async function (response) {
            const bookPayload = {
              user_id_proof: formDetails.idProof,
              mobile: formDetails.phone,
              email: formDetails.email,
              check_in: "2021-12-15",
              check_out: "2021-12-18",
              status: "Reserved",
              rooms_count: 1,
              resorttableId: "RST-e4c9164a08e6fa4f4ea07efe976cb06b9804ba24",
              usertableId: "USR-73c2aa6c6ed3278039b8497306896ab18241c33c",
              roomtableId: "7e8d6616-35ce-40f0-829d-07218f2edeff",
            };
            var guests = [
              formDetails.title +
                formDetails.firstName +
                " " +
                formDetails.lastName,
            ];
            if (formDetails.users) {
              for (var user in formDetails.users) {
                guests.push(user.title + user.firstName + " " + user.lastName);
              }
            }
            bookPayload.guests = guests.toString();

            const bookingData = await axios
              .post(APIS.addBooking, bookPayload)
              .then(function (response) {
                console.log("booking", response);
                return response.data.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });
            const paymentPayload = {
              order_id: orderIdData.id,
              payment_id: response.razorpay_payment_id,
              payment_signature: response.razorpay_signature,
              total: 223456,
              discount: "10%",
              paid_amount: 223000,
              payment_status: "successfull",
              bookingtableId: bookingData.id,
              usertableId: "USR-73c2aa6c6ed3278039b8497306896ab18241c33c",
            };
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
              message.success("Booked Successfully");
              navigate("/");
            } else {
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
              resortName="Oakwood Premier AMTD Singapore"
              resortLoc="Near Ramji colony, JJ District, IGI Airport"
              resortRating="4"
              checkinDate={new Date()}
              guestNum="2"
              roomsNum="1"
              type="booking"
              amount="290"
            />
          </AccordionComponent>
        </Col>
        <Col xs={23} sm={23} md={8} lg={6} xl={6}>
          <PaymentSummary />
        </Col>
      </Row>
      <Row justify="start">
        <Col xs={23} sm={23} md={14} lg={{ span: 14, offset: 2 }} xl={14}>
          <AccordionComponent title="Guest Details">
            <GuestBookForm
              onSubmit={onFinish}
              onSubmitFailed={onFinishFailed}
            />
          </AccordionComponent>
          {/* <Form name="register">
          <Form.Item>
          <CustomButton htmlType="submit" style={{ width: "100%" }} >Proceed Payment</CustomButton>
          </Form.Item>
          </Form> */}
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}
