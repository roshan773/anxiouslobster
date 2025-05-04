'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

import { CiSearch } from "react-icons/ci";

const Accessories = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#f5f5f7" }}>
      <div className='container pb-5'>
        <img src="/Images/Accessories-page-image/ss1.png" className='w-100 img-fluid'></img>
      </div>

      <div className='container-fluid py-5' style={{ backgroundColor: "#ffffff" }}>
        <div className='display-6 fw-semibold text-center mb-4'>
          Find the accessories you’re looking for.
        </div>

        <div className="position-relative" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <input
            type="search"
            className="form-control ps-5 py-2 rounded"
            placeholder="Search accessories"
          />
          <CiSearch
            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
            size={18}
          />
        </div>
      </div>

      <div className='container-fluid py-5' style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-4">
          <div className="row justify-content-center align-items-center text-center g-4">
            <div className="col-6 col-sm-4 col-md-2">
              <Link href="/Product" className='text-decoration-none text-dark'>
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-mac?wid=225&hei=225&fmt=png-alpha"
                  className="img-fluid border border-4 rounded-circle p-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  alt="Mac"
                />
                <p className="mt-2 fw-medium">Mac</p>
              </Link>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
              <Link href="/Product" className='text-decoration-none text-dark'>
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-ipad?wid=225&hei=225&fmt=png-alpha"
                  className="img-fluid border border-4 rounded-circle p-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  alt="iPad"
                />
                <p className="mt-2 fw-medium">iPad</p>
              </Link>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
              <Link href="/Product" className='text-decoration-none text-dark'>
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-iphone?wid=225&hei=225&fmt=png-alpha"
                  className="img-fluid border border-4 rounded-circle p-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  alt="iPhone"
                />
                <p className="mt-2 fw-medium">iPhone</p>
              </Link>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
              <Link href="/Product" className='text-decoration-none text-dark'>
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-watch?wid=225&hei=225&fmt=png-alpha"
                  className="img-fluid border border-4 rounded-circle p-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  alt="Watch"
                />
                <p className="mt-2 fw-medium">Watch</p>
              </Link>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
              <Link href="/Product" className='text-decoration-none text-dark'>
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-vision-pro?wid=150&hei=150&fmt=png-alpha"
                  className="img-fluid border border-4 rounded-circle p-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  alt="Vision Pro"
                />
                <p className="mt-2 fw-medium">Vision Pro</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container'>
          <div className='display-6 text-center fw-semibold'>Mother’s Day Picks</div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container w-25'>
          <div className='row'>
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss2.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss3.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss4.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss5.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss6.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container'>
          <div className='display-6 text-center fw-semibold'>Featured iPhone Accessories</div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container w-25'>
          <div className='row'>
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss7.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss8.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss9.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss10.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss11.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container'>
          <div className='display-6 text-center fw-semibold'>Featured iPad Accessories</div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container w-25'>
          <div className='row'>
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss12.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss13.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss14.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss15.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss16.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container'>
          <div className='display-6 text-center fw-semibold'>Apple Watch Bands</div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container w-25'>
          <div className='row'>
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss17.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss18.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss19.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss20.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss21.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container'>
          <div className='display-6 text-center fw-semibold'>Apple Watch Bands</div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <div className='container w-25'>
          <div className='row'>
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss22.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss23.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss24.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className='col-2' style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="#" className='text-decoration-none px-0'>
                  <img
                    src="/Images/Accessories-page-image/ss25.png"
                    className='img-fluid'
                    style={{ borderRadius: "20px", width: "100%", height: "100%", objectFit: "cover" }} // Standardized size
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Accessories