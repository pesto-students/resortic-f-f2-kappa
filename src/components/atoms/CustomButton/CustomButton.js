import React from "react";

import * as colors from "../../../constant/constant";
import { Button } from "antd";
import styling from "./CustomButton.module.css";
export function CustomButton({
  icon,
  text,
  children,
  style,
  htmlType,
  background = colors.green,
  color = colors.white,
  cssClass = [],
  onClick,
}) {
  return (
    <Button
      className={styling.CustomButton}
      htmlType={htmlType}
      style={{ ...style, background: background, color: color }}
      onClick={onClick}
      icon={icon}
    >
      {children}
    </Button>
  );
}
