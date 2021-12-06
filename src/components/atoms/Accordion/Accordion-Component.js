import { Collapse } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

const AccordionComponent = (props) => {
  const { Panel } = Collapse;
  return (
    <Collapse
      defaultActiveKey={["1"]}
      style={{ backgroundColor: "white", marginBottom: "20px" }}
      expandIcon={({ isActive }) => (
        <UpCircleOutlined
          style={{ fontSize: "30px", color: "#0FCD22" }}
          rotate={isActive ? 180 : 0}
        />
      )}
      expandIconPosition="right"
    >
      <Panel header={<h3>{props.title}</h3>} key="1">
        {props.children}
      </Panel>
    </Collapse>
  );
};

export default AccordionComponent;
