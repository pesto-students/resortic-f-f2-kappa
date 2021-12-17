import styles from "./ImageComponent.module.css";

import { Carousel, Image } from "antd";

import { getRandomImage } from "../../../../utils/utils";

const ImageComponents = (props) => {
  const imageTags = [];
  for (let i = 0; i < 5; i++) {
    imageTags.push(
      <Image
        key={i}
        width="100%"
        height={300}
        src={getRandomImage()}
        alt={"Image is loading"}
      />
    );
  }
  return (
    <Carousel autoplay>
      {imageTags.map((image, key) => {
        return (
          <Image
            key={key}
            width="100%"
            height="200px"
            style={styles.imageStyle}
            src={image}
            alt={"Image is loading"}
          />
        );
      })}
    </Carousel>
  );
};

export default ImageComponents;
