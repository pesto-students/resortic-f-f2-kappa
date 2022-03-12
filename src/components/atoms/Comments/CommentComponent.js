import { Comment } from "antd";
import avater from "./avater.png";

const CommentComponent = (props) => {
  return (
    <Comment
      author={props.author}
      content={props.content}
      datetime={props.datetime}
      avatar={avater}
    />
  );
};

export default CommentComponent;
