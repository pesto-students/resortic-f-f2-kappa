import styles from "./SingleResortDetails.module.css";

import { List, Card, Carousel, Col, Image, Row, Typography } from "antd";

const { Title } = Typography;

const SingleResortDetail = (props) => {
  console.log(props);
  const { images, majorAmenities, lowestPrice } = props;
  return (
    <section className={styles.section_3}>
      <Row>
        <Col xs={24} sm={12}>
          <Carousel autoplay>
            {images.map((image, key) => {
              return (
                <Image
                  key={key}
                  width="100%"
                  height={300}
                  src={image}
                  alt={"Image is loading"}
                />
              );
            })}
          </Carousel>
        </Col>
        <Col xs={24} sm={12}>
          <div className="site-card-wrapper">
            <Row>
              <Col xs={24} md={12}>
                <Card
                  className={styles.serviceCard}
                  title="Amenities & Services"
                >
                  <List size="small">
                    {majorAmenities.map((item, key) => {
                      return (
                        <List.Item key={item.toLowerCase().replaceAll(" ", "")}>
                          {item}
                        </List.Item>
                      );
                    })}
                  </List>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card className={styles.priceCard}>
                  <p>Price starts at:</p>
                  <Title level={4}>&#8377;{`${lowestPrice}/per room`}</Title>
                  <p>
                    <small>+ &#8377;681 taxes & fees</small>
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
