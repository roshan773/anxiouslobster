'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const Mac = () => {
  return (
    <div className='container-fluid'>
      <div className='container pb-5'>
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
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>MacBook Air</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>MacBook Pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/imac_light__cx5ex9nbqxme_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>iMac</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_mini_light__e7ojhup2ezau_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Mac Mini</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_studio_light__fcr3455qk0i2_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Mac Studio</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Mac Pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/hmc_light__fq8mh4xb68mm_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Help me choose</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_compare_light__capy8s4wrbhy_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/displays_light__d67yrnk0qsa6_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>displays</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Accessories</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_os_light__6mb5pqhztcie_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Sequoia</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/mac/home/cg/images/chapternav/mac_shop_light__f0m72gc7jguq_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Shop Mac</p>
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
            <h1 className="display-1 fw-bold text-start">Mac</h1>
          </div>
          <div className="col-12 col-md-6 text-md-end text-start mt-3 mt-md-0">
            <h4 className="fw-bold mb-0">
              If you can dream it,<br />Mac can do it.
            </h4>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5'>
        <video
          src="/Images/Mac-page-content/banner.mp4"
          autoPlay
          muted
          loop
          className="w-100"
          style={{ maxHeight: "800px", objectFit: "cover", borderRadius: "20px" }}
        >
          <source src="/Image/Mac-page-content/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='container-fluid px-5' style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold text-start">Get to know Mac</h1>
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
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_intelligence_siri__do2ke43yic02_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_iphone__gh1tblkt6bqm_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_security__gfwda10khdym_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_durability__epiwcuk7zkeq_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_values__c9gck9qi4kia_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid px-5' style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold ">Help me for Choosing </h1>
        </div>
      </div>

      <div className='container-fluid px-5 py-5'>
        <div style={{ backgroundColor: "#f5f5f7", borderRadius: "30px" }}>
          <div className='row'>
            <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center text-center order-2 order-lg-1'>
              <div>
                <h1 className='display-6 fw-semibold'>Answer a few question to find <br /> a best mac for you</h1>
                <Link href="/Product" className='btn btn-primary px-4 py-2 rounded-pill' type='submit'>Get Started</Link>
              </div>
            </div>
            <div className='col-12 col-lg-6 order-1 order-lg-2'>
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/help-me-choose/help_me_choose__0cunyw534bmm_large_2x.jpg" className='img-fluid py-5' />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5'>
        <div className="col-12 col-md-6">
          <h1 className="display-1 fw-semibold text-start">Switch to Mac</h1>
        </div>

        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/Mac-page-content/switch to mac 1.png"></img>
            </Link>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/Mac-page-content/switch to mac 2.png"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac;