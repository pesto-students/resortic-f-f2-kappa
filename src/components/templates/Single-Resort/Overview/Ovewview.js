import styles from "./Overview.module.css";

import { Typography } from "antd";

const { Title } = Typography;
const Overview = (props) => {
  return (
    <section className={styles.overview}>
      <Title level={4}>Overview</Title>
      <div className={styles.overview_content}>
        <p id="overview_text" style={{ textAlign: "justify" }}>
          {props.overview}
        </p>
      </div>
    </section>
  );
};

export default Overview;
