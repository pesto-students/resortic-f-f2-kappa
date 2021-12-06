import styles from "./ResortList.module.css";

import { Row, Col, Card } from "antd";

import ImageComponents from "./ImageComponent/ImageComponent";
import BodyComponent from "./BodyComponent/BodyComponent";

const ResortListPage = () => {
  return (
    <section className={styles.resortList}>
      <Card>
        <Row>
          <Col xs={24} md={7}>
            <ImageComponents />
          </Col>
          <Col style={{ height: "200px" }} xs={24} md={17}>
            <BodyComponent />
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col xs={24} md={7}>
            <ImageComponents />
          </Col>
          <Col style={{ height: "200px" }} xs={24} md={17}>
            <BodyComponent />
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default ResortListPage;
