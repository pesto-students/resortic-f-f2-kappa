import React, { useEffect, useState } from "react";
import { Menu, Modal, Dropdown, Collapse } from "antd";
import classes from "./Header.module.css";
import logo from "../../../assets/resortic-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginModal1 from "../../../modules/Login-Modal/LoginModal-1";
import LoginModal2 from "../../../modules/Login-Modal/LoginModal-2";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import loginUserIC from "../../../assets/man.png";
import firebase from "../../../config/firebase";
import axios from "../../../axios";
import * as APIS from "../../../constant/Apis";

function HeaderPage() {
  let navigate = useNavigate();
  const [isMobileMenuToggle, setMobileMenuToggle] = useState(false);
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);

  const logoutUser = () => {
    const data = JSON.parse(localStorage.getItem("resortic_localstorage"));
    console.log("data", data);
    axios
      .post(APIS.logoutApi, { usertableId: data.userId })
      .then((response) => {
        console.log("Logged out", response);
        setLoggedIn(false);
        localStorage.clear();
        setMobileMenuToggle(!isMobileMenuToggle);
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  const manageBookingHandler = () => {
    const data = JSON.parse(localStorage.getItem("resortic_localstorage"));
    setMobileMenuToggle(!isMobileMenuToggle);
    navigate(`/booking-history?userId=${data.userId}`);
  };

  const profileMenu = (
    <Menu>
      {/* <Link to="booking-history"> */}
      <Menu.Item key="0" onClick={manageBookingHandler}>
        <a>Manage Bookings</a>
      </Menu.Item>
      {/* </Link> */}
      <Menu.Divider />
      <Menu.Item key="3" onClick={logoutUser}>
        Logout
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    if (localData != null) {
      if (localData.mobile && localData.userId) {
        setLoggedIn(true);
      }
    }
  }, []);

  const setIsModalVisible = useSelector(
    (state) => state.loginModalReducer.toggleModal
  );
  const tab = useSelector((state) => state.loginModalReducer);

  const showModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    dispatch({ type: "TOGGLE_MODAL" });
    dispatch({ type: "CHANGE_TAB", tab: "tab_1" });
  };
  return (
    <div className={classes.Header}>
      <div>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div className={classes.desktopView}>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Link to="/">
            <Menu.Item key="1" className={classes.menu}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item className={classes.menu} key="2">
              About
            </Menu.Item>
          </Link>
          {!isLoggedIn && (
            <Link to="/">
              <Menu.Item className={classes.menu} onClick={showModal} key="3">
                Login / Sign Up
              </Menu.Item>
            </Link>
          )}
          {isLoggedIn && (
            <Menu.Item className={classes.menu} key="3">
              {/* <img src={loginUserIC} style={{ height: "40px" }} /> */}
              <Dropdown
                overlay={profileMenu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={loginUserIC} style={{ height: "40px" }} />
                </a>
              </Dropdown>
            </Menu.Item>
          )}
        </Menu>
      </div>
      <div className={classes.mobileView}>
        {!isMobileMenuToggle ? (
          <MenuOutlined
            style={{ color: "white", fontSize: "1.5rem" }}
            onClick={() => setMobileMenuToggle(!isMobileMenuToggle)}
          />
        ) : (
          <CloseCircleOutlined
            style={{ color: "white", fontSize: "1.5rem" }}
            onClick={() => setMobileMenuToggle(!isMobileMenuToggle)}
          />
        )}
        {isMobileMenuToggle && (
          <div
            className={`${classes.menuContainer} ${
              isMobileMenuToggle ? "widthFull" : "width0"
            }`}
          >
            <ul>
              <Link
                to="/"
                onClick={() => setMobileMenuToggle(!isMobileMenuToggle)}
              >
                <li>Home</li>
              </Link>
              <li>About</li>
              {!isLoggedIn && <li onClick={showModal}>Login / Sign Up</li>}
              {isLoggedIn && (
                <>
                  <li onClick={manageBookingHandler}>Manage Booking</li>
                  <li onClick={logoutUser}>Logout</li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
      <Modal
        title="Signup/Login"
        visible={setIsModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <div id="sign-in-button"></div>
        {tab.currTab === "tab_1" ? (
          <LoginModal1 />
        ) : (
          <LoginModal2
            mdalVisiblity={handleCancel}
            logInHandler={setLoggedIn}
            setUserId={setUserId}
          />
        )}
      </Modal>
    </div>
  );
}

export default HeaderPage;