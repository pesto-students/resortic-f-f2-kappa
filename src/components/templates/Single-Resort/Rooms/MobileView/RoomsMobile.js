import styles from "./RoomsMobile.module.css";

import { Typography, Card, Row, Col } from "antd";
import { CustomButton } from "../../../../atoms/CustomButton/CustomButton";

const { Title, Text } = Typography;

const RoomMobile = (props) => {
  console.log("Mobile view", props.rooms);
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
              cover={<img src="./images/image7.jpg" alt="loading" />}
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
                    <div style={{ textAlign: "center" }}>
                      <Text>
                        <span style={{ fontWeight: "bold" }}>
                          &#8377; {room.room_price}/-
                        </span>{" "}
                        per night{" "}
                        <span style={{ color: "gray", fontSize: "13px" }}>
                          +&#8377; {(18 * room.room_price) / 100} taxes & fees
                        </span>
                      </Text>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div style={{ textAlign: "right" }}>
                      <CustomButton style={{ width: "100%" }}>
                        Select
                      </CustomButton>
                    </div>
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
