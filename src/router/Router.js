import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderPage from "../components/templates/Header/Header";
import Homepage from "../components/templates/Homepage/Homepage";
import SingleResort from "../components/templates/Single-Resort/singleResortPage";
import FooterPage from "../components/templates/Footer/Footer";
import ResortList from "../components/templates/Resort-List/ResortList";
import BookingSummary from "../components/templates/BookingSummary";
import ManageBooking from "../components/templates/ManageBooking";
import NotFoundPage from "../components/templates/Error";
import { Layout } from "antd";
import Profile from "../components/templates/Profile/Profile";
import Admin from "../components/templates/Admin/Admin";
import About from "../components/templates/About/About";
import Contact from "../components/templates/Contact/Contact";
import ReactGA from "react-ga";
const { Header, Content, Footer } = Layout;
function Router() {

  let location = useLocation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[location]);

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
            <Route path="resortList" element={<ResortList />} />
          <Route path="resort/booking" element={<BookingSummary />} />
          <Route path="booking-history" element={<ManageBooking />} />
          <Route path="user-profile/:id" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
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
