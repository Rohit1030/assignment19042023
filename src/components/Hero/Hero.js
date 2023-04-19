import React from 'react';
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import hero from "../Data/hero.json"

const Hero = () => {
  return (
    <div id='hero'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="myswiper"
      >
        {hero.hero.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <div className='sub-slide'>
                        <div className="sub-slide-one">
                            <h1>{item.tagline}</h1>
                            <p>Upto 10% off</p>
                            <button>Buy Now</button>
                        </div>
                        <div className="sub-slide-two">
                            <img src={item.img} alt="hero-image" className="sub-slide-img" />
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  )
}

export default Hero