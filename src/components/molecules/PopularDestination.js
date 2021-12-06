import React from "react";
import { Row, Col } from "antd";
import Recommendation from "../atoms/Recommendation/Recommendation";
import HeroBanner1 from "../../assets/hero-banner1.jpg";
import WithLoading from "../../HOC/WithLoading";
function PopularDestination({ isLoading }) {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={8} lg={10}>
          <Recommendation name={"Maldives"} background={HeroBanner1} />
          <Recommendation name={"Goa"} background={HeroBanner1} />
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <Recommendation name={"Carribean"} background={HeroBanner1} />
          <Recommendation name={"Manali"} background={HeroBanner1} />
          <Recommendation name={"Thailand"} background={HeroBanner1} />
        </Col>
        <Col xs={24} sm={8} lg={7}>
          <Recommendation name={"Pondichery"} background={HeroBanner1} />
          <Recommendation name={"Kerala"} background={HeroBanner1} />
        </Col>
      </Row>
    </>
  );
}

export default WithLoading(PopularDestination);
