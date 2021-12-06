import { Typography } from "antd";
import styles from "./Address.module.css";

const Address = () => {
  return (
    <section className={styles.address}>
      <Typography.Title level={4}>Address</Typography.Title>
      <p>
        <Typography.Text strong>Location : </Typography.Text>
        <Typography.Text>
          The Welcome Resort and Spa, SH 10, Debaipali, Odisha 768004
        </Typography.Text>
      </p>
      <p>
        <Typography.Text strong>Phone no.: </Typography.Text>
        <Typography.Text>0663 245</Typography.Text>
      </p>
    </section>
  );
};

export default Address;
