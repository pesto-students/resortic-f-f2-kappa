import React from "react";
import classes from "./CustomInput.module.css";
import { Input } from "antd";
export function CustomInput({
  icon,
  placeholder,
  onInputChange,
  style,
  defaultValue,
  value
}) {
  return (
    <Input
      className={classes.CustomInput}
      placeholder={placeholder}
      bordered={false}
      suffix={icon}
      onChange={onInputChange}
      style={style}
      value={value}
      defaultValue={defaultValue}
    />
  );
}
