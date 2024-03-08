"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import flags from "../lib/roundedFlags.json"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carrousel.css';
import { Autoplay } from 'swiper/modules';

export default function CarrouselFlag() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        //centeredSlides={true}r
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        centeredSlides={true}
        modules={[Autoplay]}
        className="swiperFlag"
      >
        {flags.map((flag, index) => (
          <SwiperSlide key={index}>    
            <img src={flag.flag} alt={flag.name}/>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
