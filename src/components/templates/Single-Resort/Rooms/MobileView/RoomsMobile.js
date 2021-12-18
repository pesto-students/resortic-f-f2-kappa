import styles from "./RoomsMobile.module.css";

import { Typography, Card, Row, Col, Tag } from "antd";
import { CustomButton } from "../../../../atoms/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { getRoomImage } from "../../../../../utils/utils";

const { Title, Text } = Typography;

const RoomMobile = (props) => {
  return (
    <section className={styles.roomMobile}>
      <div className={styles.roomMobile_header}>
        <Title level={4}>Select Rooms</Title>
      </div>
      <div>
        {props.rooms.map((room, key) => {
          return (
            <Card
              style={{ marginBottom: "20px" }}
              title={
                <Row>
                  <Col span={24}>{room.room_name}</Col>
                  <Col span={24}>
                    <Text type="secondary" style={{ fontSize: "12px" }}>
                      Accommodates {room.max_occupancy} Adults
                    </Text>
                  </Col>
                </Row>
              }
              cover={<img src={getRoomImage()} height="200px" alt="loading" />}
              className={styles.roomTypeCard}
              bodyStyle={{ padding: "5px" }}
            >
              <Row style={{ marginBottom: "5px" }}>
                <Col span={8}>
                  <Text code>{room.room_area} sq. ft.</Text>
                </Col>
                <Col span={16}>
                  <Text code>Double Bed sized bed</Text>
                </Col>
              </Row>
              <Card title="Room Only">
                <Row>
                  <Col span={24}>
                    <ul>
                      {room.extra_content.split(",").map((el, key) => {
                        return <li>{el}</li>;
                      })}
                    </ul>
                  </Col>
                  <Col span={24}>
                    <div style={{ textAlign: "center", margin: "1rem" }}>
                      <Text>
                        <span style={{ fontWeight: "bold" }}>
                          &#8377; {room.room_price}/-
                        </span>{" "}
                        per night{" "}
                        <span style={{ color: "gray", fontSize: "13px" }}>
                          <Tag color="green">
                            +&#8377; {(18 * room.room_price) / 100} taxes & fees
                          </Tag>
                        </span>
                      </Text>
                    </div>
                  </Col>
                  <Col span={24}>
                    <Link
                      to={{
                        pathname: `booking?resortID=${props.resortID}&roomID=${room.id}&searchQuery=${props.searchQuery}`,
                      }}
                    >
                      <div style={{ textAlign: "right" }}>
                        <CustomButton style={{ width: "100%" }}>
                          Select
                        </CustomButton>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Card>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default RoomMobile;
