import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Recommendation from "../atoms/Recommendation/Recommendation";
import HeroBanner1 from "../../assets/hero-banner1.jpg";
import WithLoading from "../../HOC/WithLoading";
function PopularDestination({ isDestinationLoading }) {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={8} lg={10}>
          <Link to={`resortList?city=Maldives`}>
            <Recommendation name={"Maldives"} background={HeroBanner1} />
          </Link>
          <Link to={`resortList?city=Goa`}>
            <Recommendation name={"Goa"} background={HeroBanner1} />
          </Link>
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <Link to={`resortList?city=Carribean`}>
            <Recommendation name={"Carribean"} background={HeroBanner1} />
          </Link>
          <Link to={`resortList?city=Manali`}>
            <Recommendation name={"Manali"} background={HeroBanner1} />
          </Link>
          <Link to={`resortList?city=Thailand`}>
            <Recommendation name={"Thailand"} background={HeroBanner1} />
          </Link>
        </Col>
        <Col xs={24} sm={8} lg={7}>
          <Link to={`resortList?city=Pondichery`}>
            <Recommendation name={"Pondichery"} background={HeroBanner1} />
          </Link>
          <Link to={`resortList?city=Kerala`}>
            <Recommendation name={"Kerala"} background={HeroBanner1} />
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default WithLoading(PopularDestination);
