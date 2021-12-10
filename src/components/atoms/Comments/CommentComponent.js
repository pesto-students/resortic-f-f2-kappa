import { Comment } from "antd";

const CommentComponent = (props) => {
  return (
    <Comment
      author={props.author}
      content={props.content}
      datetime={props.datetime}
    />
  );
};

export default CommentComponent;
