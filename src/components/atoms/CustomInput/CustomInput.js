import React from "react";
import classes from "./CustomInput.module.css";
import { Input } from "antd";
export function CustomInput({
  icon,
  placeholder,
<<<<<<< HEAD
  onInputChange,
=======
  onChange,
>>>>>>> 50ded5626d6cf102d63422dfcb590ec1164ec117
  style,
  defaultValue,
}) {
  return (
    <Input
      className={classes.CustomInput}
      placeholder={placeholder}
      bordered={false}
      suffix={icon}
      onChange={onInputChange}
      style={style}
<<<<<<< HEAD
      value={defaultValue}
=======
      defaultValue={defaultValue}
>>>>>>> 50ded5626d6cf102d63422dfcb590ec1164ec117
    />
  );
}
