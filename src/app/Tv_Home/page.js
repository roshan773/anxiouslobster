'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const Tv_Home = () => {
    return (
        <div className='container-fluid'>
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
                            slidesPerView: 7,
                        },
                    }}
                >
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/apple_tv4k_fill_light__b2wtl9srjwb6_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>Apple Tv 4K</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/apple_tv_app_light__f6s7yq5zej2a_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>Apple Tv App</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/apple_tv_plus_light__fjwmgqxuwomu_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>Apple TV+</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/homepod_light__b9tveb5xovhy_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>HomePod</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/homepodmini_light__genrqjukfl26_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>HomePod mini</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/homekit_light__bu42vvqsjaj6_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>Home App</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='col-1' style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Link href="/Product" className='text-decoration-none'>
                            <img
                                src="https://www.apple.com/v/tv-home/o/images/chapternav/light/home_accessories_light__eu5v1y6592eu_large.svg"
                                className='img-fluid'
                                style={{ borderRadius: "20px", width: "150px", height: "65px", objectFit: "contain" }} // Standardized size
                            />
                            <p className='text-center text-dark'>Accessories</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='container-fluid pb-5' style={{ backgroundColor: "#f5f5f7" }}>
                <div className='container'>
                    <Link href="/Product" className='text-decoration-none'>
                        <div style={{ borderRadius: "20px", objectFit: "cover" }}>
                            <img src="https://www.apple.com/v/tv-home/o/images/overview/hero__dbphk49ymi2q_large_2x.jpg" className='img-fluid w-100 px-5 py-4 w-50'></img>
                        </div>
                        <div className='display-1 fw-semibold text-dark text-center'>
                            The future hits home.
                        </div>
                        <div className='fs-4 text-muted fw-bold text-center'>
                            Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.
                        </div>
                    </Link>
                </div>
            </div>

            <div className='container-fluid pt-5' style={{ backgroundColor: "#f5f5f7" }}>
                <div className='container'>
                    <div className="container-fluid py-5 px-3">
                        <div className="row g-4">
                            <div className="col-12 col-md-6">
                                <img
                                    src="/Images/Tv_home-page-image/ss1.png"
                                    alt="TV Home Image 1"
                                    className="img-fluid w-100 rounded-4"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <img
                                    src="/Images/Tv_home-page-image/ss2.png"
                                    alt="TV Home Image 2"
                                    className="img-fluid w-100 rounded-4"
                                />
                            </div>
                        </div>
                        <div className="row g-4 pt-4">
                            <div className="col-12 col-md-6">
                                <img
                                    src="/Images/Tv_home-page-image/ss3.png"
                                    alt="TV Home Image 1"
                                    className="img-fluid w-100 rounded-4"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <img
                                    src="/Images/Tv_home-page-image/ss4.png"
                                    alt="TV Home Image 2"
                                    className="img-fluid w-100 rounded-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid' style={{ backgroundColor: "#f5f5f7" }}>
                <div className='container text-center'>
                    <div className='display-2 fw-semibold'>
                        Every reason to turn your house into a smart home.
                    </div>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss5.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss6.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss7.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss8.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid py-5' style={{ backgroundColor: "#f5f5f7" }}>
                <div className='container text-center'>
                    <div className='display-2 fw-semibold'>
                        Accessories. Around your home and across your devices.
                    </div>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss9.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss10.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss11.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <Link href="/Product">
                                <img className='img-fluid' src="/Images/Tv_home-page-image/ss12.png" style={{ width: "100%", height: "450px", borderRadius: "30px" }}></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid py-5' style={{ backgroundColor: "#f5f5f7" }}>
                <div className='container text-center'>
                    <div className='display-2 fw-semibold'>
                        Watch, sing, play, and work out.
                        On the big screen.

                    </div>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link href="/Product">
                                <img className='img-fluid w-100' src="/Images/Tv_home-page-image/ss13.png"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tv_Home