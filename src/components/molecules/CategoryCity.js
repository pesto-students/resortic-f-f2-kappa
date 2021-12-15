import React from "react";
import moment from "moment";
import SingleDetailCard from "../templates/SingleDetailCard/SingleDetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import WithLoading from "../../HOC/WithLoading";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Pagination, Navigation]);

function CategoryCity({ categoryResort, isLoading }) {
  return (
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
      {categoryResort.length > 0 &&
        categoryResort.map((resort, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                key={index}
                to={`/resortList?city=${
                  resort.city
                }&searchQuery=${JSON.stringify({
                  checkIn: moment().format("YYYY-MM-DD"),
                  checkOut: moment().add(1, "days").format("YYYY-MM-DD"),
                  room: 1,
                  child: 0,
                  adult: 1,
                })}`}
              >
                <SingleDetailCard
                  key={index}
                  resortimg={resort.resortimg}
                  location={resort.city}
                />
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default WithLoading(CategoryCity);
