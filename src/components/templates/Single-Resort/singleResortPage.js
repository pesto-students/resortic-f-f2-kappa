import styles from "./singleResortPage.module.css";

import { useEffect, useState } from "react";
import { Col, Layout, Row, Skeleton } from "antd";
import { Element } from "react-scroll";
import { useSearchParams } from "react-router-dom";

import ResortHeader from "./Resort-Header/ResortHeader";
import SingleResortDetail from "./SingleResort-Detail/SingleResortDetails";
import MenuComponent from "../../atoms/Menu/Menu-Component";
import Amenities from "./Amenities/Amenities";
import Overview from "./Overview/Ovewview";
import Location from "./Location/Location";
import Feedback from "./Feedback/Feedback";
import RoomMobile from "./Rooms/MobileView/RoomsMobile";
import RoomsLaptop from "./Rooms/LaptopView/RoomsLaptop";
import Address from "./Address/Address";
import Image1 from "../../../assets/image1.jpg";
import Image2 from "../../../assets/image2.jpg";
import Image3 from "../../../assets/image3.jpg";
import Image4 from "../../../assets/image4.jpg";
import Image5 from "../../../assets/image5.jpg";
import axios from "../../../axios";
import { getSingleResort } from "../../../constant/Apis";

const { Content } = Layout;

const SingleResort = () => {
  const resort1 = {
    images: [Image1, Image2, Image3, Image4, Image5],
    tax: 681,
  };
  const [isMobileView, setIsMobileView] = useState(false);
  const [resort, setResort] = useState();

  const [searchParams] = useSearchParams();
  const resortId = searchParams.get("resortID");
  const squery = searchParams.get("searchQuery");

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };
    window.addEventListener("resize", updateScreenSize);
    return function () {
      window.removeEventListener("scroll", updateScreenSize);
    };
  });

  useEffect(() => {
    axios
      .get(`${getSingleResort}${resortId}`)
      .then((response) => {
        setResort(response.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resortId]);

  return (
    <Layout>
      {/* {if(resort)} */}
      {resort ? (
        <Content className={styles.main}>
          <ResortHeader
            title={resort.resort_name}
            rating={
              resort.reviewtables.reduce((sum, value) => {
                return sum + value.rating;
              }, 0) / resort?.reviewtables.length
            }
          />
          <SingleResortDetail
            images={resort1.images}
            majorAmenities={resort.major_aminities.split(",")}
            lowestPrice={resort.starting_price}
            tax={resort1.tax}
          />
          <section className={styles.section_4}>
            <MenuComponent>
              {["Overview", "Rooms", "Aminities", "Location", "Reviews"]}
            </MenuComponent>
          </section>
          <section className={styles.section_5}>
            <Element name="overview">
              <Overview overview={resort.extra_content} />
            </Element>
            <Element name="rooms">
              {!isMobileView ? (
                <RoomsLaptop
                  rooms={resort.roomtables}
                  className={styles.laptopview}
                  searchQuery={squery}
                  resortID={resortId}
                />
              ) : (
                <RoomMobile
                  rooms={resort.roomtables}
                  className={styles.mobileview}
                  searchQuery={squery}
                  resortID={resortId}
                />
              )}
            </Element>
            <Element name="aminities">
              <Amenities
                allAmenities={resort.amenitiestables}
                majorAmenities={resort.major_aminities}
              />
            </Element>
            <Element name="location">
              <Row>
                <Col sm={17}>
                  <Location lat={resort.latitude} lon={resort.longititude} />
                </Col>
                <Col sm={7}>
                  <Address
                    address={resort.address}
                    city={resort.city}
                    contactNumber={resort.contact_number}
                    pin={resort.pin}
                    mail={resort.resort_email}
                  />
                </Col>
              </Row>
            </Element>
            <Element name="reviews">
              <Feedback feedback={resort.reviewtables} />
            </Element>
          </section>
        </Content>
      ) : (
        <Skeleton active />
      )}
    </Layout>
  );
};

export default SingleResort;
