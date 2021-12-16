import React, { useState } from "react";
import moment from "moment";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Recommendation from "../atoms/Recommendation/Recommendation";
import { imagArr } from "../../utils/utils";
import WithLoading from "../../HOC/WithLoading";
function PopularDestination({ isDestinationLoading }) {
  const [searchParams, setSearchParams] = useState(
    `&searchQuery=${JSON.stringify({
      checkIn: moment().format("YYYY-MM-DD"),
      checkOut: moment().add(1, "days").format("YYYY-MM-DD"),
      room: 1,
      child: 0,
      adult: 1,
    })}`
  );
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={8} lg={10}>
          <Link to={`resortList?city=Maldives${searchParams}`}>
            <Recommendation name={"Maldives"} background={imagArr[0]} />
          </Link>
          <Link to={`resortList?city=Goa${searchParams}`}>
            <Recommendation name={"Goa"} background={imagArr[1]} />
          </Link>
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <Link to={`resortList?city=Carribean${searchParams}`}>
            <Recommendation name={"Carribean"} background={imagArr[6]} />
          </Link>
          <Link to={`resortList?city=Manali${searchParams}`}>
            <Recommendation name={"Manali"} background={imagArr[7]} />
          </Link>
          <Link to={`resortList?city=Thailand${searchParams}`}>
            <Recommendation name={"Thailand"} background={imagArr[8]} />
          </Link>
        </Col>
        <Col xs={24} sm={8} lg={7}>
          <Link to={`resortList?city=Pondichery${searchParams}`}>
            <Recommendation name={"Pondichery"} background={imagArr[13]} />
          </Link>
          <Link to={`resortList?city=Kerala${searchParams}`}>
            <Recommendation name={"Kerala"} background={imagArr[10]} />
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default WithLoading(PopularDestination);
