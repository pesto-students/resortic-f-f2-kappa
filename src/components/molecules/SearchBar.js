import React, { useState } from "react";
import { CustomInput } from "../atoms/CustomInput/CustomInput";
import { CustomButton } from "../atoms/CustomButton/CustomButton";
import CustomDatepicker from "../atoms/CustomDatepicker/CustomDatepicker";
import { Select } from "antd";
import { debounce } from "../../utils/utils";
import axios from "axios";
import {
  TeamOutlined,
  EnvironmentOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

// function locationHandler(e) {
//   console.log("clicked afer 1 wsec");
// }

const roomTypeArr = ["Adult", "Child"];

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

function SearchBar() {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [room, setroom] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cityInputHandle = (e) => {
    setCity(e.target.value);
  };

  const searchHandle = () => {
    navigate(
      `./resortList?city=${city}&searchQuery=${JSON.stringify({
        checkIn: checkIn,
        checkOut: checkOut,
        room: room,
        child: child,
        adult: adult,
      })}`
    );
  };

  function getCheckIn(date, dateString) {
    setCheckIn(dateString);
  }

  function getCheckOut(date, dateString) {
    setCheckOut(dateString);
  }

  return (
    <>
      <CustomInput
        placeholder="Location"
        bordered={false}
        icon={<EnvironmentOutlined />}
        onInputChange={cityInputHandle}
        defaultValue={city}
      >
        {/* <Autocomplete /> */}
      </CustomInput>
      <CustomDatepicker
        onChange={getCheckIn}
        placeholder={"Check In"}
        bordered={false}
      ></CustomDatepicker>

      <CustomDatepicker
        onChange={getCheckOut}
        placeholder={"Check Out"}
        bordered={false}
      ></CustomDatepicker>
      <Select
        style={{ width: "100%" }}
        placeholder="Room Type"
        onChange={handleChange}
        bordered={false}
        suffixIcon={<TeamOutlined style={{ color: "#0fcd22" }} />}
      >
        {roomTypeArr.length &&
          roomTypeArr.map((el, index) => (
            <Option value={index} key={index}>
              {el}
            </Option>
          ))}
      </Select>
      <CustomButton
        style={SearchButton}
        onClick={searchHandle}
        icon={<SearchOutlined />}
      >
        Search
      </CustomButton>
    </>
  );
}

export default SearchBar;
