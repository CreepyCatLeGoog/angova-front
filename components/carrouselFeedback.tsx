"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carrousel.css';
import { Autoplay, Pagination } from 'swiper/modules';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

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
        className="swiperFeedback mt-8"
      >
        <SwiperSlide>
          <div className="flex justify-start  items-center w-[94%] h-[85%]">
            <div className="flex justify-center  items-start  w-[30%] h-[100%]">
              <img
                src="/auto_ecole.png"
                alt="auto_ecole"
                width={15}   
                height={15}  
              />  
            </div>
            <div className="w-[70%] h-[100%] flex flex-col  justify-start  items-start p-2">
              <p className='text-[10px] font-medium'>Nom prénom</p>
              <p className='text-[10px] font-light'>Juin. 2023</p>
              <p className='text-[10px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue efficitur.</p>
              <div className="flex justify-end w-[100%]"><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/></div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start  items-center w-[94%] h-[85%]">
            <div className="flex justify-center  items-start  w-[30%] h-[100%]">
              <img
                src="/auto_ecole.png"
                alt="auto_ecole"
                width={15}   
                height={15}  
              />  
            </div>
            <div className="w-[70%] h-[100%] flex flex-col  justify-start  items-start p-2">
              <p className='text-[10px] font-medium'>Nom prénom</p>
              <p className='text-[10px] font-light'>Juin. 2023</p>
              <p className='text-[10px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue efficitur.</p>
              <div className="flex justify-end w-[100%]"><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start  items-center w-[94%] h-[85%]">
            <div className="flex justify-center  items-start  w-[30%] h-[100%]">
              <img
                src="/auto_ecole.png"
                alt="auto_ecole"
                width={15}   
                height={15}  
              />  
            </div>
            <div className="w-[70%] h-[100%] flex flex-col  justify-start  items-start p-2">
              <p className='text-[10px] font-medium'>Nom prénom</p>
              <p className='text-[10px] font-light'>Juin. 2023</p>
              <p className='text-[10px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue efficitur.</p>
              <div className="flex justify-end w-[100%]"><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/><StarRateIcon style={{color:"#FFDD4D", width: 16}}/></div>
            </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
      
    </>
  );
}
