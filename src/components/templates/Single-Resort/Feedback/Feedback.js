import styles from "./Feedback.module.css";

import { Typography } from "antd";

import CommentComponent from "../../../atoms/Comments/CommentComponent";

const { Title } = Typography;

const Feedback = (props) => {
  const { feedback } = props;
  return (
    <section className={styles.feedback}>
      <Title level={4}>Reviews</Title>
      {feedback.map((value, key) => {
        return (
          <CommentComponent
            key={key}
            author={
              <span style={{ color: "black", fontWeight: "bold" }}>
                {value.author}
              </span>
            }
            content={<p style={{ textAlign: "justify" }}>{value.content}</p>}
            datetime={new Date().toLocaleDateString()}
          />
        );
      })}
    </section>
  );
};

export default Feedback;
