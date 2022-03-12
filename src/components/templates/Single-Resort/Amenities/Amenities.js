import styles from "./Amenities.module.css";

import { Col, Row, Typography } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

import ModalComponent from "../../../atoms/Modal/ModalComponent";
import { useState } from "react";
import React from "react";

const { Title } = Typography;

const Amenities = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <section className={styles.amenities}>
      <Row>
        <Col span={24}>
          <Title level={4}>Aminities & Services</Title>
        </Col>
        <Col span={24}>
          <div className={styles.service}>
            {props?.majorAmenities.split(",").map((item, key) => {
              return (
                <div key={key}>
                  <RightCircleOutlined
                    style={{ marginRight: "5px", color: "#0FCD22" }}
                  />
                  {item}
                </div>
              );
            })}
            <div onClick={handleModal} className={styles.viewMore}>
              View more...
            </div>
            <ModalComponent
              title="Services and Aminities"
              visible={isModalVisible}
              width={700}
              onCancel={handleModalCancel}
              top={10}
            >
              <ul className={styles.amenities_ul}>
                {props.allAmenities.map((el, key) => {
                  return (
                    <li className={styles.amenities_li} key={key}>
                      <span>{el.amininits_name}</span>
                    </li>
                  );
                })}
              </ul>
            </ModalComponent>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Amenities;
