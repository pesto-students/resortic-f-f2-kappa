import styles from "./singleResortPage.module.css";

import { Col, Layout, Row } from "antd";

import { Element } from "react-scroll";

import ResortHeader from "./Resort-Header/ResortHeader";
import SingleResortDetail from "./SingleResort-Detail/SingleResortDetails";
import MenuComponent from "../../atoms/Menu/Menu-Component";
import Amenities from "./Amenities/Amenities";
import Overview from "./Overview/Ovewview";
import Location from "./Location/Location";
import Feedback from "./Feedback/Feedback";
import RoomMobile from "./Rooms/MobileView/RoomsMobile";
import RoomsLaptop from "./Rooms/LaptopView/RoomsLaptop";
import { useEffect, useState } from "react";
import Address from "./Address/Address";
import Image1 from "../../../assets/image1.jpg";
import Image2 from "../../../assets/image2.jpg";
import Image3 from "../../../assets/image3.jpg";
import Image4 from "../../../assets/image4.jpg";
import Image5 from "../../../assets/image5.jpg";

const { Content } = Layout;

const SingleResort = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const resort1 = {
    resortName: "The Welcome Resort",
    rating: 4.5,
    images: [Image1, Image2, Image3, Image4, Image5],
    majorAmenities: [
      "Doctor on Call",
      "First aid Services",
      "Sanitizer installed",
      "Bar",
    ],
    lowestPrice: 2000,
    tax: 681,
    amenities: {
      Dining: ["Restaurant", "Dining Area"],
      Internet: ["Free Wi-Fi"],
      Services: [
        "Laundry Service",
        "First-aid Services",
        "Paid Pickup/Drop",
        "Paid Airport Transfers",
      ],
      General: [
        "Air Conditioning",
        "Smoke alarms",
        "Swimming Pool",
        "Safety and Security",
        "Free Parking",
        "Lawn",
        "CCTV",
        "Reception",
        "Fire",
        "Extinguishers",
        "Elevator/Lift",
        "Seating Area",
        "Public Restrooms",
        "Power Backup",
      ],
      Room: [
        "24-hour Room Service",
        "Electrical Chargers",
        "TV",
        "Balcony/Terrace",
        "Refrigerator",
        "Wake-up Call",
        "Newspaper",
        "Smoke ",
        "Detector",
        "In-room Safe",
        "Attached Bathroom",
        "24-hour Security",
      ],
      "Safety & Hygiene": [
        "Sanitizers Installed",
        "Hair nets",
        "Masks",
        "Hospital in the vicinity",
        "Gloves",
        "Contactless check-in",
      ],
      Others: [
        "Thermal Screening",
        "Intercom",
        "Bar",
        "Housekeeping",
        "Emergency Exit Map",
      ],
    },
    feedback: [
      {
        author: "Sachi",
        content:
          "One of your most impactful moments was how you handled Project X. You showed the power of user testing in shaping a feature roadmap. Your efforts increased the likelihood that we satisfy and delight our users. I'd love to see you do more of this.",
      },
      {
        author: "Sachi",
        content:
          "One of your most impactful moments was how you handled Project X. You showed the power of user testing in shaping a feature roadmap. Your efforts increased the likelihood that we satisfy and delight our users. I'd love to see you do more of this.",
      },
      {
        author: "Sachi",
        content:
          "One of your most impactful moments was how you handled Project X. You showed the power of user testing in shaping a feature roadmap. Your efforts increased the likelihood that we satisfy and delight our users. I'd love to see you do more of this.",
      },
      {
        author: "Sachi",
        content:
          "One of your most impactful moments was how you handled Project X. You showed the power of user testing in shaping a feature roadmap. Your efforts increased the likelihood that we satisfy and delight our users. I'd love to see you do more of this.",
      },
    ],
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };
    window.addEventListener("resize", updateScreenSize);
    return function () {
      window.removeEventListener("scroll", updateScreenSize);
    };
  }, []);

  return (
    <Layout>
      {console.log(isMobileView)}
      <Content className={styles.main}>
        <ResortHeader title={resort1.resortName} rating={resort1.rating} />
        <SingleResortDetail
          images={resort1.images}
          majorAmenities={resort1.majorAmenities}
          lowestPrice={resort1.lowestPrice}
          tax={resort1.tax}
        />
        <section className={styles.section_4}>
          <MenuComponent>
            {["Overview", "Rooms", "Aminities", "Location", "Reviews"]}
          </MenuComponent>
        </section>
        <section className={styles.section_5}>
          <Element name="overview">
            <Overview />
          </Element>
          <Element name="rooms">
            {!isMobileView ? (
              <RoomsLaptop className={styles.laptopview} />
            ) : (
              <RoomMobile className={styles.mobileview} />
            )}
          </Element>
          <Element name="aminities">
            <Amenities
              allAmenities={resort1.amenities}
              majorAmenities={resort1.majorAmenities}
            />
          </Element>
          <Element name="location">
            <Row>
              <Col sm={17}>
                <Location />
              </Col>
              <Col sm={7}>
                <Address />
              </Col>
            </Row>
          </Element>
          <Element name="reviews">
            <Feedback feedback={resort1.feedback} />
          </Element>
        </section>
      </Content>
    </Layout>
  );
};

export default SingleResort;
