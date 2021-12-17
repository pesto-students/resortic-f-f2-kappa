import styles from "./SingleResortDetails.module.css";

import { List, Card, Carousel, Col, Image, Row, Typography } from "antd";
import { getRandomImage } from "../../../../utils/utils";

const { Title } = Typography;

const SingleResortDetail = (props) => {
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

  const { majorAmenities, lowestPrice } = props;
  return (
    <section className={styles.section_3}>
      <Row>
        <Col xs={24} sm={12}>
          <Carousel autoplay>
            {imageTags.map((image, key) => {
              return image;
            })}
          </Carousel>
        </Col>
        <Col xs={24} sm={12}>
          <div className="site-card-wrapper">
            <Row>
              <Col xs={24} md={12}>
                <Card
                  className={styles.serviceCard}
                  bodyStyle={{ background: "white" }}
                  style={{ borderRadius: "20px" }}
                  title="Amenities & Services"
                >
                  <List size="small" style={{ background: "white" }}>
                    {majorAmenities.map((item, key) => {
                      return (
                        <List.Item
                          style={{ background: "white" }}
                          key={item.toLowerCase().replaceAll(" ", "")}
                        >
                          {item}
                        </List.Item>
                      );
                    })}
                  </List>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card
                  className={styles.priceCard}
                  bodyStyle={{ background: "white" }}
                  style={{ height: "100%", borderRadius: "20px" }}
                >
                  <p>Price starts at:</p>
                  <Title level={4}>&#8377;{`${lowestPrice}/per room`}</Title>
                  <p>
                    <small>+ &#8377;{lowestPrice * 0.18} taxes & fees</small>
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SingleResortDetail;
