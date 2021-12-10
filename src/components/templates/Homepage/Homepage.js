import React from "react";
import { Tabs } from "antd";

import HeroBanner1 from "../../../assets/hero-banner1.jpg";
import HeroBanner2 from "../../../assets/hero-banner2.jpg";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";

import SingleDetailCard from "../SingleDetailCard/SingleDetailCard";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import PopularDestination from "../../molecules/PopularDestination";

const { TabPane } = Tabs;
SwiperCore.use([Pagination, Navigation]);
const tabsData = [
  "Beach Vacation",
  "Weekend Getaways",
  "Hill Stations",
  "Stay Like Royals",
  "Party Destinations",
];

const resortData = [
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
  {
    resortimg: HeroBanner1,
    location: "Goa",
    title: "Karma Royal Palms",
    price: "240",
    ratingValue: "3.5",
  },
];

function callback(key) {
  console.log(key);
}

function Homepage() {
  return (
    <div className={classes.Homepage}>
      <div className={classes.heroWrapper} style={{ position: "relative" }}>
        <img
          className={classes.heroBanner}
          src={HeroBanner2}
          alt="hero banner"
        />
        <SearchBar />
      </div>
      <div className={classes.resortWrapper}>
        <h2 className={classes.popularResortTitle}>Our Most Popular Resorts</h2>
        <div className={classes.popularResort}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            loopFillGroupWithBlank={true}
            navigation={true}
            pagination={false}
            breakpoints={{
              550: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            {resortData.length &&
              resortData.map((resort, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      key={index}
                      to={{
                        pathname: "resort",
                        state: index,
                      }}
                    >
                      <SingleDetailCard
                        resortimg={resort.resortimg}
                        location={resort.location}
                        title={resort.title}
                        price={resort.price}
                        ratingValue={resort.ratingValue}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className={classes.resortWrapper}>
        <div className={classes.tabsWrapper}>
          <Tabs defaultActiveKey="0" onChange={callback}>
            {tabsData.length &&
              tabsData.map((item, index) => {
                return (
                  <TabPane
                    style={{ marginRight: "15px" }}
                    tab={item}
                    key={index}
                  ></TabPane>
                );
              })}
          </Tabs>
        </div>
        <div className={classes.popularResort}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            loopFillGroupWithBlank={true}
            navigation={true}
            pagination={false}
            breakpoints={{
              550: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            {resortData.length &&
              resortData.map((resort, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      key={index}
                      to={{
                        pathname: "resort",
                        state: index,
                      }}
                    >
                      <SingleDetailCard
                        key={index}
                        resortimg={resort.resortimg}
                        location={resort.location}
                        title={resort.title}
                        price={resort.price}
                        ratingValue={resort.ratingValue}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className={classes.popularDestinationWrapper}>
        <h2 className={classes.popularResortTitle}>Most Popular Destination</h2>
        <div className={classes.popularDestination}>
          <PopularDestination />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
