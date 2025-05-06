'use client';

// import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { TbMenu } from 'react-icons/tb';
import { IoBagOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { BsApple } from "react-icons/bs";

export const Navbar = () => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
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
            <button className="btn p-0 me-3" data-bs-toggle="modal" data-bs-target="#searchModal" aria-label="Open search">
              <IoIosSearch size={20} />
            </button>
            <IoBagOutline size={20} className="me-3" />
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
              <li className="nav-item">
                <Link href="/Store" className="nav-link text-muted px-5 px-lg-3">Store</Link>
              </li>
              <li className="nav-item">
                <Link href="/Mac" className="nav-link text-muted px-5 px-lg-3">Mac</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ipad" className="nav-link text-muted px-5 px-lg-3">iPad</Link>
              </li>
              <li className="nav-item">
                <Link href="/Iphone" className="nav-link text-muted px-5 px-lg-3">iPhone</Link>
              </li>
              <li className="nav-item">
                <Link href="/Watch" className="nav-link text-muted px-5 px-lg-3">Watch</Link>
              </li>
              <li className="nav-item">
                <Link href="/vision" className="nav-link text-muted px-5 px-lg-3">Vision</Link>
              </li>
              <li className="nav-item">
                <Link href="/AirPods" className="nav-link text-muted px-5 px-lg-3">AirPods</Link>
              </li>
              <li className="nav-item">
                <Link href="/Tv_Home" className="nav-link text-muted px-5 px-lg-3">TV & Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/Entertainment" className="nav-link text-muted px-5 px-lg-3">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link href="/Accessories" className="nav-link text-muted px-5 px-lg-3">Accessories</Link>
              </li>
              <li className="nav-item">
                <Link href="/Support" className="nav-link text-muted px-5 px-lg-3">Support</Link>
              </li>
            </ul>

            {/* Icons for large screens */}
            <div className="d-none d-lg-flex me-2">
              <button className="btn p-0 me-3" data-bs-toggle="modal" data-bs-target="#searchModal" aria-label="Open search">
                <IoIosSearch size={20} />
              </button>
              <IoBagOutline size={20} className="me-3" />
            </div>
          </div>
        </nav>
      </div>

      {/* Simple Styling */}
      <style jsx global>{`
        .navbar {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1055;
          width: 100%;
        }

        body {
          padding-top: 70px;
        }

        .navbar-nav .nav-link {
          font-size: 14px;
          color: #333333 !important;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color:rgba(255, 255, 255, 0);
            padding: 1rem;
            border-radius: 0.5rem;
          }
          .navbar-nav .nav-link {
            font-size: 1.5rem;
            font-weight: 500;
            padding: 0.5rem 1rem !important;
          }
          .navbar-nav .nav-item {
            text-align: center;
          }
        }

        .modal-content {
          border-radius: 0.5rem;
        }
        .modal-body .input-group {
          border-bottom: 1px solid #dee2e6;
        }
        .modal-body .form-control {
          box-shadow: none;
        }
      `}</style>
    </>
  );
};
