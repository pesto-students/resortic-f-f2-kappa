import styles from "./RoomsMobile.module.css";

import { Typography, Card, Row, Col } from "antd";

const { Title, Text } = Typography;

const RoomMobile = () => {
  return (
    <section className={styles.roomMobile}>
      <div className={styles.roomMobile_header}>
        <Title level={4}>Select Rooms</Title>
      </div>
      <div>
        <Card
          style={{ marginBottom: "20px" }}
          title={
            <Row>
              <Col span={24}>Dupliex Room</Col>
              <Col span={24}>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Accommodates 2 Adults
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
              <Text code>256 sq. ft.</Text>
            </Col>
            <Col span={16}>
              <Text code>Double Bed sized bed</Text>
            </Col>
          </Row>
          <Card title="Room Only">
            <Row>
              <Col span={24}>
                <ul>
                  <li>Free Cancellation Before 14 Dec-2021 23:59</li>
                  <li>Zero Payment On Credit Cards</li>
                  <li>Free Breakfast with Lunch And Dinner</li>
                  <li>High Speed Internet Access</li>
                </ul>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "center" }}>
                  <Text>
                    <span style={{ fontWeight: "bold" }}>&#8377; 9000/-</span>{" "}
                    per night{" "}
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      +&#8377; 671 taxes & fees
                    </span>
                  </Text>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "right" }}>
                  <button>select</button>
                </div>
              </Col>
            </Row>
          </Card>
          <Card title="Room with Lunch and Dinner">
            <Row>
              <Col span={24}>
                <ul>
                  <li>Free Cancellation Before 14 Dec-2021 23:59</li>
                  <li>Zero Payment On Credit Cards</li>
                  <li>Free Breakfast with Lunch And Dinner</li>
                  <li>High Speed Internet Access</li>
                </ul>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "center" }}>
                  <Text>
                    <span style={{ fontWeight: "bold" }}>&#8377; 9000/-</span>{" "}
                    per night{" "}
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      +&#8377; 671 taxes & fees
                    </span>
                  </Text>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "right" }}>
                  <button>select</button>
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
        <Card
          title={
            <Row>
              <Col span={24}>Dupliex Room</Col>
              <Col span={24}>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Accommodates 2 Adults
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
              <Text code>256 sq. ft.</Text>
            </Col>
            <Col span={16}>
              <Text code>Double Bed sized bed</Text>
            </Col>
          </Row>
          <Card title="Room Only">
            <Row>
              <Col span={24}>
                <ul>
                  <li>Free Cancellation Before 14 Dec-2021 23:59</li>
                  <li>Zero Payment On Credit Cards</li>
                  <li>Free Breakfast with Lunch And Dinner</li>
                  <li>High Speed Internet Access</li>
                </ul>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "center" }}>
                  <Text>
                    <span style={{ fontWeight: "bold" }}>&#8377; 9000/-</span>{" "}
                    per night{" "}
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      +&#8377; 671 taxes & fees
                    </span>
                  </Text>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "right" }}>
                  <button>select</button>
                </div>
              </Col>
            </Row>
          </Card>
          <Card title="Room with Lunch and Dinner">
            <Row>
              <Col span={24}>
                <ul>
                  <li>Free Cancellation Before 14 Dec-2021 23:59</li>
                  <li>Zero Payment On Credit Cards</li>
                  <li>Free Breakfast with Lunch And Dinner</li>
                  <li>High Speed Internet Access</li>
                </ul>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "center" }}>
                  <Text>
                    <span style={{ fontWeight: "bold" }}>&#8377; 9000/-</span>{" "}
                    per night{" "}
                    <span style={{ color: "gray", fontSize: "13px" }}>
                      +&#8377; 671 taxes & fees
                    </span>
                  </Text>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: "right" }}>
                  <button>select</button>
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
      </div>
    </section>
  );
};

export default RoomMobile;
