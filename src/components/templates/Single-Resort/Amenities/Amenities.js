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
    console.log("Clicked event trigger.");
    setIsModalVisible(true);
    console.log(isModalVisible);
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
            {props.majorAmenities.map((item, key) => {
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
              {Object.entries(props.allAmenities).map((value, key) => {
                return (
                  <React.Fragment key={key}>
                    <p style={{ fontWeight: "bold" }}>{value[0]}</p>
                    <ul className={styles.amenities_ul}>
                      {value[1].map((el, key) => {
                        return (
                          <li className={styles.amenities_li} key={key}>
                            {/* <span>ICON</span> */}
                            <span>{el}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </React.Fragment>
                );
              })}
            </ModalComponent>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Amenities;
