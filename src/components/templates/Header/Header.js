import React, { useEffect, useState } from "react";
import { Menu, Modal, Dropdown } from "antd";
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
import { getGuestToken } from "../Homepage/Homepage";

function HeaderPage() {
  let navigate = useNavigate();
  const [isMobileMenuToggle, setMobileMenuToggle] = useState(false);
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);

  const logoutUser = () => {
    const data = JSON.parse(localStorage.getItem("resortic_localstorage"));
    console.log("data", data);
    setLoggedIn(false);
    localStorage.clear();
    setMobileMenuToggle(!isMobileMenuToggle);
    getGuestToken();
    // axios
    //   .post(APIS.logoutApi, { usertableId: data.userId })
    //   .then((response) => {
    //     console.log("Logged out", response);
    //     setLoggedIn(false);
    //     localStorage.clear();
    //     setMobileMenuToggle(!isMobileMenuToggle);
    //     getGuestToken();
    //   })
    //   .catch((error) => {
    //     console.log("logout error", error);
    //   });
  };

  const manageBookingHandler = () => {
    const data = JSON.parse(localStorage.getItem("resortic_localstorage"));
    setMobileMenuToggle(!isMobileMenuToggle);
    navigate(`/booking-history?userId=${data.userId}`);
  };

  const manageProfileHandler = () => {
    const data = JSON.parse(localStorage.getItem("resortic_localstorage"));
    setMobileMenuToggle(!isMobileMenuToggle);
    navigate(`/user-profile/${data.userId}`);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="0" onClick={manageBookingHandler}>
        <span>Manage Bookings</span>
      </Menu.Item>
      <Menu.Item key="1" onClick={manageProfileHandler}>
        <span>Manage Profile</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={logoutUser}>
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
  console.log("isMObileToggle", isMobileMenuToggle);
  return (
    <div className={classes.Header}>
      <div>
        <Link to="/">
          {/* <img className={classes.logo} src={logo} alt="logo" /> */}
          <h1
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: "2rem",
              margin: "0 ",
            }}
          >
            RESORTIC
          </h1>
        </Link>
      </div>
      <div className={classes.desktopView}>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Link to="/">
            <Menu.Item key="1" className={classes.menu}>
              Home
            </Menu.Item>
          </Link>
          <Link to="about">
            <Menu.Item className={classes.menu} key="2">
              About
            </Menu.Item>
          </Link>
          {/* <Link to="admin">
            <Menu.Item className={classes.menu} key="4">
              Admin
            </Menu.Item>
          </Link> */}
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
                  href="#top"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src={loginUserIC}
                    alt="loginpic"
                    style={{ height: "40px" }}
                  />
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
              <Link to="about">
                <li>About</li>
              </Link>
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
