'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="container-fluid px-0">
      {/* Watch */}
      <Link href="/Watch" className='text-decoration-none'>
        <div
          className="d-flex w-100 justify-content-center mb-3"
          style={{
            backgroundImage: "url('https://www.apple.com/v/home/cd/images/heroes/apple-watch-series-10/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_largetall_2x.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "400px",
            maxHeight: "800px",
            height: "80vh",
          }}
        >
          <div className="text-center" style={{ width: "100%", height: "100px" }}>
            <img
              src="/Images/Home-page-image/hero watch header.png"
              alt="Watch Header"
              className="img-fluid mb-3"
              style={{ width: "500px", height: "80px", objectFit: "contain" }}
            />
            <p className="text-dark display-6">Thinstant classic</p>
            <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
            <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Buy</button>
          </div>
        </div>
      </Link>

      {/* Ipad */}
      <Link href="/Ipad" className='text-decoration-none'>
        <div className="d-flex w-100 justify-content-center mb-3"
          style={{
            backgroundImage: "url('/Images/Home-page-image/hero ipad pro.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "400px",
            maxHeight: "800px",
            height: "80vh",
          }}
        >
          <div className="text-center pt-4">
            <p className="text-light fw-bold display-1">iPad Pro</p>
            <p className="text-light display-5">Unbelievely thin. Incredibly Powerful</p>
            <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
            <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Buy</button>
          </div>
        </div>
      </Link>

      {/* Iphone */}
      <Link href="/Iphone" className='text-decoration-none'>
        <div className="d-flex w-100 justify-content-center mb-3"
          style={{
            backgroundImage: "url('https://www.apple.com/v/home/cd/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "400px",
            maxHeight: "800px",
            height: "80vh",
          }}
        >
          <div className="text-center pt-4">
            <p className="text-dark fw-bold display-3">iPhone</p>
            <p className="text-dark display-6">Meet the iPhone 16 family</p>
            <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
            <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
          </div>
        </div>
      </Link>

      {/* Mothers day and macbook */}
      <div className="container-fluid row align-items-center px-0 mb-2">
        <Link href="/Store" className="col-12 col-sm-12 col-md-6 col-lg-6 pe-0 text-decoration-none">
          <div>
            <div className="d-flex w-100 justify-content-center mb-2"
              style={{
                backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/mothers-day-2025/promo_md25__ctgnskbynamq_large_2x.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
                maxHeight: "800px",
                height: "80vh",
                width: "100%"
              }}
            >
              <div className="d-flex justify-content-center align-items-end h-100 pb-5">
                <div className="text-center pt-4">
                  <p className="text-dark display-5">Mothers Day</p>
                  <p className="text-dark display-6">Find the perfect gift for mom</p>
                  <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                  <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/Mac" className="col-12 col-sm-12 col-md-6 col-lg-6 pe-0 text-decoration-none">
          <div>
            <div className="d-flex w-100 justify-content-center mb-2"
              style={{
                backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/macbook-air/promo_macbook_air_avail__e8ksaudoisey_large_2x.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
                maxHeight: "800px",
                height: "80vh",
              }}
            >
              <div className="text-center pt-4">
                <p className="text-dark fw-bold display-5">MacBook</p>
                <p className="text-dark fs-4 text-center">Sky blue colour <br /> Sky high performance with M4</p>
                <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* mac does that  &  Trade in*/}
      <div className="container-fluid row align-items-center px-0 mb-2">
        <Link href="/Mac/Mac-does-that" className="col-12 col-sm-12 col-md-6 col-lg-6 px-1 text-decoration-none">
          <div>
            <div className="d-flex w-100 justify-content-center mb-2"
              style={{
                backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/mac-does-that/promo_mac_does_that__ckozfqcs65w2_small_2x.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
                maxHeight: "800px",
                height: "80vh",
                width: "100%"
              }}
            >
              <div className="d-flex justify-content-center h-100 pb-5">
                <div className="text-center pt-4">
                  <img
                    src="https://www.apple.com/v/home/cd/images/logos/mac-does-that/promo_logo_mac_does_that__clw0vbszi002_small_2x.png"
                    alt="Watch Header"
                    className="img-fluid mb-3"
                    style={{ width: "250px", height: "80px", objectFit: "contain" }}
                  />
                  <p className="text-dark fs-4 text-center fw-bold">See how easy it is to switch mac</p>
                  <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#" className="col-12 col-sm-12 col-md-6 col-lg-6 pe-0 text-decoration-none">
          <div>
            <div className="d-flex w-100 justify-content-center mb-2"
              style={{
                backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small_2x.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
                maxHeight: "800px",
                height: "80vh",
              }}
            >
              <div className="text-center pt-4">
                <img src="https://www.apple.com/v/home/cd/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_small_2x.png" alt="chnage header" className="img-fluid mb-3" style={{ width: "250px", height: "80px", objectFit: "contain" }}></img>
                <p className="text-dark fs-4 text-center fw-semibold">get $170-$630 in credit when you <br />trade in iPhone 12 or higher <sup>1</sup></p>
                <button className="btn btn-primary rounded-pill me-3" style={{ padding: "10px 20px" }}>Get Your estimate</button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* deals and cards */}
      <div className="container-fluid row align-items-center px-0 mb-2">
        <Link href="/Iphone/Carrier-offer" className="col-12 col-sm-12 col-md-6 col-lg-6 pe-0 text-decoration-none">
          <div>
            <div className="d-flex w-100 justify-content-center mb-2"
              style={{
                backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/carriers/promo_carrier__e0izvxwqosgi_small_2x.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
                maxHeight: "800px",
                height: "80vh",
                width: "100%"
              }}
            >
              <div className="d-flex justify-content-center align-items-end h-100 pb-5">
                <div className="text-center pt-4">
                  <p className="text-dark display-5 fw-bold">Carrier deals at Apple</p>
                  <p className="text-dark fw-semibold fs-4">Get Upto $1000 in credit on <br /> A new iPhone Trade-in may <br /> be required <sup>2</sup></p>
                  <button className="btn btn-primary rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                  <button className="btn btn-outline-primary rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Shop iPhone</button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#" className="col-12 col-sm-12 col-md-6 col-lg-6 pe-0 text-decoration-none">
          <div>
            <div className="d-flex w-100 justify-content-center mb-2"
              style={{
                backgroundImage: "url('https://www.apple.com/v/home/cd/images/promos/apple-card-gradient/promo_apple_card_gradient__f2e2582vf1u2_large_2x.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
                maxHeight: "800px",
                height: "80vh",
              }}
            >
              <div className="text-center pt-4">
                <img src="https://www.apple.com/v/home/cd/images/logos/apple-card-gradient/promo_logo_apple_card_gradient__xzbd54d7l4ye_large_2x.png" alt="chnage header" className="img-fluid mb-3" style={{ width: "250px", height: "80px", objectFit: "contain" }}></img>
                <p className="text-dark fs-4 text-center">Get Upto 3% Daily cash back <br /> with every purchase</p>
                <button className="btn btn-dark rounded-pill me-3 fw-bold" style={{ padding: "10px 20px" }}>Learn More</button>
                <button className="btn btn-outline-dark rounded-pill fw-bold" style={{ padding: "10px 20px" }}>Apply Now</button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Slider */}
      <div className="container-fluid" style={{ width: "100%", height: "auto", maxHeight: "800px", paddingBottom: "20px" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true, paddingBottom: "-70px" }}
          // autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.3 },
            992: { slidesPerView: 1.5 },
            1200: { slidesPerView: 1.5 },
          }}
        >
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/hjmYsl20uNCFQ9sqjiQIYw/1378x774.jpg" className="img-fluid" alt="Slide 1" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/1378x774.jpg" className="img-fluid" alt="Slide 2" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/1378x774.jpg" className="img-fluid" alt="Slide 3" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/mlNnLrkeXFsJh7QVz4ZMsg/1378x774.jpg" className="img-fluid" alt="Slide 4" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Features/v4/b9/6c/68/b96c68d2-3728-e602-6e19-2ce0157335c1/284c3b0a-d043-4797-b7c8-23d6e8a981ab.png/1378x774.jpg" className="img-fluid" alt="Slide 5" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg" className="img-fluid" alt="Slide 6" style={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
}
