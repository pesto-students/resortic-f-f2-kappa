import React from "react";
import { CustomInput } from "../atoms/CustomInput/CustomInput";
import { CustomButton } from "../atoms/CustomButton/CustomButton";
import CustomDatepicker from "../atoms/CustomDatepicker/CustomDatepicker";
import { Select } from "antd";
import { debounce } from "../../utils/utils";
import {
  TeamOutlined,
  EnvironmentOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

function locationHandler() {
  console.log("clicked afer 1 wsec");
}

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
  return (
    <>
      <CustomInput
        placeholder="Location"
        bordered={false}
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
      ></CustomDatepicker>

      <CustomDatepicker
        onChange={onChange}
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
        onClick={handleChange}
        icon={<SearchOutlined />}
      >
        Search
      </CustomButton>
    </>
  );
}

export default SearchBar;
