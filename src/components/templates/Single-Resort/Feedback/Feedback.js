import styles from "./Feedback.module.css";

import { Typography } from "antd";

import CommentComponent from "../../../atoms/Comments/CommentComponent";

const { Title } = Typography;

const Feedback = (props) => {
  return (
    <section className={styles.feedback}>
      <Title level={4}>Reviews</Title>
      {props?.feedback.map((value, key) => {
        return (
          <>
            <CommentComponent
              key={key}
              author={
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {value?.usertable?.first_name}
                </span>
              }
              content={<p style={{ textAlign: "justify" }}>{value?.feedback}</p>}
              datetime={value?.createdAt || new Date().toDateString()}
            />
          </>
        );
      })}
    </section>
  );
};

export default Feedback;
