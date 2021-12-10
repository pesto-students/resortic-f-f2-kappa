import styles from "./BodyComponent.module.css";

import { Col, Rate, Row, Typography } from "antd";
import Icon from "@ant-design/icons";

const { Text, Title } = Typography;

const BodyComponent = () => {
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

  return (
    <Row style={{ paddingLeft: "24px" }}>
      <Col xs={24}>
        <Row>
          <Col xs={24} md={16}>
            <Title style={{ marginBottom: 0 }} level={3}>
              Resort Name
            </Title>
          </Col>
          <Col className={styles.rating} xs={24} md={8}>
            <Rate disabled defaultValue={2} />
          </Col>
          <Col xd={24} md={3}>
            <Text>
              <Icon component={mapMarker} /> City
            </Text>
          </Col>
        </Row>
      </Col>
      <Col className={styles.aminities} xs={12} md={16}>
        <Row className={styles.aminities_item}>
          <Col xs={24} md={8}>
            <div className={styles.aminities_box}>Aminities 1</div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.aminities_box}>Aminities 2</div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.aminities_box}>Aminities 3</div>
          </Col>
        </Row>
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
            2000/-
          </Text>
        </div>
      </Col>
    </Row>
  );
};

export default BodyComponent;
