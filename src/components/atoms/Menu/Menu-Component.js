import { Menu } from "antd";
import {  useState } from "react";
import {
  Link,
} from "react-scroll";

const MenuComponent = (props) => {
  const menuItem = {
    margin: "auto",
  };
  const [activeItem, setActiveItem] = useState(props.children[0]);
  const handleActiveTab = (e) => {
    setActiveItem(e.key);
  };

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[activeItem]}
      onClick={handleActiveTab}
    >
      {props.children.map((item, key) => {
        return (
          <Menu.Item style={menuItem} key={key}>
            <Link
              smooth={true}
              duration={500}
              to={item.toLowerCase().replaceAll(" ", "")}
              spy={true}
            >
              {item}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MenuComponent;

// const { Title } = Typography;
// // const { items, mode, coverWholeWidth, navTitle } = props.menuProperty;
// // console.log(navTitle);
// // CSS
// const menuItem = {
//   margin: "auto",
// };
// const leftMargin = {
//   marginLeft: "auto",
// };
// const [activeItem, setActiveItem] = useState(items[0]);
// const handleActiveTab = (e) => {
//   setActiveItem(e.key);
// };
// return (
//   <Menu mode="horizontal" selectedKeys={[]} onClick={handleActiveTab}>
//     console.log(props.children)
//     {items.map((item, key) => {
//       return (
//         <Menu.Item
//           key={items[key]}
//           style={coverWholeWidth ? menuItem : { alignSelf: "center" }}
//         >
//           {item}
//         </Menu.Item>
//       );
//     })}
//   </Menu>
// );
