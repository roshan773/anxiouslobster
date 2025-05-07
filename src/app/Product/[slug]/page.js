"use client";

import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Description = () => {
    const params = useParams();
    const slug = params?.slug;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/Product/${slug}`);
            setData(res.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching product:", error);
            setError("Failed to load product. Please try again.");
        }
    };

    useEffect(() => {
        if (slug) {
            getSingleProduct();
        }
    }, [slug]);

    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light min-vh-100">
            <Head>
                <title>{data.title || "Product"} - Apple</title>
                <meta name="description" content={data.description || "Discover the latest Apple products."} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="position-relative" style={{ height: '400px' }}>
                            {data.productImage ? (
                                <img
                                    src={data.productImage}
                                    alt={data.title || "Product"}
                                    className='img-fluid'
                                />
                            ) : (
                                <div className="bg-secondary h-100 d-flex align-items-center justify-content-center">
                                    <span className="text-white">Image Not Available</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="display-5 fw-bold mb-3">{data.title || "Product Title"}</h1>
                        <p className="lead text-muted mb-4">{data.description || "No description available."}</p>
                        <p className="fs-4 fw-semibold mb-4">
                            From ${data.price || "N/A"} or {data.monthly || "N/A"}
                        </p>
                        {data.colors && Array.isArray(data.colors) && (
                            <div className="mb-4">
                                <p className="fw-semibold">Available Colors:</p>
                                <div className="d-flex gap-2">
                                    {data.colors.map((color, index) => (
                                        <span
                                            key={index}
                                            className="d-inline-block rounded-circle border border-secondary"
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                backgroundColor: color.toLowerCase(),
                                            }}
                                            title={color}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {data.specs && (
                            <div className="mb-4">
                                <p className="fw-semibold">Specifications:</p>
                                <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>
                                    {data.specs}
                                </p>
                            </div>
                        )}
                        {data.ports && (
                            <div className="mb-4">
                                <p className="fw-semibold">Ports:</p>
                                <p className="text-muted">{data.ports}</p>
                            </div>
                        )}
                        {data.display && (
                            <div className="mb-4">
                                <p className="fw-semibold">Display:</p>
                                <p className="text-muted">{data.display}</p>
                            </div>
                        )}
                        {data.chip && (
                            <div className="mb-4">
                                <p className="fw-semibold">Chip:</p>
                                <p className="text-muted">{data.chip}</p>
                            </div>
                        )}
                        <a
                            href={data.learnMoreLink || '#'}
                            className="btn btn-primary btn-lg rounded-pill"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;