import React, { useState, useEffect } from "react";
import resortimg2 from "../../assets/resort-images/resort2.jpg";
import AccordionComponent from "../atoms/Accordion/Accordion-Component";
import BookedDetails from "../molecules/BookedDetails/BookedDetails";
import GuestBookForm from "../molecules/GuestBookForm/GuestBookForm";
import PaymentSummary from "../molecules/PaymentSummary/PaymentSummary";
import { Row, Col, message } from "antd";
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

export default function BookingSummary() {
  const [formDetails, setformDetails] = useState("");
  const [resortData, setResortData] = useState("");
  const [roomData, setRoomData] = useState("");

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resortId = searchParams.get("resortID");
  const roomId = searchParams.get("roomID");
  const squery = JSON.parse(searchParams.get("searchQuery"));
  const totalDays =
    Math.ceil(
      Math.abs(
        new Date(squery.checkOut || new Date()) -
          new Date(squery.checkIn || new Date())
      ) /
        (1000 * 60 * 60 * 24)
    ) + 1;
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);

  console.log(squery);
  // console.log(resortId);
  // console.log(roomId);

  const resortFullData = async () => {
    window.scrollTo(0, 0);
    await axios
      .get(APIS.getFullResortDetails + "/" + resortId)
      .then(function (response) {
        console.log("response of resort", response.data.value);
        response.data.value.rating = response.data.value.reviewtables[0].rating
          ? response.data.value.reviewtables[0].rating
          : "1";
        setResortData(response.data.value);
        setRoomData(
          response.data.value.roomtables.filter(
            (rooms) => rooms.id === roomId
          )[0]
        );
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
    console.log(resortData);
    console.log(roomData);
    const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    const userId =
      localData.userId || "USR-73c2aa6c6ed3278039b8497306896ab18241c33c";

    if (roomData === "") {
      return false;
    } else {
      const totalCharges = (squery.room || 1) * roomData.room_price * totalDays;
      const discountAmount = Math.ceil(totalCharges * (10 / 100));
      const priceToPay = totalCharges - discountAmount;
      const taxes = Math.ceil(priceToPay * 0.18);
      const totalAmount = priceToPay + taxes;

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
              total: totalCharges + taxes,
              discount: "10%",
              paid_amount: totalAmount,
              payment_status: "successfull",
              bookingtableId: bookingData.id,
              usertableId: userId,
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
              resortName={resortData.resort_name}
              resortLoc={resortData.address}
              resortRating={resortData.rating?.toString()}
              checkinDate={new Date(squery.checkIn || tomorrow)}
              checkoutDate={new Date(squery.checkOut || tomorrow)}
              nightsNum={totalDays}
              guestNum={squery.adult}
              roomsNum={squery.room}
              roomName={roomData.room_name}
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
          />
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
