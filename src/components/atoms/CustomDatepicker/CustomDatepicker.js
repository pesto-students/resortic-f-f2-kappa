import React from "react";
import classes from "./CustomDatepicker.module.css";
import { DatePicker } from "antd";
export function CustomDatepicker({ placeholder, onChange, style }) {
  return (
    <DatePicker
      className={classes.CustomDatepicker}
      onChange={onChange}
      placeholder={placeholder}
      bordered={false}
      style={style}
    />
  );
}

export default CustomDatepicker;
