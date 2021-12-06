import React from "react";
import resortimg2 from "../../assets/resort2.jpg";
import AccordionComponent from "../atoms/Accordion/Accordion-Component";
import { CustomButton } from "../atoms/CustomButton/CustomButton";
import BookedDetails from "../molecules/BookedDetails/BookedDetails";
import GuestBookForm from "../molecules/GuestBookForm/GuestBookForm";
import PaymentSummary from "../molecules/PaymentSummary/PaymentSummary";
import { Row, Col } from "antd";

export default function BookingSummary() {
  return (
    <div style={{"padding":"15px 0px"}}>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
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
        <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <PaymentSummary />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <AccordionComponent title="Guest Details">
            <GuestBookForm />
          </AccordionComponent>
          <CustomButton style={{ width: "100%" }}>Proceed Payment</CustomButton>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6}></Col>
      </Row>
      <Row>
        {/* <SingleDetailCard resortimg={resortimg1} location="Goa" title="Karma Royal Palms" price="240" ratingValue="3"/>
            <SingleDetailCard resortimg={resortimg2} location="Goa" title="La Grace Resort" price="290" ratingValue="5"/> */}
      </Row>
    </div>
  );
}
