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
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_health__b2yo83wkzoaa_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_fitness__b5owsglf0ieu_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_connectivity__cwtqydvy2laq_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_safety__gln97xcew2em_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_watch_and_iphone__fiq5g9njy5qy_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_personalization__f8bl9mx85j22_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_adventure__d4xvmn7guk02_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/watch/bq/images/overview/consider/feature_family_setup__dclbe9jpbiie_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
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
              <img src="/Images/Watch-page -image/Watch studio.png" className='px-0 w-100 img-fluid' style={{ width: "100%", height: "700px", borderRadius: "30px" }}></img>
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
              <img src="/Images/Watch-page -image/ss1.png" className='px-0 w-100 img-fluid' style={{ width: "100%", height: "700px", borderRadius: "30px" }}></img>
            </Link>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images//Watch-page -image/ss2.png" className='px-0 w-100 img-fluid' style={{ width: "100%", height: "700px", borderRadius: "30px" }}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Airpods