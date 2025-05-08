"use client";

import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Description component for displaying a single product and related suggestions
const Description = () => {
    const params = useParams();
    const slug = params?.slug;
    const [data, setData] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);

    // Fetch single product details
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

    // Fetch suggested products (excluding the current product)
    const getSuggestedProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/Product`);
            const otherProducts = res.data.filter(product => product.slug !== slug);
            const shuffled = otherProducts.sort(() => 0.5 - Math.random());
            setSuggestions(shuffled.slice(0, 3));
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        }
    };

    // Fetch data on component mount or when slug changes
    useEffect(() => {
        if (slug) {
            getSingleProduct();
            getSuggestedProducts();
        }
    }, [slug]);

    // Error state
    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    // Loading state
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
            {/* Page metadata */}
            <Head>
                <title>{data.title || "Product"} - Apple</title>
                <meta name="description" content={data.description || "Discover the latest Apple products."} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container py-5">
                {/* Main Product Section */}
                <div className="row align-items-center mb-5">
                    {/* Product Image */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div
                            className="d-flex justify-content-center align-items-center bg-white rounded shadow-sm"
                            style={{ height: '400px', overflow: 'hidden' }}
                        >
                            {data.productImage ? (
                                <img
                                    src={data.productImage}
                                    alt={data.title || "Product"}
                                    className="img-fluid"
                                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                />
                            ) : (
                                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center">
                                    <span className="text-white">Image Not Available</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="col-12 col-md-6 ps-md-4">
                        <h1 className="display-5 fw-bold mb-3">{data.title || "Product Title"}</h1>
                        <p className="lead text-muted mb-4">{data.description || "No description available."}</p>
                        <p className="fs-4 fw-semibold mb-4">
                            From ${data.price || "N/A"} {data.monthly && `or ${data.monthly}`}
                        </p>

                        {/* Colors */}
                        {data.colors && Array.isArray(data.colors) && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Available Colors:</p>
                                <div className="d-flex gap-2 flex-wrap">
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

                        {/* Specifications */}
                        {data.specs && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Specifications:</p>
                                <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>
                                    {data.specs}
                                </p>
                            </div>
                        )}

                        {/* Ports */}
                        {data.ports && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Ports:</p>
                                <p className="text-muted">{data.ports}</p>
                            </div>
                        )}

                        {/* Display */}
                        {data.display && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Display:</p>
                                <p className="text-muted">{data.display}</p>
                            </div>
                        )}

                        {/* Chip */}
                        {data.chip && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Chip:</p>
                                <p className="text-muted">{data.chip}</p>
                            </div>
                        )}

                        {/* Learn More Button */}
                        <a
                            href={data.learnMoreLink || '#'}
                            className="btn btn-primary btn-lg rounded-pill px-4"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Suggestions Section */}
                {suggestions.length > 0 && (
                    <div className="pt-5">
                        <h2 className="fw-bold mb-4 text-center">You Might Also Like</h2>
                        <div className="row">
                            {suggestions.map((product, index) => (
                                <div key={product.slug || `suggestion-${index}`} className="col-12 col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <div
                                            className="d-flex justify-content-center align-items-center bg-white"
                                            style={{ height: '200px', overflow: 'hidden' }}
                                        >
                                            {product.productImage ? (
                                                <img
                                                    src={product.productImage}
                                                    alt={product.title}
                                                    className="img-fluid"
                                                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                                />
                                            ) : (
                                                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center">
                                                    <span className="text-white">Image Not Available</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title fw-semibold mb-2">{product.title}</h5>
                                            <p className="card-text text-muted mb-3">
                                                From ${product.price || "N/A"}
                                            </p>
                                            <Link
                                                href={`/Product/${product.id}`}
                                                className="btn btn-outline-primary btn-sm rounded-pill px-3"
                                            >
                                                View Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Description;