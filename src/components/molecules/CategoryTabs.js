import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function CategoryTabs({ tabsData, onChange }) {
  return (
    <Tabs defaultActiveKey="0" onChange={onChange}>
      {tabsData.length &&
        tabsData.map((item, index) => {
          return (
            <TabPane
              style={{ marginRight: "15px" }}
              tab={item}
              key={index}
            ></TabPane>
          );
        })}
    </Tabs>
  );
}

export default CategoryTabs;
