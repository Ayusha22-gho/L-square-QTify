import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card"
import "./carousel.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function index({data}) {
  return (
    <div className='carousel-container'>
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
        navigation = {{nextEl : ".arrow-right", prevEl:".arrow-left"}}
        virtual
      >
      
         {data.map(el => <SwiperSlide key={el.id}>
            <Card image={el.image} follows={el.follows} title={el.title} />
         </SwiperSlide>)}
         
      </Swiper>
      <div className="arrow-left arrow"><img src = "leftnav.png" alt = "left_navigation"/></div>
      <div className="arrow-right arrow"><img src = "rightNav.png" alt = "right_navigation"/></div>
      </div>
  )
}
