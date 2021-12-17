import styles from "./ImageComponent.module.css";

import { Image } from "antd";

import { getRandomImage } from "../../../../utils/utils";

const ImageComponents = (props) => {
  return (
    <Image
      width="100%"
      height={200}
      src={getRandomImage()}
      alt={"Image is loading"}
      style={{ borderRadius: "5px" }}
    />
  );
};

export default ImageComponents;
