'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { TbMenu } from 'react-icons/tb';
import { IoBagOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

export const Navbar = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <div className="navbar container-fluid px-0">
        <nav className="navbar-expand-lg container px-3 px-md-4">
          {/* Logo */}
          <Link href="/" className="navbar-brand me-3">
            <Image src="/Images/logo.png" alt="Apple Logo" width={17} height={17} priority />
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
                <Link href="/Store" className="nav-link text-muted px-2 px-lg-3">Store</Link>
              </li>
              <li className="nav-item">
                <Link href="/Mac" className="nav-link text-muted px-2 px-lg-3">Mac</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ipad" className="nav-link text-muted px-2 px-lg-3">iPad</Link>
              </li>
              <li className="nav-item">
                <Link href="/Iphone" className="nav-link text-muted px-2 px-lg-3">iPhone</Link>
              </li>
              <li className="nav-item">
                <Link href="/Watch" className="nav-link text-muted px-2 px-lg-3">Watch</Link>
              </li>
              <li className="nav-item">
                <Link href="/vision" className="nav-link text-muted px-2 px-lg-3">Vision</Link>
              </li>
              <li className="nav-item">
                <Link href="/AirPods" className="nav-link text-muted px-2 px-lg-3">AirPods</Link>
              </li>
              <li className="nav-item">
                <Link href="/Tv_Home" className="nav-link text-muted px-2 px-lg-3">TV & Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/Entertainment" className="nav-link text-muted px-2 px-lg-3">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link href="/Accessories" className="nav-link text-muted px-2 px-lg-3">Accessories</Link>
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

      {/* Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100 text-center" id="searchModalLabel">Search</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-text bg-white border-0">
                  <IoIosSearch size={20} />
                </span>
                <input type="text" className="form-control border-0" placeholder="Search Apple.com" aria-label="Search" />
              </div>
              <ul className="list-unstyled mt-3">
                <li><Link href="/search/mac" className="text-muted text-decoration-none d-block py-1">Mac</Link></li>
                <li><Link href="/search/iphone" className="text-muted text-decoration-none d-block py-1">iPhone</Link></li>
                <li><Link href="/search/watch" className="text-muted text-decoration-none d-block py-1">Watch</Link></li>
              </ul>
            </div>
          </div>
        </div>
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

        .navbar-nav .nav-link:hover {
          color: #007bff !important;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: #ffffff;
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
