import styles from "./ResortList.module.css";

import { Row, Col, Card } from "antd";

import ImageComponents from "./ImageComponent/ImageComponent";
import BodyComponent from "./BodyComponent/BodyComponent";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getResortList } from "../../../constant/Apis";

const ResortListPage = () => {
  const [resortData, setResortData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchPrama, setSearchPrama] = useSearchParams();
  const city = searchPrama.get("city");
  const hquery = searchPrama.get("hquery");
  console.log("city: ", city, "hquery: ", hquery);

  /**
   *
   * Have to edit this
   *
   */

  useEffect(() => {
    if (hquery) {
      console.log(true);
    } else {
      console.log(false);
    }
    axios
      .get(`${getResortList}?city=${city}`)
      .then((response) => {
        setResortData(
          response.data.value
            .map((resort) => {
              return {
                ...resort,
                rating: (
                  resort.reviewtables.reduce(
                    (sum, val) => sum + val.rating,
                    0
                  ) / resort.reviewtables.length
                ).toFixed(1),
              };
            })
            .sort((a, b) => b.rating - a.rating)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickCard = (e) => {
    navigate(`/resort?resortID=${e}`);
  };

  return (
    <section className={styles.resortList}>
      {resortData.map((resort, val) => {
        return (
          <Card key={resort.id} onClick={() => onClickCard(resort.id)}>
            <Row>
              <Col xs={24} md={7}>
                <ImageComponents />
              </Col>
              <Col style={{ height: "200px" }} xs={24} md={17}>
                <BodyComponent ResortData={resort} />
              </Col>
            </Row>
          </Card>
        );
      })}
    </section>
  );
};

export default ResortListPage;
