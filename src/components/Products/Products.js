import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Products.css"
import products from "../Data/products.json"

const Products = (props) => {
  return (
    <div className='products'>
        <h1>{props.heading}</h1>
        <h2>Construction</h2>
        <Swiper className="mySwiper" slidesPerView={3} spaceBetween={30}>
          {products.products.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='products-card'>
                  <div className="product-img-container">
                    <img src={item.image} className='product-img' alt={item.productName} />
                  </div>
                  <p className="product-name">{item.productName}</p>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default Products