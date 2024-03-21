import React from "react";
import Moviecard from "./Moviecard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Movielist = ({ title, Movies }) => {
  return (
    <div className="-mt-28 z-50">
      <div className="px-3 ">
        <h1 className="text-white text-2xl py-2 font-bold">{title}</h1>
        <Swiper
          slidesPerView={6}
          cssMode={true}
          keyboard={true}
          mousewheel={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {Movies
            ? Movies.map((mapdata, index) => (
                <SwiperSlide key={index}>
                  <Moviecard gotmovies={mapdata.poster_path} />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </div>
    </div>
  );
};

export default Movielist;
