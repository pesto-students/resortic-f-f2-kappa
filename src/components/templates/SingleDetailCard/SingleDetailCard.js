import React from "react";
import Rating from "../../atoms/Rating/Rating";
import styles from "./SingleDetailCard.module.css";
import { Card, Space, Divider } from "antd";
export default function singleDetailCard({
  resortimg,
  location,
  title,
  price,
  ratingValue,
}) {
  return (
    <div className={`${styles.SingleDetailCard} cursor`}>
      <Card
        // hoverable
        style={{ width: 280, margin: "0 18px 0 18px" }}
        cover={
          <img
            alt="sample"
            src={resortimg}
            height="210px"
            className={styles.img}
          />
        }
      >
        <Space direction="vertical" size="1">
          <h4 className={styles.location}>{location}</h4>
          <h4>{title}</h4>
          <Space
            split={<Divider type="vertical" />}
            size="0"
            direction="horizontal"
          >
            <div className={styles.price_container}>
              <span style={{ marginRight: "15px" }}>
                ${price}&nbsp;per Night
              </span>
              <span>
                <Rating value={ratingValue} />
              </span>
            </div>
          </Space>
        </Space>
      </Card>
    </div>
  );
}
