import styles from "./ResortList.module.css";

import { Row, Col, Card, Skeleton } from "antd";

import ImageComponents from "./ImageComponent/ImageComponent";
import BodyComponent from "./BodyComponent/BodyComponent";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import { Link, useSearchParams } from "react-router-dom";
import { getResortList } from "../../../constant/Apis";

const ResortListPage = () => {
  const [resortData, setResortData] = useState([]);
  const [searchPrama] = useSearchParams();
  const [isData, setIsData] = useState(false);
  const city = searchPrama.get("city");
  const squery = searchPrama.get("searchQuery");
  console.log("city: ", city, "searchquery: ", JSON.parse(squery));

  /**
   *
   * Have to edit this
   *
   */

  useEffect(() => {
    axios
      .get(`${getResortList}?city=${city}&searchQuery=${squery}`)
      .then((response) => {
        setIsData(true);
        setResortData(
          response.data.value
            .map((resort) => {
              return {
                ...resort,
                rating: (
                  resort?.reviewtables?.reduce(
                    (sum, val) => sum + val.rating,
                    0
                  ) / resort?.reviewtables?.length
                ).toFixed(1),
              };
            })
            .sort((a, b) => b.rating - a.rating)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <section className={styles.resortList}>
      {isData ? (
        resortData.length > 0 ? (
          resortData.map((resort, val) => {
            return (
              <Link
                to={{
                  pathname: `/resort?resortID=${resort.id}&searchQuery=${squery}`,
                }}
              >
                <Card key={resort.id}>
                  <Row>
                    <Col xs={24} md={7}>
                      <ImageComponents />
                    </Col>
                    <Col style={{ height: "200px" }} xs={24} md={17}>
                      <BodyComponent ResortData={resort} />
                    </Col>
                  </Row>
                </Card>
              </Link>
            );
          })
        ) : (
          `No resort found on ${city}`
        )
      ) : (
        <Skeleton active />
      )}
    </section>
  );
};

export default ResortListPage;
