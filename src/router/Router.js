import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderPage from "../components/templates/Header/Header";
import Homepage from "../components/templates/Homepage/Homepage";
import SingleResort from "../components/templates/Single-Resort/singleResortPage";
import FooterPage from "../components/templates/Footer/Footer";
import ResortList from "../components/templates/Resort-List/ResortList";
import BookingSummary from "../components/templates/BookingSummary";
import ManageBooking from "../components/templates/ManageBooking";
import NotFoundPage from "../components/templates/Error";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
function Router() {
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: "0",
          zIndex: 16,
          boxShadow: "0px 2px 10px #958e8ea6",
        }}
      >
        <HeaderPage />
      </Header>
      <Content>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="resort" element={<SingleResort />} />
          <Route path="resortList/:city/:check" element={<ResortList />} />
          <Route path="resort/booking" element={<BookingSummary />} />
          <Route path="booking-history" element={<ManageBooking />} />
          <Route
            path="*"
            element={<NotFoundPage />}
            render={() => "Page Not found"}
          />
        </Routes>
      </Content>
      <Footer>
        <FooterPage />
      </Footer>
    </>
  );
}

export default Router;
