import React, { useState, useEffect } from "react";
import { CustomInput } from "../../atoms/CustomInput/CustomInput";
import { CustomButton } from "../../atoms/CustomButton/CustomButton";
import CustomDatepicker from "../../atoms/CustomDatepicker/CustomDatepicker";
import { Menu, Dropdown, Button, Space } from "antd";
import { debounce } from "../../../utils/utils";
import {
  TeamOutlined,
  EnvironmentOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import classes from "./SearchBar.module.css";
import moment from "moment";
import Counter from "../../atoms/Counter/Counter";

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString, "here");
}

function locationHandler() {
  console.log("clicked afer 1 wsec");
}

const SearchButton = {
  position: "relative",
  right: "-5%",
  borderRadius: "40px",
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center",
  height: "54px",
  padding: "0 30px",
  width: "60%",
};

const mobSearchButton = {
  position: "absolute",
  fontWeight: "bold",
  textAlign: "center",
  height: "54px",
  padding: "0px 30px",
  width: "100%",
  background: "rgb(15, 205, 34)",
  color: "rgb(255, 255, 255)",
  bottom: "-53px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  right: 0,
};

const dateFormat = "YYYY-MM-DD";
const defaultCity = "Pune";
const minRoom = 1;
const maxRoom = 5;
const minAdult = 1;
const maxAdult = 3;
const minChild = 0;
const maxChild = 5;

function SearchBar() {
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [child, setchild] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visibleMob, setVisibleMob] = useState(false);
  let [roomsStr, setRoomsStr] = useState("");

  useEffect(() => {
    roomsStr = room + " Room," + adult + " Adult";
    roomsStr += child ? "&" + child + " Child" : "";
    setRoomsStr(roomsStr);
    console.log("Room type", roomsStr);
    return () => {};
  }, [room, adult, child]);

  const menu = (
    <Menu className={classes.menu}>
      <Menu.Item key="1">
        <div>
          <div className={classes.type}>
            <h3 style={{ flex: ".5" }}>Number of Rooms</h3>

            <Counter
              count={room}
              min={minRoom}
              max={maxRoom}
              onIncrease={() => {
                setRoom(room + 1);
              }}
              onDecrease={() => {
                setRoom(room - 1);
              }}
              style={{ flex: ".2" }}
            />
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div>
          <div className={classes.type}>
            <div style={{ flex: ".5" }}>
              <h3>Number of Adults</h3>
              <span className={classes.note}>Age 13 year and above</span>
            </div>
            <Counter
              count={adult}
              min={minAdult}
              max={maxAdult}
              onIncrease={() => {
                setAdult(adult + 1);
              }}
              onDecrease={() => {
                setAdult(adult - 1);
              }}
              style={{ flex: ".2" }}
            />
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div>
          <div className={classes.type}>
            <div style={{ flex: ".5" }}>
              <h3>Number of Children</h3>
              <span className={classes.note}>Age 12 year and below</span>
            </div>
            <Counter
              count={child}
              min={minChild}
              max={maxChild}
              onIncrease={() => {
                setchild(child + 1);
              }}
              onDecrease={() => {
                setchild(child - 1);
              }}
              style={{ flex: ".2" }}
            />
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className={`${classes.searchBar} ${classes.DesktopSearch}`}>
        <CustomInput
          placeholder="Location"
          bordered={false}
          icon={<EnvironmentOutlined />}
          onChange={() => {
            debounce(locationHandler, 1000);
          }}
          defaultValue={defaultCity}
        ></CustomInput>
        <CustomDatepicker
          onChange={onChange}
          placeholder={"Check In"}
          bordered={false}
          defaultValue={moment(
            new Date().toISOString().slice(0, 10),
            dateFormat
          )}
          format={dateFormat}
        ></CustomDatepicker>

        <CustomDatepicker
          onChange={onChange}
          placeholder={"Check Out"}
          bordered={false}
          defaultValue={moment(
            new Date().toISOString().slice(0, 10),
            dateFormat
          )}
          format={dateFormat}
        ></CustomDatepicker>
        <Space wrap>
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            onVisibleChange={() => {
              setVisible(!visible);
            }}
            visible={visible}
            placement="bottomCenter"
          >
            {/* color: "#8080808c" */}
            <Button>
              <span style={{ marginRight: "50px" }}>{roomsStr}</span>{" "}
              <TeamOutlined style={{ color: "#0fcd22" }} />
            </Button>
          </Dropdown>
        </Space>
        <CustomButton
          style={SearchButton}
          onClick={handleChange}
          icon={<SearchOutlined />}
        >
          Search
        </CustomButton>
      </div>
      <div className={`${classes.searchBar} ${classes.MobileSearch}`}>
        <CustomInput
          placeholder="Location"
          bordered={false}
          defaultValue={defaultCity}
          icon={<EnvironmentOutlined />}
          onChange={() => {
            debounce(locationHandler, 1000);
          }}
        >
          {/* <Autocomplete /> */}
        </CustomInput>
        <CustomDatepicker
          onChange={onChange}
          placeholder={"Check In"}
          bordered={false}
          defaultValue={moment(
            new Date().toISOString().slice(0, 10),
            dateFormat
          )}
          format={dateFormat}
        ></CustomDatepicker>

        <CustomDatepicker
          onChange={onChange}
          placeholder={"Check Out"}
          bordered={false}
          defaultValue={moment(
            new Date().toISOString().slice(0, 10),
            dateFormat
          )}
          format={dateFormat}
        ></CustomDatepicker>
        {/* <div> */}
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          onVisibleChange={() => {
            setVisibleMob(!visibleMob);
          }}
          visible={visibleMob}
          placement="bottomCenter"
        >
          <Button
            style={{ width: "100%", padding: 0, marginBottom: "22px" }}
            size="large"
          >
            <div className={classes.mobDropdown}>
              <span style={{ marginRight: "50px" }}>{roomsStr}</span>
              <TeamOutlined style={{ color: "#0fcd22" }} />
            </div>
          </Button>
        </Dropdown>
        {/* </div> */}
        {/* <div> */}
        <CustomButton
          style={mobSearchButton}
          onClick={handleChange}
          icon={<SearchOutlined />}
        >
          Search
        </CustomButton>
        {/* </div> */}
      </div>
    </>
  );
}

export default SearchBar;
