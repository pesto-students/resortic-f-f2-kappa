import React from "react";
import BookedDetails from "../molecules/BookedDetails/BookedDetails";
import AccordionComponent from "../atoms/Accordion/Accordion-Component";
import resortimg2 from "../../assets/resort2.jpg";
import { Tabs, Row, Col } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ManageBooking() {
  return (
    <div>
      <Row justify="center">
        <Col span={18}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane
              tab="Upcoming"
              key="1"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <AccordionComponent title="Booking Details">
                <BookedDetails
                  resortImage={resortimg2}
                  resortName="Oakwood Premier AMTD Singapore"
                  resortLoc="Near Ramji colony, JJ District, IGI Airport"
                  resortRating="4"
                  checkinDate={new Date()}
                  guestNum="2"
                  roomsNum="1"
                  type="upcoming"
                  amount="290"
                />
              </AccordionComponent>
              <AccordionComponent title="Booking Details">
                <BookedDetails
                  resortImage={resortimg2}
                  resortName="Oakwood Premier AMTD Singapore"
                  resortLoc="Near Ramji colony, JJ District, IGI Airport"
                  resortRating="4"
                  checkinDate={new Date()}
                  guestNum="2"
                  roomsNum="1"
                  type="upcoming"
                  amount="290"
                />
              </AccordionComponent>
            </TabPane>
            <TabPane
              tab="Past"
              key="2"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <AccordionComponent title="Booking Details">
                <BookedDetails
                  resortImage={resortimg2}
                  resortName="Oakwood Premier AMTD Singapore"
                  resortLoc="Near Ramji colony, JJ District, IGI Airport"
                  resortRating="4"
                  checkinDate={new Date()}
                  guestNum="2"
                  roomsNum="1"
                  type="past"
                  amount="290"
                />
              </AccordionComponent>
              <AccordionComponent title="Booking Details">
                <BookedDetails
                  resortImage={resortimg2}
                  resortName="Oakwood Premier AMTD Singapore"
                  resortLoc="Near Ramji colony, JJ District, IGI Airport"
                  resortRating="4"
                  checkinDate={new Date()}
                  guestNum="2"
                  roomsNum="1"
                  type="past"
                  amount="290"
                />
              </AccordionComponent>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
