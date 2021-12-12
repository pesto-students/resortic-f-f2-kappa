import React, { useState } from "react";
import { Menu, Modal } from "antd";
import classes from "./Header.module.css";
import logo from "../../../assets/resortic-logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginModal1 from "../../../modules/Login-Modal/LoginModal-1";
import LoginModal2 from "../../../modules/Login-Modal/LoginModal-2";
import firebase from "../../../config/firebase";
import {
  MenuOutlined,
  CloseCircleOutlined,
  GoogleCircleFilled,
} from "@ant-design/icons";
function HeaderPage() {
  const [isMobileMenuToggle, setMobileMenuToggle] = useState(false);
  const dispatch = useDispatch();
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
          <Link to="/">
            <Menu.Item className={classes.menu} onClick={showModal} key="3">
              Login / Sign Up
            </Menu.Item>
          </Link>
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
          <div className={classes.menuContainer}>
            <ul>
              <Link
                to="/"
                onClick={() => setMobileMenuToggle(!isMobileMenuToggle)}
              >
                <li>Home</li>
              </Link>
              <li>About</li>
              <li>Login / Sign Up</li>
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
          <LoginModal2 mdalVisiblity={handleCancel} />
        )}
      </Modal>
    </div>
  );
}

export default HeaderPage;
