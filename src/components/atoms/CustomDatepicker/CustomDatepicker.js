import React from "react";
import classes from "./CustomDatepicker.module.css";
import { DatePicker } from "antd";
export function CustomDatepicker({
  placeholder,
  onChange,
  style,
  defaultValue,
  format,
}) {
  return (
    <DatePicker
      className={classes.CustomDatepicker}
      onChange={onChange}
      placeholder={placeholder}
      bordered={false}
      style={style}
      defaultValue={defaultValue}
      format={format}
    />
  );
}

export default CustomDatepicker;
