'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { TbMenu } from 'react-icons/tb';
import { IoBagOutline } from 'react-icons/io5';
// import { IoIosSearch } from 'react-icons/io';
import { BsApple } from "react-icons/bs";

// Import global CSS (you'll need to create this file in your project)
// import '../styles/Navbar.css';

export const Navbar = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    import('jquery').then(($) => {
      $('.dropdown-toggle').on('click', function (e) {
        const $el = $(this).next('.dropdown-menu');
        const isVisible = $el.is(':visible');
        $('.dropdown-menu').hide();
        if (!isVisible) {
          $el.show();
        }
        e.preventDefault();
      });

      $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
          $('.dropdown-menu').hide();
        }
      });
    });
  }, []);

  return (
    <>
      <div className="navbar container-fluid px-5">
        <nav className="navbar-expand-lg container px-3 px-md-4">
          {/* Logo */}
          <Link href="/" className="navbar-brand me-3">
            <BsApple width={17} height={17} />
          </Link>

          {/* Icons for small screens */}
          <div className="d-lg-none ms-auto mt-2 mt-lg-0">
            <Link href="/Cart" className='text-decoration-none text-dark'>
              <IoBagOutline size={20} className="me-3" />
            </Link>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarlink"
            aria-controls="navbarlink"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <TbMenu size={20} />
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarlink">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link href="/Store" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="storeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Store
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Product">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Product">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Product">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Product">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Product">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Product">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Product">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Product">Find a Store</Link>
                        <Link className="dropdown-item" href="/Product">Order Status</Link>
                        <Link className="dropdown-item" href="/Product">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Product">Financing</Link>
                        <Link className="dropdown-item" href="/Product">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Product">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Product">Education</Link>
                        <Link className="dropdown-item" href="/Product">Business</Link>
                        <Link className="dropdown-item" href="/Product">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Product">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Mac" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="macDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mac
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Store">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Store">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Store">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Store">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Store">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Store">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Store">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Store">Find a Store</Link>
                        <Link className="dropdown-item" href="/Store">Order Status</Link>
                        <Link className="dropdown-item" href="/Store">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Store">Financing</Link>
                        <Link className="dropdown-item" href="/Store">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Store">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Store">Education</Link>
                        <Link className="dropdown-item" href="/Store">Business</Link>
                        <Link className="dropdown-item" href="/Store">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Store">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Ipad" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="ipadDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  iPad
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Ipad">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Ipad">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Ipad">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Ipad">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Ipad">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Ipad">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Ipad">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Ipad">Find a Store</Link>
                        <Link className="dropdown-item" href="/Ipad">Order Status</Link>
                        <Link className="dropdown-item" href="/Ipad">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Ipad">Financing</Link>
                        <Link className="dropdown-item" href="/Ipad">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Ipad">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Ipad">Education</Link>
                        <Link className="dropdown-item" href="/Ipad">Business</Link>
                        <Link className="dropdown-item" href="/Ipad">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Ipad">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Iphone" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="iphoneDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  iPhone
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Iphone">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Iphone">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Iphone">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Iphone">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Iphone">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Iphone">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Iphone">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Iphone">Find a Store</Link>
                        <Link className="dropdown-item" href="/Iphone">Order Status</Link>
                        <Link className="dropdown-item" href="/Iphone">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Iphone">Financing</Link>
                        <Link className="dropdown-item" href="/Iphone">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Iphone">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Iphone">Education</Link>
                        <Link className="dropdown-item" href="/Iphone">Business</Link>
                        <Link className="dropdown-item" href="/Iphone">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Iphone">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Watch" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="watchDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Watch
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Watch">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Watch">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Watch">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Watch">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Watch">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Watch">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Watch">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Watch">Find a Store</Link>
                        <Link className="dropdown-item" href="/Watch">Order Status</Link>
                        <Link className="dropdown-item" href="/Watch">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Watch">Financing</Link>
                        <Link className="dropdown-item" href="/Watch">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Watch">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Watch">Education</Link>
                        <Link className="dropdown-item" href="/Watch">Business</Link>
                        <Link className="dropdown-item" href="/Watch">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Watch">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/vision" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="visionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Vision
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Vision">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Vision">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Vision">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Vision">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Vision">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Vision">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Vision">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Vision">Find a Store</Link>
                        <Link className="dropdown-item" href="/Vision">Order Status</Link>
                        <Link className="dropdown-item" href="/Vision">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Vision">Financing</Link>
                        <Link className="dropdown-item" href="/Vision">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Vision">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Vision">Education</Link>
                        <Link className="dropdown-item" href="/Vision">Business</Link>
                        <Link className="dropdown-item" href="/Vision">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Vision">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/AirPods" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="airpodsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  AirPods
                </Link>
                <div className="dropdown-menu border-0 mt-0 p-3" aria-labelledby="airpodsDropdown">
                  <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                    <div className="container">
                      <div className="row">
                        {/* Column 1: Shop */}
                        <div className="col-12 col-md-4 mb-3">
                          <h6 className="text-uppercase text-muted">Shop</h6>
                          <Link className="dropdown-item fw-bold" href="/AirPods">Shop the Latest</Link>
                          <Link className="dropdown-item fw-bold" href="/AirPods">Mac</Link>
                          <Link className="dropdown-item fw-bold" href="/AirPods">iPad</Link>
                          <Link className="dropdown-item fw-bold" href="/AirPods">iPhone</Link>
                          <Link className="dropdown-item fw-bold" href="/AirPods">Apple Watch</Link>
                          <Link className="dropdown-item fw-bold" href="/AirPods">Apple Vision Pro</Link>
                          <Link className="dropdown-item fw-bold" href="/AirPods">Accessories</Link>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="col-12 col-md-4 mb-3">
                          <h6 className="text-uppercase text-muted">Quick Links</h6>
                          <Link className="dropdown-item" href="/AirPods">Find a Store</Link>
                          <Link className="dropdown-item" href="/AirPods">Order Status</Link>
                          <Link className="dropdown-item" href="/AirPods">Apple Trade In</Link>
                          <Link className="dropdown-item" href="/AirPods">Financing</Link>
                          <Link className="dropdown-item" href="/AirPods">Personal Setup</Link>
                        </div>

                        {/* Column 3: Shop Special Stores */}
                        <div className="col-12 col-md-4 mb-3">
                          <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                          <Link className="dropdown-item" href="/AirPods">Certified Refurbished</Link>
                          <Link className="dropdown-item" href="/AirPods">Education</Link>
                          <Link className="dropdown-item" href="/AirPods">Business</Link>
                          <Link className="dropdown-item" href="/AirPods">Veterans and Military</Link>
                          <Link className="dropdown-item" href="/AirPods">Government</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Tv_Home" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="tvhomeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TV & Home
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Tv_Home">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Tv_Home">Find a Store</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Order Status</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Financing</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Tv_Home">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Education</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Business</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Tv_Home">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Entertainment" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="entertainmentDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Entertainment
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Entertainment">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Entertainment">Find a Store</Link>
                        <Link className="dropdown-item" href="/Entertainment">Order Status</Link>
                        <Link className="dropdown-item" href="/Entertainment">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Entertainment">Financing</Link>
                        <Link className="dropdown-item" href="/Entertainment">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Entertainment">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Entertainment">Education</Link>
                        <Link className="dropdown-item" href="/Entertainment">Business</Link>
                        <Link className="dropdown-item" href="/Entertainment">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Entertainment">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Accessories" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="accessoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Accessories
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Accessories">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Accessories">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Accessories">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Accessories">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Accessories">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Accessories">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Accessories">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Accessories">Find a Store</Link>
                        <Link className="dropdown-item" href="/Accessories">Order Status</Link>
                        <Link className="dropdown-item" href="/Accessories">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Accessories">Financing</Link>
                        <Link className="dropdown-item" href="/Accessories">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Accessories">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Accessories">Education</Link>
                        <Link className="dropdown-item" href="/Accessories">Business</Link>
                        <Link className="dropdown-item" href="/Accessories">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Accessories">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Support" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="supportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Support
                </Link>
                <div className="dropdown-menu container-fluid border-0 mt-0 p-3" aria-labelledby="storeDropdown">
                  <div className="container">
                    <div className="row">
                      {/* Column 1: Shop */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop</h6>
                        <Link className="dropdown-item fw-bold" href="/Support">Shop the Latest</Link>
                        <Link className="dropdown-item fw-bold" href="/Support">Mac</Link>
                        <Link className="dropdown-item fw-bold" href="/Support">iPad</Link>
                        <Link className="dropdown-item fw-bold" href="/Support">iPhone</Link>
                        <Link className="dropdown-item fw-bold" href="/Support">Apple Watch</Link>
                        <Link className="dropdown-item fw-bold" href="/Support">Apple Vision Pro</Link>
                        <Link className="dropdown-item fw-bold" href="/Support">Accessories</Link>
                      </div>

                      {/* Column 2: Quick Links */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Quick Links</h6>
                        <Link className="dropdown-item" href="/Support">Find a Store</Link>
                        <Link className="dropdown-item" href="/Support">Order Status</Link>
                        <Link className="dropdown-item" href="/Support">Apple Trade In</Link>
                        <Link className="dropdown-item" href="/Support">Financing</Link>
                        <Link className="dropdown-item" href="/Support">Personal Setup</Link>
                      </div>

                      {/* Column 3: Shop Special Stores */}
                      <div className="col-12 col-md-4 mb-3">
                        <h6 className="text-uppercase text-muted">Shop Special Stores</h6>
                        <Link className="dropdown-item" href="/Support">Certified Refurbished</Link>
                        <Link className="dropdown-item" href="/Support">Education</Link>
                        <Link className="dropdown-item" href="/Support">Business</Link>
                        <Link className="dropdown-item" href="/Support">Veterans and Military</Link>
                        <Link className="dropdown-item" href="/Support">Government</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            </ul>

            {/* Icons for large screens */}
            <div className="d-none d-lg-flex me-2">
              <Link href="/Cart" className='text-decoration-none text-dark'>
                <IoBagOutline size={20} className="me-3" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};