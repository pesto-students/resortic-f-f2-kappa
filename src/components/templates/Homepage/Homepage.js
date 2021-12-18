import React, { useState, useEffect } from "react";

import HeroBanner2 from "../../../assets/hero-banner2.jpg";

import classes from "./Homepage.module.css";

import SearchBar from "../../molecules/SearchBar/SearchBar";
import PopularDestination from "../../molecules/PopularDestination";

import axios from "../../../axios";
import * as APIS from "../../../constant/Apis";
import CategoryTabs from "../../molecules/CategoryTabs";
import CategoryCity from "../../molecules/CategoryCity";

import PopularResort from "../../molecules/PopularResort";
import { getRandomImage } from "../../../utils/utils";
const tabsData = ["Beach", "Mountain", "Royal", "Party"];

export const getGuestToken = async () => {
  localStorage.clear();
  axios
    .get(APIS.guestToken + "guestSystemId=" + new Date().toISOString())
    .then(function (response) {
      localStorage.setItem(
        "resortic_localstorage",
        JSON.stringify({ token: response.data.data.token })
      );
      return response.data.data.token;
    })
    .catch(function (error) {
      console.log(error);
    });
};

function Homepage() {
  const [isDestinationLoading, setDestinationLoading] = useState(true);
  const [isCategoryLoading, setCategoryLoading] = useState(true);
  const [isPopularResortLoading, setPopularResortLoading] = useState(true);
  const [categoryResort, setCategoryResort] = useState([]);
  const [categoryResortData, setCategoryResortData] = useState([]);
  const [popularResortData, setPopularResort] = useState([]);
  setTimeout(() => {
    setDestinationLoading(false);
  }, 1000);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    if (localData == null) getGuestToken();
    getResortByCategory();
    getPopularResorts();
  }, []);

  const getPopularResorts = () => {
    axios
      .get(APIS.getPopularResort)
      .then((resorts) => {
        const popData = resorts.data.value
          .map((resort) => {
            return {
              ...resort,
              resortimg: getRandomImage(),
              rating:
                resort.reviewtables.length !== 0
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
          .slice(0, 10);
        console.log("popData", popData);
        setPopularResort(popData);
        setPopularResortLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getResortByCategory = () => {
    axios
      .get(APIS.getCategoryResort)
      .then(function (response) {
        console.log("response of caateogry", response);
        setCategoryResortData(response.data.value);
        getResortByCategoryHandler(0, response.data.value);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getResortByCategoryHandler = (cat, data) => {
    const dataForCat =
      categoryResortData.length > 0 ? categoryResortData : data;
    const resort = dataForCat.filter(
      (resort) => resort.category_name === tabsData[cat]
    );
    const newData = resort[0].locationcitycategorytables.map((el) => ({
      ...el,
      resortimg: getRandomImage(),
    }));
    setCategoryResort(newData);
    setCategoryLoading(false);
  };

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
          <PopularResort
            popularResortData={popularResortData}
            isLoading={isPopularResortLoading}
          />
        </div>
      </div>
      <div className={classes.resortWrapper}>
        <div className={classes.tabsWrapper}>
          <CategoryTabs
            tabsData={tabsData}
            onChange={getResortByCategoryHandler}
          />
        </div>
        <div className={classes.popularResort}>
          <CategoryCity
            categoryResort={categoryResort}
            isLoading={isCategoryLoading}
          />
        </div>
      </div>
      <div className={classes.popularDestinationWrapper}>
        <h2 className={classes.popularResortTitle}>Most Popular Destination</h2>
        <div className={classes.popularDestination}>
          <PopularDestination isLoading={isDestinationLoading} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
