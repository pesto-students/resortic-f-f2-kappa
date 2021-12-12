import styles from "./RoomsLaptop.module.css";

import { Typography, List, Row, Col, Image } from "antd";
import Image7 from "../../../../../assets/image7.jpg";

import { Link } from "react-router-dom";
import { CustomButton } from "../../../../atoms/CustomButton/CustomButton";

const { Title, Text } = Typography;

const RoomsLaptop = (props) => {
  console.log(props);

  // const selectRoomBtn = (id) => {
  //   console.log("Room ID: ", id);
  // };

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
        {props.rooms.map((value, key) => {
          return (
            <>
              <Col
                style={{ borderRight: "solid 1px grey" }}
                span={8}
                className={styles.rooms__body_item}
              >
                <div className={styles.rooms__type}>
                  <div className={styles.roomtype_heading}>
                    {value.room_name}
                  </div>
                  <div>
                    <Image src={Image7} className={styles.roomtype_image} />
                  </div>
                  <div className={styles.roomtype_features}>
                    <div>
                      <Text strong>Area: </Text>
                      <Text>{value.room_area} sq. ft.</Text>
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
                <Row style={{ height: "100%" }}>
                  <Col span={24} className={styles.rooms__body_item}>
                    <Row
                      style={{
                        height: "100%",
                        borderBottom: "solid 1px grey",
                      }}
                    >
                      <Col span={12} className={styles.room__type_option}>
                        <List
                          size="small"
                          header={
                            <div>
                              <strong>Room Only</strong>
                            </div>
                          }
                        >
                          {value.extra_content.split(",").map((value, key) => {
                            return <List.Item key={key + 1}>{value}</List.Item>;
                          })}
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
                                  &#8377;{value.room_price}/-
                                </Title>
                                <Text style={{ fontSize: "10px" }}>
                                  +&#8377;+650/- taxes and fees
                                </Text>
                              </div>
                            </Col>
                            <Col span={10}>
                              <Link
                                to={{
                                  pathname: `booking?resortID=${props.resortID}&roomID=${value.id}&searchQuery=${props.searchQuery}`,
                                }}
                              >
                                <div className={styles.room__type_price_button}>
                                  <CustomButton style={{ width: "100px" }}>
                                    Select
                                  </CustomButton>
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
            </>
          );
        })}
      </Row>
    </section>
  );
};

export default RoomsLaptop;
