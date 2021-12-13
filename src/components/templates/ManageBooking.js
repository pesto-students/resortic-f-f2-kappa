import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BookedDetails from "../molecules/BookedDetails/BookedDetails";
import AccordionComponent from "../atoms/Accordion/Accordion-Component";
import resortimg2 from "../../assets/resort2.jpg";
import axios from "../../axios";
import * as APIS from "../../constant/Apis";
import { Tabs, Row, Col, Result } from "antd";
import { MehTwoTone } from "@ant-design/icons";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ManageBooking() {
  const [searchParams] = useSearchParams();
  const userIdURL = searchParams.get("userId");
  console.log(userIdURL);

  const [upcomingData, setUpcomingData] = useState("");
  const [pastData, setPastData] = useState("");
  const [activeKey, setActiveKey] = useState("1");

  const getUpcomingBookings = () => {
    const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    const userId = userIdURL || localData.userId || "USR-73c2aa6c6ed3278039b8497306896ab18241c33c";
    axios
      .get(APIS.getBooking + "/" + userId + "/upcoming")
      .then(function (response) {
        console.log("response of upcoming", response.data.data);
        setUpcomingData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getPastBookings = () => {
    const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    const userId =
      localData.userId || "USR-73c2aa6c6ed3278039b8497306896ab18241c33c";
    axios
      .get(APIS.getBooking + "/" + userId + "/past")
      .then(function (response) {
        console.log("response of past", response.data.data);
        setPastData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (activeKey) => {
    setActiveKey({ activeKey });
  };

  useEffect(() => {
    getUpcomingBookings();
    getPastBookings();
  }, []);

  return (
    <div>
      <Row justify="center">
        <Col span={18}>
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane
              tab="Upcoming"
              key="1"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              {upcomingData.length > 0 ? (
                upcomingData.map((booking, index) => {
                  return (
                    <AccordionComponent title="Booking Details">
                      <BookedDetails
                        resortImage={resortimg2}
                        resortName={booking.resort_name}
                        resortLoc={booking.address}
                        resortRating={booking.rating}
                        checkinDate={new Date(booking.check_in)}
                        checkoutDate={new Date(booking.check_out)}
                        guestNum={booking.rooms_count * 2}
                        roomsNum={booking.rooms_count}
                        type="upcoming"
                        amount={booking.paid_amount}
                        bookingId={booking.id}
                      />
                    </AccordionComponent>
                  );
                })
              ) : (
                <Result
                icon={<MehTwoTone twoToneColor="#52c41a"/>}
                title="No Upcomings Bookings!!"
                subTitle="Let's plan for a new one"
                extra={<Link to="/">Return Home</Link>}
              />
              )}
              
            </TabPane>
            <TabPane
              tab="Past"
              key="2"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              {pastData.length > 0 ? (
                pastData.map((booking, index) => {
                  return (
                    <AccordionComponent title="Booking Details">
                      <BookedDetails
                        resortImage={resortimg2}
                        resortName={booking.resort_name}
                        resortLoc={booking.address}
                        resortRating={booking.rating}
                        checkinDate={new Date(booking.check_in)}
                        checkoutDate={new Date(booking.check_out)}
                        guestNum={booking.rooms_count * 2}
                        roomsNum={booking.rooms_count}
                        type="past"
                        amount={booking.paid_amount}
                      />
                    </AccordionComponent>
                  );
                })
              ) : (
                <Result
                icon={<MehTwoTone twoToneColor="#52c41a"/>}
                title="No Past Bookings were found!!"
                extra={<Link to="/">Return Home</Link>}
              />
              )}
              
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}