import { Typography } from "antd";
import styles from "./Address.module.css";

const Address = (props) => {
  return (
    <section className={styles.address}>
      <Typography.Title level={4}>Address</Typography.Title>
      <p>
        <Typography.Text strong>Location : </Typography.Text>
        <Typography.Text>{`${props.address}, ${props.city}, ${props.pin}`}</Typography.Text>
      </p>
      <p>
        <Typography.Text strong>Phone no.: </Typography.Text>
        <Typography.Text>{props.contactNumber}</Typography.Text>
      </p>
      <p>
        <Typography.Text strong>Mail: </Typography.Text>
        <Typography.Text>{props.mail}</Typography.Text>
      </p>
    </section>
  );
};

export default Address;
