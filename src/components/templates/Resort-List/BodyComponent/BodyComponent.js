import styles from "./BodyComponent.module.css";

import { Col, Rate, Row, Tag, Typography } from "antd";
import Icon from "@ant-design/icons";
import { SafetyCertificateOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const BodyComponent = (props) => {
  const mapMarker = () => {
    return (
      // Credit goes to fontAwesome
      <svg width="2em" height="1em" fill="currentColor" viewBox="0 0 384 514">
        <path
          fill="currentColor"
          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
        />
      </svg>
    );
  };
  const aminitiesData = [];
  for (var i = 0; i < 3; i++) {
    aminitiesData.push(
      <Col key={i + 1} xs={24} md={8}>
        <div className={styles.aminities_box}>
          {props.ResortData?.major_aminities?.split(",")[i]}
        </div>
      </Col>
    );
  }

  return (
    <Row>
      <Col xs={24}>
        <Row>
          <Col xs={24} md={16}>
            <Title style={{ marginBottom: 0 }} level={3}>
              {props.ResortData.resort_name}
            </Title>
          </Col>
          <Col className={styles.rating} xs={24} md={8}>
            <Rate
              disabled
              defaultValue={
                isNaN(props.ResortData.rating) ? 1 : props.ResortData.rating
              }
            />{" "}
            {isNaN(props.ResortData.rating) ? 1 : props.ResortData.rating}
          </Col>
          <Col xd={24} md={3}>
            <Text>
              <Icon component={mapMarker} /> {props.ResortData.city}
            </Text>
          </Col>
        </Row>
      </Col>
      <Col className={styles.aminities} xs={12} md={16}>
        <Row>
          <Tag style={{ padding: "5px", margin: "5px" }} color="green">
            100% Vaccinated Staff
          </Tag>
          <Tag
            icon={<SafetyCertificateOutlined />}
            style={{ padding: "5px", margin: "5px" }}
            color="#6998AB"
          >
            Hygienic and saft stay
          </Tag>
        </Row>
        <Row>
          <Tag style={{ padding: "5px", margin: "5px" }} color="magenta">
            Couple Friendly
          </Tag>
        </Row>

        <Row className={styles.aminities_item}>{aminitiesData}</Row>
      </Col>
      <Col
        style={{
          height: "100px",
          textAlign: "right",
        }}
        xs={12}
        md={8}
      >
        <Title level={4}>Starting at:</Title>
        <div>
          <Text style={{ fontSize: "20px" }} strong>
            {"₹" + Number(props.ResortData?.starting_price)}
          </Text>
        </div>
        <div>
          <Tag style={{ fontSize: "10px" }}>
            + ₹{Math.ceil(props.ResortData?.starting_price * 0.18)} taxes & fees
          </Tag>
        </div>
      </Col>
    </Row>
  );
};

export default BodyComponent;
