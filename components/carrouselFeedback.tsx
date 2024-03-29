"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carrousel.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, StarHalf } from "lucide-react";

export default function CarrouselFeedback() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        //centeredSlides={true}r
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        centeredSlides={true}
        modules={[Autoplay]}
        className="swiperFeedback mt-8 "
      >
        <SwiperSlide>
          <div className="flex justify-start  items-center w-[94%] h-[100%] pt-2" >
            <div className="flex justify-center  items-start  w-[30%] h-[100%]">
              <img
                src="/auto_ecole.png"
                alt="auto_ecole"
                width={15}   
                height={15}  
              />  
            </div>
            <div className="w-[70%] h-[100%] flex flex-col  justify-start  items-start p-2">
              <div className="h-[80%]">
                <p className='text-[10px] font-semibold lg:text-[18px] xl:text-[20px]'>Auto École Aire de Conduite</p>
                <p className='text-[10px] font-light lg:text-[17px] xl:text-[19px]'>Sept. 2023</p>
                <p className='text-[10px] font-normal lg:text-[15px] xl:text-[18px]'>Cette ressource s'avère extrêmement bénéfique pour mes élèves, offrant un contenu clair et facilement compréhensible dans des langues pertinentes.</p>
              </div>
              
              <div className="flex justify-end w-[100%] mt-2">
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />      
              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start  items-center w-[94%] h-[100%] pt-2" >
            <div className="flex justify-center  items-start  w-[30%] h-[100%]">
              <img
                src="/homme.png"
                alt="auto_ecole"
                width={15}   
                height={15}  
              />  
              
            </div>
            <div className="w-[70%] h-[100%] flex flex-col  justify-start  items-start p-2">
              <div className="h-[80%]">
                <p className='text-[10px] font-semibold lg:text-[18px]  xl:text-[20px]'>Thierry</p>
                <p className='text-[10px] font-light lg:text-[17px]'>Janv. 2024</p>
                <p className='text-[10px] font-normal lg:text-[15px] xl:text-[18px]'>La plateforme est claire et sans surprise quant aux tarifs, offrant un choix intéressant de langues. Le contenu est de grande qualité et l'application est simple à utiliser.</p>
              </div>
              
              <div className="flex justify-end w-[100%] mt-2">
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />
                <Star fill="#FFDD4D" strokeWidth={0} size={18} />      
              </div>
            </div>
          </div>

        </SwiperSlide>
        
      </Swiper>
      
    </>
  );
}
