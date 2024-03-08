"use client";

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carrousel.css';
import SwiperButton from './SwiperBoutton';

export default function CarrouselTrustUs() {
  const swiper = useSwiper();

  useEffect(() => {
    // Vérifiez si swiper est prêt avant d'appeler slideNext()
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]); // Assurez-vous de spécifier swiper dans les dépendances de useEffect

  return (
    <>
   
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          clickable: true,
        }}
        
        loop={true}
        autoplay={{ delay:2000 }}
        slidesPerView={3}
        spaceBetween={50}
        className="swiperTrustUs mt-9"
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>6</SwiperSlide>    
      </Swiper>
      
    </>
  );
}