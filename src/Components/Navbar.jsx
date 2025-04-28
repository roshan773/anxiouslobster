'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TbMenu } from 'react-icons/tb';
import { IoBagOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

export const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Dynamically import Bootstrap JS only if needed
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg container">

                    {/* Logo */}
                    <Link href="/" className="me-3 ms-3">
                        <Image src="/Images/logo.png" alt="Apple Logo" width={17} height={17} />
                    </Link>

                    {/* Icons for small screens */}
                    <div className="d-flex d-lg-none ms-auto">
                        <IoIosSearch size={20} className="me-3" />
                        <IoBagOutline size={20} className="me-3" />
                    </div>

                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarlink" onClick={toggleModal}>
                        <TbMenu />
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarlink">
                        <ul className="navbar-nav mx-auto">

                            {/* Menu Links */}
                            <li className="nav-item">
                                <Link href="/Store" className="nav-link text-muted me-4 ms-4">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Mac" className="nav-link text-muted me-4 ms-4">Mac</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Ipad" className="nav-link text-muted me-4 ms-4">iPad</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Iphone" className="nav-link text-muted me-4 ms-4">iPhone</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Watch" className="nav-link text-muted me-4 ms-4">Watch</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/vision" className="nav-link text-muted me-4 ms-4">Vision</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/AirPods" className="nav-link text-muted me-4 ms-4">AirPods</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Tv_Home" className="nav-link text-muted me-4 ms-4">TV & Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Entertainment" className="nav-link text-muted me-4 ms-4">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Accessories" className="nav-link text-muted me-4 ms-4">Accessories</Link>
                            </li>

                        </ul>

                        {/* Icons for large screens */}
                        <div className="d-none d-lg-flex ms-auto">
                            <IoIosSearch size={20} className="me-3" />
                            <IoBagOutline size={20} className="me-3" />
                        </div>

                    </div>
                </nav>
            </div>

            {isModalOpen && (
                <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div className="modal-dialog modal-fullscreen-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Menu</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <ul className="navbar-nav mx-auto">

                                    {/* Menu Links */}
                                    <li className="nav-item">
                                        <Link href="/Store" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">Store</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Mac" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">Mac</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Ipad" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">iPad</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Iphone" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">iPhone</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Watch" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">Watch</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/vision" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">Vision</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/AirPods" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">AirPods</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Tv_Home" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">TV & Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Entertainment" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Accessories" className="nav-link fw-bold fs-3 text-muted me-4 ms-4">Accessories</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
