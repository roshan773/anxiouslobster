'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const iPad = () => {
  return (
    <div className='container-fluid'>
      <div className='container pb-5 px-0'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={0} // Adjusted for better spacing
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
              slidesPerView: 10,
            },
          }}
        >
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_pro_b05b29e18.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>iPad pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_air_b05b29e18.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>iPad Air</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>iPad</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>iPad Mini</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/apple_pencil_607b17f9f.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>Apple Pencil</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/keyboard_ipad_0113a1a87.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>Keyboards</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>Accessories</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipados_1e9806c02.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>iPadOs 16</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }}
              />
              <p className='text-center text-dark'>Shop iPad</p>
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
            <h1 className="display-1 fw-bold text-start">iPad</h1>
          </div>
          <div className="col-12 col-md-6 text-md-end text-start mt-3 mt-md-0">
            <h4 className="fw-bold mb-0">
              Touch, draw, and type<br />on one magical device.
            </h4>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5'>
        <video
          src="https://www.apple.com/assets-www/en_WW/ipad/welcome/x1fba949bf_large.mp4"
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
          <h1 className="display-2 fw-semibold text-start">Get to know iPad</h1>
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
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_apple_intelligence_8a1f37017_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_productivity_f46450eb3_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_creativity_63d5f62da_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_learning_91d28ea10_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_entertainment_d8c475c1d_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_pencil_388579767_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_ipados_1fb74fbb5_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "auto", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid px-5 py-5' style={{ backgroundColor: "#f5f5f7" }}>

        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold py-5">iPad essentials. </h1>
        </div>

        <div className='row py-5'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/iPad-page-content/ss1.png" className='px-0 w-100 img-fluid pt-2' style={{ width: "100%", height: "auto", borderRadius: "30px" }}></img>
            </Link>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/iPad-page-content/ss2.png" className='px-0 w-100 img-fluid pt-2' style={{ width: "100%", height: "auto", borderRadius: "30px" }}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iPad;