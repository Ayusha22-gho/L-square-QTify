import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import Tooltip from '../Tooltip'
import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function index({ navId,data, songs, isSongData }) {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        //onSwiper={setSwiperRef}
        slidesPerView={7}
        //centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        navigation={{ nextEl: `.arrow-right-${navId}`, prevEl: `.arrow-left-${navId}` }}
        virtual
      >
        {isSongData
          ? songs.map((song) => (
              <SwiperSlide key = {song.id}>
                <Card
                  image={song.image}
                  likes={song.likes}
                  title={song.title}
                />
              </SwiperSlide>
            ))
          :
           data.map((el) => (
              <SwiperSlide key={el.id}>
                <Card image={el.image} follows={el.follows} title={el.title} />
                <Tooltip message={el.songs.length}/>
              </SwiperSlide>
            ))}
      </Swiper>
      <div className={`arrow-left-${navId} arrow-left arrow`}>
        <img src="leftnav.png" alt="left_navigation" />
      </div>
      <div className= {`arrow-right-${navId} arrow-right arrow`}>
        <img src="rightNav.png" alt="right_navigation" />
      </div>
    </div>
  );
}
