'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const Watch = () => {
  return (
    <div className='container-fluid'>
      <div className='container pb-5'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={15} // Adjusted for better spacing
          freeMode={true} // Enables momentum scrolling
          grabCursor={true} // Shows a hand cursor for better UX
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 8,
            },
            1200: {
              slidesPerView: 12,
            },
          }}
        >
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_s10_link_light__do0irszzzyeu_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple watch series 10</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_ultra_light__fqn5wx6h4lay_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple watch Ultra 2</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_se_light__ejlpe6fvpyoi_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple watch SE</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_nike_light__fliwuf4xldea_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple watch Nike</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_hermes_light__e2rvfrkpcgwi_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple Watch Hermes</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_studio_light__f9fbwbktuday_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple watch Studio</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_compare__ctl6h9k8on2a_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_bands__evxamh3lvjcm_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Bends</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_airpods__e4gjf5dricq6_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>AirPOds</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_accessories__zysm4kyaptuy_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Accessories</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_fitness__elh15upgau0y_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple Fitness+</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_watch_os__tlj3t83sl8yi_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>WatchOs 11</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/watch/bq/images/chapternav/watch_nav_shop_watch_light__dtu7mmk27yky_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Shop Watch</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid text-center py-1' style={{ backgroundColor: "#f5f5f7" }}>
        <p>Find the perfect gift this Mother’s Day.</p>
      </div>

      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="display-1 fw-bold text-start">Apple Watch</h1>
          </div>
          <div className="col-12 col-md-6 text-md-end text-start mt-3 mt-md-0">
            <h4 className="fw-bold mb-0">
              The ultimate device
              for a healthy life.
            </h4>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5'>
        <video
          src="https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge.mp4"
          autoPlay
          muted
          loop
          className="w-100"
          style={{ maxHeight: "1000px", objectFit: "cover", borderRadius: "20px" }}
        >
          <source src="/Image/Mac-page-content/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='container-fluid px-5' style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold text-start">Get to know Apple Watch</h1>
        </div>
      </div>

      <div className='px-5 w-100 h-100 mb-5'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={15} // Adjusted for better spacing
          freeMode={true} // Enables momentum scrolling
          grabCursor={true} // Shows a hand cursor for better UX
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_health__b2yo83wkzoaa_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_fitness__b5owsglf0ieu_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_connectivity__cwtqydvy2laq_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_safety__gln97xcew2em_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_watch_and_iphone__fiq5g9njy5qy_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_personalization__f8bl9mx85j22_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_adventure__d4xvmn7guk02_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_family_setup__dclbe9jpbiie_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "contain" }}></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid px-5 py-5'>
        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold py-5">Apple Watch Studio</h1>
        </div>

        <div className='row py-5'>
          <div className='col-12'>
            <Link href="/Product">
              <img src="/Images/Watch-page -image/Watch studio.png" className='px-0  img-fluid' style={{ width: "100%", height: "auto", borderRadius: "30px" }}></img>
            </Link>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5 py-5' style={{ backgroundColor: "#ffffff" }}>

        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold py-5">Apple Watch Essential</h1>
        </div>

        <div className='row py-5'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/Watch-page -image/ss1.png" className='px-0 w-100 img-fluid' style={{ width: "100%",  borderRadius: "30px" }}></img>
            </Link>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images//Watch-page -image/ss2.png" className='px-0 w-100 img-fluid' style={{ width: "100%",  borderRadius: "30px" }}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch