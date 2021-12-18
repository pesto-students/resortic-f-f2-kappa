import { Tabs, Collapse } from "antd";
const TabComponent = (props) => {
  const { tabType } = props.tabProperty;
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  return (
    <Tabs defaultActiveKey="0">
      {props.children.panels.map((panel, key) => {
        return tabType === "normal" ? (
          <TabPane
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            tab={panel}
            key={key + 1}
          >
            {panel}
          </TabPane>
        ) : (
          <TabPane
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            tab={panel}
            key={key + 1}
          >
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="This is panel header 1" key="1">
                <p>
                  A dog is a type of domesticated animal. Known for its loyalty
                  and faithfulness, it can be found as a welcome guest in many
                  households across the world.
                </p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>
                  A dog is a type of domesticated animal. Known for its loyalty
                  and faithfulness, it can be found as a welcome guest in many
                  households across the world.
                </p>
              </Panel>
            </Collapse>
          </TabPane>
        );
      })}
    </Tabs>
  );
};
export default TabComponent;
