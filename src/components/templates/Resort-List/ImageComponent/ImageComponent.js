import styles from "./ImageComponent.module.css";

import { Carousel, Image } from "antd";
import Image1 from "../../../../assets/image1.jpg";
import Image2 from "../../../../assets/image2.jpg";
import Image3 from "../../../../assets/image3.jpg";
import Image4 from "../../../../assets/image4.jpg";
import Image5 from "../../../../assets/image5.jpg";

const ImageComponents = (props) => {
  const data = {
    images: [Image1, Image2, Image3, Image4, Image5],
  };
  return (
    <Carousel autoplay>
      {data.images.map((image, key) => {
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
