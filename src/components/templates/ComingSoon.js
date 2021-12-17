import React from "react";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function ComingSoon() {
  return (
    <div style={{ margin: "8rem 0" }}>
      <Result
        icon={<SmileOutlined />}
        title="Coming Soon !!"
        extra={
          <Button type="primary">
            <Link to="/">Go To Home</Link>
          </Button>
        }
      />
      ,
    </div>
  );
}

export default ComingSoon;
