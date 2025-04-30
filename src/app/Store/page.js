'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';


const Store = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#f5f5f7" }}>
      <div className="container-fluid" style={{ backgroundColor: "#f5f5f7" }}>
        <div className="row">
          {/* Left Text Block */}
          <div className="col-12 col-lg-8 px-5 px-sm-5 py-5">
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
      <div className='container-fluid pb-5'>

        {/* Mobile / Tablet view */}
        <div className='px-5'>
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
                slidesPerView: 11,
              },
            }}
          >
            <SwiperSlide>
              <Link href="/Mac" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4VEpBUDFBeEhMZS9GUnNSYXdEd0hscisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazVVcFlOTkdoMWg4ZkdDS1ovMUlzcW8" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Mac</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/Iphone" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202502_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXMGIwbkQ3THNNRjRsZmFuY3ZnUksrQTA2bGFaODVwaytiT1psSXc2dlhUWUwyZnhVM3hmakh4cEVIbk1pcnBIRXFpaVlBSTdOOXplUDUwZUNmQnR2OUxuakp5ZFBaaHhUOUJXVGFwbk9vT2k" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>iPhone</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/Ipad" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Ipad</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/Watch" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkNDJNVmlnVytwalkvOTJ2M1BKWUREdkh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2oxdUo4aWtyK05IRkZuWjBWbW5HM00" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Apple Watch</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/vision" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=VzVpanYvTldHb05iVXFhc0xveWRLM25jd0w4dXFwc1hFbWZkNm9IcUR2bytSMWt1ZUNyTGx4SjRKL1pSL0ZDeGpCeVFkSWhuN0RJazJDeHBqaFFac0hlZzcwajlwb1R2dHNlazl1dldSUGQ5RzBLTDk5c25YRG5wR2ZpUlI4RFM" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Apple Vision pro</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/AirPods" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yNlJ5eGFhR1FVd2NNNDB0VWRUSzVCUFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFI0R1M4eFpKRTFIclV0ZHRqakVRd1k" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>AirPods</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/AirTags" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFpQclc0OVE3cmhmS3FBaXd6cG8yYzg" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>AirTags</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="Apple-Tv" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Apple TV 4K</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/HomePod" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>HomePod</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/Accessories" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUJGVHdnWkxMaklDeW9JYU5tT3FWeVBrcjVFNVdueFRVbVY3TGtiL2RjUVhQYS92MS9scmN4eTZLbFFkMHVzTVhuL2FLN3hwSUJhbzdFUHltVU1ldnQ" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Accessories</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/Apple-gift-card" className='text-decoration-none text-dark'>
                <div className='col-12'>
                  <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpWWJZU3c1a04rNW9Zem5ScTRJL25qWnlvS2lBUzZZRytsa2hkcGtRYVFoZnJYVFd2aTZFN3pZenpyR0NkbGY4em93Y2tIU0laK3d5Sk5nc2FZNFVHYkJPaG9jNFJLV2crNENpUkQzZ3ZTOHBSOW02S2NIS2N2ZkNWTVZOSXFRUmln" className='img-fluid' style={{ width: "100%", height: "100px" }} />
                  <p className='fw-semibold text-center pt-2'>Apple Gift Card</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='container-fluid pb-5'>
        <h2 className="fw-semibold px-5 pb-3" style={{ color: "#1d1d1f" }}>
          The Latest <span style={{ color: "#6e6e73" }}>The best way to buy the products you love.</span>
        </h2>

        <div className='px-5 w-100 h-100'>
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
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkajF3MG5PcHVmRWhQRExwVUtFQkcwWW1BelFXU2p4MWRtenZxUWJQMFBjZHYvU3JjZHd1MTRSd0VqZnNnTGdmZm5iK1pDOUhGUndCdU1wTE1NVU4wUlFNV252bk94RGJYcUs5ZUY5bW9yM09R" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409_FMT_WHH?wid=658&hei=900&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vcVBRU1l6NWZ4bGNiRk9SbVJMSE5KaGJiQm5IUm5NVFEwaDBLS0k4K09xemE1eG5Fd2NwV0VQUmdyZWJCVnpUaldzdWpkcm9jZ05YWFNHZEgxUHQzWXU2UnlGQnVTQ1djbHRyRk9QS0l6MWM" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXS21MblVINU94UkJ1dVd0ZFZReHpQNUp4SThTYklxTWU2d3hqeTF4dktKcVRyV0V0R0laTXFOYW9QRER2T1NmMTFldExzQVlkdmJLcDJINVJ6REVsSVR4TVAyMnRiazNWaWJGQkNyUSs4K3Y" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://www.apple.com/v/home/cd/images/promos/macbook-air/promo_macbook_air_avail__e8ksaudoisey_large_2x.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://i.ytimg.com/vi/GDlkCkcIqTs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAFpFHzEKCTxBA2MNIb3OCcht5L7A" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://imgsrv2.voi.id/QgRDf3g5EXeP1Fm5b8_jQmYztBHBID8iR57kQL53OMg/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80NDc2NzgvMjAyNTAxMDIxODEwLW1haW4uY3JvcHBlZF8xNzM1ODE2MjM3LmpwZWc.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://images.indianexpress.com/2024/05/apple-ipad-air-m2.jpg" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="https://www.maclocks.eu/media/webp_image/catalog/product/cache/e8c806768f56607e7fab287bfa6892d3/m/a/mac-studio-desktop-stand-06.webp" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='container-fluid pb-5'>
        <h2 className="fw-semibold px-5 pb-3" style={{ color: "#ff3c26" }}>
          Accessories <span style={{ color: "#6e6e73" }}>Put a bow on Mother’s Day.</span>
        </h2>

        <div className='px-5 w-100 h-100'>
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
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss1.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss2.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss3.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss4.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss5.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss6.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100%", height: "auto" }}>
              <Link href="/Product">
                <img src="/Images/Store-page-image/ss7.png" className='img-fluid' style={{ borderRadius: "20px", width: "100%", height: "600px", objectFit: "cover" }}></img>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default Store