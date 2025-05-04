'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const Airpods = () => {
  return (
    <div className='container-fluid'>
      <div className='container pb-5 w-25'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={15} // Adjusted for better spacing
          pagination={{ clickable: true }}
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
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/airpods/x/images/chapternav/airpods_4__fqax1brwh46e_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>AirPods</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/airpods/x/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>AirPods Pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/airpods/x/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>AirPods Max</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/airpods/x/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/airpods/x/images/chapternav/apple_music_light__fexraacz3dme_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple Music</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#f5f5f7" }}>
        <Link href="/Product">
          <div style={{ borderRadius: "20px", objectFit: "cover" }}>
            <img src="/Images/AirPods-page-image/ss1.png" className='img-fluid w-100 px-5 py-4'></img>
          </div>
        </Link>
        <Link href="/Product">
          <div style={{ borderRadius: "20px", objectFit: "cover" }}>
            <img src="/Images/AirPods-page-image/ss2.png" className='img-fluid w-100 px-5 py-4'></img>
          </div>
        </Link>
        <Link href="/Product">
          <div style={{ borderRadius: "20px", objectFit: "cover" }}>
            <img src="/Images/AirPods-page-image/ss3.png" className='img-fluid w-100 px-5 py-4'></img>
          </div>
        </Link>
      </div>

      <div className='px-5 w-100 h-100 mb-5 mt-5'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={15} // Adjusted for better spacing
          pagination={{ clickable: true }}
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
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/airpods/x/images/overview/consider/card_noise_cancellation__bcl69t06noci_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/airpods/x/images/overview/consider/card_spatial_audio__uga42js3h4ya_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/airpods/x/images/overview/consider/card_hearing_health__ss2uxyv3j5m6_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/airpods/x/images/overview/consider/card_iphone__c7gcuw15pxiu_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_watch_and_iphone__fiq5g9njy5qy_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container px-5 py-5 w-50'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-12 col-lg-6 display-5 fw-semibold'>
            <img src="https://static1.squarespace.com/static/64b05fdb50c98c737d01f574/t/66378a4a2de1d2430d44901c/1714916417369/apple-music-logo.png?format=1500w" className='img-fluid' style={{width: "150px", height: "100px", display: "block"}}></img>
            Get 3 months of Apple Music free with your AirPods.*
          </div>
          <div className='col-12 col-lg-6'>
            <img src="https://www.apple.com/v/airpods/x/images/overview/music/music_album_stack__bi4gk5n0vwb6_large_2x.png" className='w-100 img-fluid'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Airpods