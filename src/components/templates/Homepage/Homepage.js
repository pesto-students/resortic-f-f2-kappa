import classes from "./Homepage.module.css";

import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

import HeroBanner1 from "../../../assets/hero-banner1.jpg";
import HeroBanner2 from "../../../assets/hero-banner2.jpg";

// import Autocomplete from "../../Autocomplete";

import SingleDetailCard from "../SingleDetailCard/SingleDetailCard";
import SearchBar from "../../molecules/SearchBar";
import PopularDestination from "../../molecules/PopularDestination";
import axios from "../../../axios";
import { fetchTopTenResort } from "../../../constant/Apis";
const { TabPane } = Tabs;

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
  const [isLoading, setLoading] = useState(true);
  const [resorts, setResorts] = useState();

  useEffect(() => {
    axios
      .get(fetchTopTenResort)
      .then((resorts) => {
        setResorts(
          resorts.data.value
            .map((resort) => {
              return {
                ...resort,
                rating:
                  resort.reviewtables.length != 0
                    ? (
                        resort.reviewtables.reduce(
                          (sum, val) => sum + val.rating,
                          0
                        ) / resort.reviewtables.length
                      ).toFixed(1)
                    : 0,
              };
            })
            .sort((a, b) => b.rating - a.rating)
            .filter((el) => el.rating <= 5 && el.rating >= 4)
            .slice(0, 10)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className={classes.Homepage}>
      <div className={classes.heroWrapper} style={{ position: "relative" }}>
        <img
          className={classes.heroBanner}
          src={HeroBanner2}
          alt="hero banner"
        />
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={classes.resortWrapper}>
        <h2 className={classes.popularResortTitle}>Our Most Popular Resorts</h2>
        <div className={classes.popularResort}>
          {/* <Scroller> */}
          {resorts ? (
            resorts.map((resort, key) => {
              return (
                <SingleDetailCard
                  key={resort + key}
                  resortimg={HeroBanner1}
                  location={resort.city}
                  title={resort.resort_name}
                  price={resort.starting_price}
                  ratingValue={resort.rating}
                />
              );
            })
          ) : (
            <p>Loading</p>
          )}
          {/* {resortData.length &&
            resortData.map((resort, index) => {
              return (
                <Link
                  itemId={index}
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
              );
            })} */}
          {/* </Scroller> */}
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
          {resortData.length &&
            resortData.map((resort, index) => {
              return (
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
              );
            })}
        </div>
      </div>
      <div className={classes.popularDestinationWrapper}>
        <h2 className={classes.popularResortTitle}>Most Popular Destination</h2>
        <div className={classes.popularDestination}>
          <PopularDestination isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
