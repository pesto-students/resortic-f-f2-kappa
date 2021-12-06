import styles from "./RoomsLaptop.module.css";

import { Typography, List, Row, Col, Image, Button } from "antd";
import Image7 from "../../../../../assets/image7.jpg";

import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const RoomsLaptop = () => {
  return (
    <section
      className={styles.section_rooms}
      style={{ marginBottom: "20px" }}
      id="rooms"
    >
      <Row className={styles.rooms__head}>
        <Col span={8} className={styles.rooms__head_item}>
          <Title style={{ textAlign: "center" }} level={4}>
            Room Type
          </Title>
        </Col>
        <Col span={8} className={styles.rooms__head_item}>
          <Title style={{ textAlign: "center" }} level={4}>
            Room Options
          </Title>
        </Col>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={4}>
            Price
          </Title>
        </Col>
      </Row>
      <Row className={styles.rooms__body}>
        <Col span={8} className={styles.rooms__body_item}>
          <div className={styles.rooms__type}>
            <div className={styles.roomtype_heading}>Duplex Rooms</div>
            <div>
              <Image src={Image7} className={styles.roomtype_image} />
            </div>
            <div className={styles.roomtype_features}>
              <div>
                <Text strong>Area: </Text>
                <Text>256 sq. ft.</Text>
              </div>
              <div>
                <Text strong>Bed: </Text>
                <Text>Double Bed sized bed</Text>
              </div>
              <div>
                <Text strong>Accomodateion: </Text>
                <Text>Accommodates 2 Adults</Text>
              </div>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <Row>
            <Col span={24} className={styles.rooms__body_item}>
              <Row>
                <Col span={12} className={styles.room__type_option}>
                  <List
                    size="small"
                    header={
                      <div>
                        <strong>Room Only</strong>
                      </div>
                    }
                  >
                    <List.Item>
                      Free Cancellation Before 14 Dec-2021 23:59
                    </List.Item>
                    <List.Item>Zero Payment On Credit Cards</List.Item>
                    <List.Item>Free Breakfast with Lunch And Dinner</List.Item>
                    <List.Item>High Speed Internet Access</List.Item>
                  </List>
                </Col>
                <Col span={12}>
                  <div className={styles.room__type_price}>
                    <Row>
                      <Col span={14}>
                        <div className={styles.room__type_price_details}>
                          <Text>Price of 1 Room Per Night</Text>
                          <Title
                            style={{ marginBottom: 0, marginTop: 0 }}
                            level={3}
                          >
                            &#8377;1288/-
                          </Title>
                          <Text style={{ fontSize: "10px" }}>
                            +&#8377;+650/- taxes and fees
                          </Text>
                        </div>
                      </Col>
                      <Col span={10}>
                        <Link
                          to={{
                            pathname: "booking",
                          }}
                        >
                          <div className={styles.room__type_price_button}>
                            <Button>Select Room</Button>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col
                  span={12}
                  className={`${styles.rooms_type_border} ${styles.room__type_option}`}
                >
                  <List
                    style={{ textDecoration: true }}
                    size="small"
                    header={
                      <div>
                        <strong>Room + Lunch and Dinner</strong>
                      </div>
                    }
                  >
                    <List.Item>
                      Free Cancellation Before 14 Dec-2021 23:59
                    </List.Item>
                    <List.Item>Zero Payment On Credit Cards</List.Item>
                    <List.Item>Free Breakfast with Lunch And Dinner</List.Item>
                    <List.Item>High Speed Internet Access</List.Item>
                  </List>
                </Col>
                <Col span={12} className={styles.rooms_type_border}>
                  <div className={styles.room__type_price}>
                    <Row>
                      <Col span={14}>
                        <div className={styles.room__type_price_details}>
                          <Text>Price of 1 Room Per Night</Text>
                          <Title
                            style={{ marginBottom: 0, marginTop: 0 }}
                            level={3}
                          >
                            &#8377;2288/-
                          </Title>
                          <Text style={{ fontSize: "10px" }}>
                            +&#8377;+650/- taxes and fees
                          </Text>
                        </div>
                      </Col>
                      <Col span={10}>
                        <Link
                          to={{
                            pathname: "booking",
                          }}
                        >
                          <div className={styles.room__type_price_button}>
                            <Button>Select Room</Button>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default RoomsLaptop;
