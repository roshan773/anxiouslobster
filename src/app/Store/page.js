'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Store = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#f5f5f7" }}>
      <div className="container-fluid" style={{ backgroundColor: "#f5f5f7" }}>
        <div className="row">
          {/* Left Text Block */}
          <div className="col-12 col-lg-8 px-4 px-sm-5 py-5">
            <h1 className="display-5 fw-semibold" style={{ color: "#1d1d1f" }}>
              Store.<span style={{ color: "#6e6e73", display: "block" }}>The best way to buy the products you love.</span>
            </h1>
          </div>

          {/* Right Help Section */}
          <div className="col-12 col-lg-4 px-4 px-sm-5 py-5">
            <div
              className="d-flex flex-column gap-4 p-4 rounded"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                maxWidth: '100%',
              }}
            >
              {/* Need shopping help block */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-earth-day-specialist-icon-202504_AV3?wid=70&hei=70&fmt=jpeg&qlt=90&.v=MGlSYzZEcVYyWHpqdksxSCs4YjFLNzBQSmhWRTJPSGNQRHRFQ0RoYnJFNUxqRFMydnlRRmNmbTRsS2hUaUhKbHdpTHZxMWM3WWRmQnVUWUQ0V2tXSjdrNkxqcEdrM2x6OUZ3Z2JnTllhUVB2MG95SG1SbUJ4OGpPQWE5WVJEMzY"
                  alt="Specialist"
                  width={50}
                  height={50}
                  className="rounded-circle"
                />
                <div>
                  <div className="fw-semibold">Need shopping help?</div>
                  <a href="#" className="text-primary text-decoration-none">
                    Ask a Specialist <span>&#8599;</span>
                  </a>
                </div>
              </div>

              {/* Visit store block */}
              <div className="d-flex align-items-start gap-3">
                <div
                  className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <img src="/Images/Store-page-image/location.png" className="img-fluid" />
                </div>
                <div>
                  <div className="fw-semibold">Visit an Apple Store</div>
                  <a href="#" className="text-primary text-decoration-none">
                    Find one near you <span>&#8599;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image carousel */}
      <div className='container-fluid pb-5' style={{ paddingLeft: "130px" }}>

        {/* Desktop / Laptop view */}
        <div className='container-fluid row d-none d-md-flex'>
          {/* Your original structure remains here unchanged */}
          <div className='col-1 me-2'>
            <img src="https://store.storeimages..." className='img-fluid' />
            <p className='fw-semibold text-center pt-2'>Mac</p>
          </div>
          {/* repeat for other items */}
        </div>

        {/* Mobile / Tablet view */}
        <div className='d-md-none'>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='text-center'>
                <img src="https://store.storeimages..." className='img-fluid' />
                <p className='fw-semibold text-center pt-2'>Mac</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-center'>
                <img src="https://store.storeimages..." className='img-fluid' />
                <p className='fw-semibold text-center pt-2'>iPhone</p>
              </div>
            </SwiperSlide>
            {/* Repeat SwiperSlide for other items */}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Store