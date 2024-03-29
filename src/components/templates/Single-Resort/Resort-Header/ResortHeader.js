import styles from "./ResortHeader.module.css";

import { Col, Typography, Row, Rate } from "antd";

const { Title } = Typography;
const ResortHeader = (props) => {
  return (
    <section className={styles.section_2}>
      <Row>
        <Col xs={24}>
          <section>
            <div>
              <Title style={{ margin: 0 }}>{props.title}</Title>
            </div>
          </section>
        </Col>
        <Col xs={24} md={8} style={{ marginBottom: "5px" }}>
          <Rate
            className={styles.rate}
            disabled
            allowHalf
            defaultValue={isNaN(props.rating) ? 1 : props.rating}
          />
          {isNaN(props.rating) ? 1 : props.rating}
        </Col>
      </Row>
    </section>
  );
};

export default ResortHeader;
