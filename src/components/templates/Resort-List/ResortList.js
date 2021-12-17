import styles from "./ResortList.module.css";

import { Row, Col, Card, Skeleton, Result } from "antd";
import { MehTwoTone } from "@ant-design/icons";

import ImageComponents from "./ImageComponent/ImageComponent";
import BodyComponent from "./BodyComponent/BodyComponent";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import { Link, useSearchParams } from "react-router-dom";
import { getResortList } from "../../../constant/Apis";
import SearchBar from "../../molecules/SearchBar/SearchBar";

const ResortListPage = () => {
  const [resortData, setResortData] = useState([]);
  const [searchPrama] = useSearchParams();
  const [isData, setIsData] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const city = searchPrama.get("city");
  const squery = searchPrama.get("searchQuery");

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
  const borderStyle = {
    background: "white",
    border: "1px solid black",
  };
  return (
    <>
      <section className={styles.resortList}>
        <div style={{ position: "relative" }}>
          <SearchBar
            cityName={city}
            style={{ position: "relative", marginTop: "3rem" }}
          />
        </div>
        {isData ? (
          resortData.length > 0 ? (
            resortData.map((resort, val) => {
              return (
                <Link
                  to={{
                    pathname: `/resort?resortID=${resort.id}&searchQuery=${squery}`,
                  }}
                >
                  <Card
                    key={resort.id}
                    bodyStyle={{ background: "white" }}
                    // bodyStyle={
                    //   isHover
                    //     ? { background: "white", border: "1px solid #0fcd22" }
                    //     : { background: "white" }
                    // }
                    className={styles.resortListCard}
                    // onMouseEnter={() => setIsHover(true)}
                    // onMouseLeave={() => setIsHover(false)}
                  >
                    <Row>
                      <Col xs={24} md={7}>
                        <ImageComponents />
                      </Col>
                      <Col xs={24} md={17}>
                        <BodyComponent ResortData={resort} />
                      </Col>
                    </Row>
                  </Card>
                </Link>
              );
            })
          ) : (
            <Result
              icon={<MehTwoTone twoToneColor="#52c41a" />}
              title="No Resorts found!!"
              subTitle="Let's plan for a new one"
            />
          )
        ) : (
          <Skeleton active />
        )}
      </section>
    </>
  );
};

export default ResortListPage;
