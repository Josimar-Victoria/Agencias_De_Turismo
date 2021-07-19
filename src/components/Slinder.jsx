/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import '../Styles/slinder.css'
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow,Pagination } from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

export const Slinder = () => {
    return (
    <>
    <Swiper 
        effect={'coverflow'} 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={'auto'} 
        coverflowEffect={{
    "rotate": 50,
    "stretch": 0,
    "depth": 100,
    "modifier": 1,
    "slideShadows": true
}} pagination={true} className="mySwiper">
        <SwiperSlide><img src="https://images.unsplash.com/photo-1580752301135-3e818f951ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1581876804153-74295c0f59e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1615647138834-caad166c33ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1538509372302-dc95677545c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1497601573976-fb2f03ea161d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" /></SwiperSlide>
  </Swiper>
    </>
  )
}
