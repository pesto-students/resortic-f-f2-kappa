import React from "react";
import classes from "./CustomInput.module.css";
import { Input } from "antd";
export function CustomInput({ icon, placeholder, onChange, style }) {
  return (
    <Input
      className={classes.CustomInput}
      placeholder={placeholder}
      bordered={false}
      suffix={icon}
      onChange={onChange}
      style={style}
    />
  );
}
