'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { TbMenu } from 'react-icons/tb';
import { IoBagOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
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
                <Link href="/Ipad" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="ipadDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  iPad
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
                <Link href="/Iphone" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="iphoneDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  iPhone
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
                <Link href="/Watch" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="watchDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Watch
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
                <Link href="/vision" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="visionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Vision
                </Link>
                <div className="dropdown-menu border-0 mt-0 p-3" aria-labelledby="visionDropdown">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/vision/new">New Vision</Link>
                        <Link className="dropdown-item" href="/vision/featured">Featured</Link>
                      </div>
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/vision/offers">Offers</Link>
                        <Link className="dropdown-item" href="/vision/info">More Info</Link>
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
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/AirPods/new">New AirPods</Link>
                        <Link className="dropdown-item" href="/AirPods/featured">Featured</Link>
                      </div>
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/AirPods/offers">Offers</Link>
                        <Link className="dropdown-item" href="/AirPods/info">More Info</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Tv_Home" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="tvhomeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TV & Home
                </Link>
                <div className="dropdown-menu border-0 mt-0 p-3" aria-labelledby="tvhomeDropdown">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Tv_Home/new">New TV & Home</Link>
                        <Link className="dropdown-item" href="/Tv_Home/featured">Featured</Link>
                      </div>
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Tv_Home/offers">Offers</Link>
                        <Link className="dropdown-item" href="/Tv_Home/info">More Info</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Entertainment" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="entertainmentDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Entertainment
                </Link>
                <div className="dropdown-menu border-0 mt-0 p-3" aria-labelledby="entertainmentDropdown">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Entertainment/new">New Entertainment</Link>
                        <Link className="dropdown-item" href="/Entertainment/featured">Featured</Link>
                      </div>
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Entertainment/offers">Offers</Link>
                        <Link className="dropdown-item" href="/Entertainment/info">More Info</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Accessories" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="accessoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Accessories
                </Link>
                <div className="dropdown-menu border-0 mt-0 p-3" aria-labelledby="accessoriesDropdown">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Accessories/new">New Accessories</Link>
                        <Link className="dropdown-item" href="/Accessories/featured">Featured</Link>
                      </div>
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Accessories/offers">Offers</Link>
                        <Link className="dropdown-item" href="/Accessories/info">More Info</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/Support" className="nav-link dropdown-toggle text-muted px-5 px-lg-3" id="supportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Support
                </Link>
                <div className="dropdown-menu border-0 mt-0 p-3" aria-labelledby="supportDropdown">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Support/new">New Support</Link>
                        <Link className="dropdown-item" href="/Support/featured">Featured</Link>
                      </div>
                      <div className="col-6 col-md-3">
                        <Link className="dropdown-item" href="/Support/offers">Offers</Link>
                        <Link className="dropdown-item" href="/Support/info">More Info</Link>
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