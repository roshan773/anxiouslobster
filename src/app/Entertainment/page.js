'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';


const Entertainment = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <div className='container pb-5 w-50'>
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
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
        >
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss1.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss2.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss3.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss4.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss5.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss6.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss7.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/Product" className='text-decoration-none'>
              <img
                src="/Images/Entertainment-page-image/ss8.png"
                className='img-fluid'
                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container-fluid py-5">
        <div className="container text-center text-light">
          <h1 className="display-1 fw-bold mb-4 text-light px-4 py-3 d-inline-block rounded">
            Meet the A-list of entertainment.
          </h1>
          <p className="fs-5 fw-medium">
            Award‑winning movies. Binge‑worthy shows. Your favorite music mastered in Spatial Audio. The most epic collection of mobile games. And the world’s largest library of 4K Ultra HD fitness content. The best entertainment and experiences live here — only on Apple.
          </p>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#161617" }}>
        <div className='container d-flex justify-content-center align-items-center py-5'>
          <div className='col-12 col-lg-2'>
            <img src="/Images/Entertainment-page-image/one.png"></img>
          </div>
          <div className='col-12 col-lg-8 fs-5 text-center'>
            Get up to six services in one subscription with Apple One.
          </div>
          <div className='col-12 col-lg-2'>
            <button className='btn btn-light-outline text-light border-light border rounded-pill'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <img src="https://www.apple.com/v/services/i/images/services/overview/services/service-headers/services-sizzle_startframe__e48xmbr59vyq_large_2x.jpg" className='w-100 img=fluid'></img>
      </div>

      <div className='container-fluid pt-3' style={{ backgroundColor: "#ffffff" }}>
        <div className='row'>
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
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/avICmr1PbBRB-PAeplGreA/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/gIyDtYBYBgDR4C0oBozlXQ/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/hjmYsl20uNCFQ9sqjiQIYw/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/O4Dn87TcNpQcMjmCqWm1Fw/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/mlNnLrkeXFsJh7QVz4ZMsg/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "250px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/3pfG0GJkoI0OFlPiIDdvUQ/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='container-fluid'>
        <img src="https://www.apple.com/v/services/i/images/services/overview/services/service-headers/music_2024_startframe__gkhou3rh32um_medium_2x.jpg" className='w-100 img=fluid'></img>
      </div>

      <div className='container-fluid pt-3' style={{ backgroundColor: "#ffffff" }}>
        <div className='row'>
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
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/dc/cf/89/dccf8922-21e7-765c-edea-bca02bbb1300/a4ca9f85-f07a-458e-a753-ae8e1b875466.png/328x328sr.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/46/a2/38/46a23845-d6d0-5c82-e26d-e84b8edcd8cf/f492f7a2-b1a5-448a-b499-03df9c584562.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/95/a3/5d/95a35dbf-d516-f87b-d926-f59534ef3a80/2c7f01bd-85e6-468c-9bfa-78e286858957.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f6/55/48/f655487f-8a42-82b8-108d-70fb07e7da6d/c8ff4bb6-8a0c-4704-9272-691ec4483d3a.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/22/70/b9/2270b94e-5df3-c077-0697-4cda1fb032bd/dfce39ec-7b63-4fa8-9227-7f9fbd2da510.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/06/7c/c1/067cc19c-91ef-cdee-a068-d40abb2c4c6b/1637f9a4-875c-42e2-9f46-237f05f0c21b.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/d3/28/e5/d328e5ed-2faf-b5e6-291b-04c0f4206daa/7c6097ab-2a82-4c8b-94b6-14fb131fbdd4.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "370px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/99/39/ee/9939eec2-14aa-1c72-39a5-555286b56514/7bedd37e-47b2-42ea-a603-fa90d7616a40.png/328x328SC.DN01.jpg?l=en-US"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>


      <div className='container-fluid pt-5' style={{backgroundColor: "#ffffff"}}>
        <img src="https://www.apple.com/v/services/i/images/services/overview/services/service-headers/arcade_startframe_2024__cb6o2uwuqpaq_medium_2x.jpg" className='w-100 img=fluid'></img>
      </div>

      <div className='container-fluid pt-3' style={{ backgroundColor: "#ffffff" }}>
        <div className='row'>
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
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/84/69/77/8469771a-114e-7a23-86c0-e405854bcf54/6ddd3b17-885e-4d92-b468-72a0e1314d6e.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5e/f7/1b/5ef71b78-7127-235e-842b-9d97347c578f/878de4bb-680a-4f13-aadc-710edec5195c.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/5a/f4/df/5af4df5a-9faa-6366-a899-4cd6fae01c69/5b3b9d9c-b4b2-458d-aeef-f7d2d2910de2.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/02/99/82/02998239-f46f-8ac8-c64a-7918d53f0aeb/1c83bf1b-9b20-4785-9e01-0fdec19529ef.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/69/2f/e6/692fe660-f699-1351-48bc-293c2bf58d37/fd09dbcf-3b6b-47fe-9164-94b3515fdb53.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/06/46/fd/0646fd54-6750-6dbc-2cd1-b95c4afa9dc2/c5edc01e-91f3-4dc9-ad31-419915156121.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/fa/14/e5/fa14e55a-14b6-adb3-2b9f-2eed5743af99/301e0d32-4212-4a5a-a15c-22d1a9000a75.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/42/9c/e1/429ce17d-4270-73c4-c610-46a6f8ca0a9f/VFMtQVAtV1ctQmxvb25zVEQ2LnBuZw.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='container-fluid pt-5' style={{backgroundColor: "#ffffff"}}>
        <img src="https://www.apple.com/v/services/i/images/services/overview/services/service-headers/fitness_startframe__f4j83h7ld0y2_medium_2x.jpg" className='w-100 img=fluid'></img>
      </div>

      <div className='container-fluid pt-3' style={{ backgroundColor: "#ffffff" }}>
        <div className='row'>
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
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/cc/88/58/cc8858ff-e318-d96e-8a1a-a15dad8f5dbf/media-ST_GC_0157-9764864-Artwork-iOS-323746.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/ad/47/8e/ad478ecc-bf43-5e33-ee1c-d02e5204e4d6/media-ME_JL_0107-9653319-Artwork-iOS-320714.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/5c/4c/e2/5c4ce2f3-1cdd-fed7-6233-8d1c829cad3e/media-CO_JCL_0055-9765057-Artwork-iOS-323671.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/ba/c5/17/bac517ae-e508-b53d-8a31-affac4d4ac7a/media-ME_GC_0095-9683243-Artwork-iOS-324434.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/78/0f/9c/780f9ca0-2497-b6de-3b79-c9223c69d1dc/media-HI_BC_0095-9765800-Artwork-iOS-323699.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/5c/80/8b/5c808b8e-a1cc-ba12-12be-5cf1a143d956/media-ME_JS_0108-9764807-Artwork-iOS-323675.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/cb/b1/dd/cbb1dd9d-c5c2-24f2-a7da-325be55ccaf8/media-YO_JL_0211-9764741-Artwork-iOS-323813.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className='col-2' style={{ width: "100%", height: "270px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="#" className='text-decoration-none'>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/6c/e1/9a/6ce19a69-c125-d55a-5ad0-0c598da55ea7/media-ME_CH_0266-9765557-Artwork-iOS-323663.png/628x354.jpg"
                  className='img-fluid'
                  style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Entertainment