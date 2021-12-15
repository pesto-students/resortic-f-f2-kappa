import React from "react";
import { Rate } from "antd";
import styles from "./Rating.module.css";
export default function Rating({ value, cssName }) {
  return (
    <span className={cssName}>
      <Rate disabled defaultValue={value} value={value} />
      <span className={styles.rating_text}>
        {value}
        {/* <sub>{value}</sub> */}
      </span>
    </span>
  );
}
