'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const Iphone = () => {
  return (
    <div className='container-fluid'>
      <div className='container pb-5'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={15} // Adjusted for better spacin
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
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>iphone 16 pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_light__1g0j6j3ygciy_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>iPhone 16</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16e_light__dcdfirk5ikk2_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>iPhone 16e</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_15_light__fj1tpga410a6_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>iPhone 15</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_compare_light__f01dnbvbb62y_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/airpods_light__cd9exnztczjm_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>AirPods</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/airtag_light__c19z9f5le0ia_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Airtags</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Accessories</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/accessories_light__e917u1i857e6_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Accessories</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_apple_card_light__eik9egogyro2_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Apple card</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_ios_light__b0jhieo01t0i_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>iOS 16</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="https://www.apple.com/v/iphone/home/cb/images/chapternav/shop_iphone_light__e4dlk2n6h26a_large.svg"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
              <p className='text-center text-dark'>Shop iPhone</p>
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
            <h1 className="display-1 fw-bold text-start">iPhone</h1>
          </div>
          <div className="col-12 col-md-6 text-md-end text-start mt-3 mt-md-0">
            <h4 className="fw-bold mb-0">
              Designed to be loved.
            </h4>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5'>
        <video
          src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge.mp4#t=0"
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
          <h1 className="display-2 fw-semibold text-start">Get to know iPhone</h1>
        </div>
      </div>

      <div className='px-5 w-100 h-100 mb-5'>
        <Swiper
          modules={[Pagination, FreeMode]}
          spaceBetween={15} // Adjusted for better spacin
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
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/environment__e3v3gj88dl6q_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/privacy__ckc0wa30o55y_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/personalize__dwg8srggrbo2_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>
            <Link href="/Product">
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/safety__bwp7rsowtjiu_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "500px", height: "800px", objectFit: "cover" }}></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='container-fluid px-5 py-5'>
        
      </div>

      <div className='container-fluid px-5 py-5' style={{ backgroundColor: "#f5f5f7" }}>

        <div className="col-12 col-md-6">
          <h1 className="display-2 fw-semibold py-5">iPad essentials. </h1>
        </div>

        <div className='row py-5'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/iPad-page-content/ss1.png" className='px-0 w-100 img-fluid' style={{ width: "100%", height: "700px", borderRadius: "30px" }}></img>
            </Link>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <Link href="/Product">
              <img src="/Images/iPad-page-content/ss2.png" className='px-0 w-100 img-fluid' style={{ width: "100%", height: "700px", borderRadius: "30px" }}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iphone