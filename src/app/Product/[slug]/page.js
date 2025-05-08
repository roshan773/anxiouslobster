"use client";

import axios from "axios";
import Head from "next/head";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Description = () => {
    const params = useParams();
    const slug = params?.slug;
    const [data, setData] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    // Fetch single product details
    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/Product/${slug}`);
            const product = res.data;
            setData(product);
            const firstColor = product.colors?.[0] || null;
            setSelectedColor(firstColor);
            // Normalize color name to ensure consistency
            const initialColorName = typeof firstColor === "string" ? firstColor.trim() : firstColor?.name?.trim() || "";
            // Find matching colorImages key (case-insensitive)
            const colorImagesKeys = product.colorImages ? Object.keys(product.colorImages) : [];
            const matchingKey = colorImagesKeys.find(
                key => key.trim().toLowerCase() === initialColorName.toLowerCase()
            );
            const initialImage = matchingKey
                ? product.colorImages[matchingKey]
                : product.productImage || "";
            setCurrentImage(initialImage);
            console.log("Initial color:", initialColorName, "Image:", initialImage); // Debug log
            setError(null);
        } catch (error) {
            console.error("Error fetching product:", error);
            setError("Failed to load product. Please try again.");
        }
    };

    // Fetch suggested products
    const getSuggestedProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/Product`);
            const otherProducts = res.data.filter((product) => product.slug !== slug);
            const shuffled = otherProducts.sort(() => 0.5 - Math.random());
            setSuggestions(shuffled.slice(0, 3));
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        }
    };

    // Add to cart functionality
    const addToCart = () => {
        if (!data) {
            console.error("Cannot add to cart: Missing data");
            alert("Product data is missing. Please try again.");
            return;
        }
        const cartItem = {
            id: data.id || data.slug || "unknown-" + Date.now(), // Fallback to slug or timestamp if id is missing
            slug: data.slug || "",
            title: data.title || "Unknown Product",
            price: data.price || 0,
            image: currentImage || data.productImage || "",
            color: typeof selectedColor === "string" ? selectedColor : selectedColor?.name || "Default"
        };
        // Get existing cart from local storage or initialize empty array
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        // Check if product with same id or slug exists
        const productExists = existingCart.some(
            item => (item.id || item.slug) === (cartItem.id || cartItem.slug)
        );
        if (productExists) {
            // Product exists, now check color conditions
            if (selectedColor) {
                // Product has a color, check if same color exists
                const itemExistsWithSameColor = existingCart.some(
                    item =>
                        (item.id || item.slug) === (cartItem.id || cartItem.slug) &&
                        item.color === cartItem.color
                );
                if (itemExistsWithSameColor) {
                    console.log("Product with this color already in cart:", cartItem.id || cartItem.slug, cartItem.color); // Debug log
                    alert("Product with this color already in cart!");
                    return;
                }
                // Different color, proceed to add
            } else {
                // Product has no color, check if a no-color item exists
                const itemExistsWithNoColor = existingCart.some(
                    item =>
                        (item.id || item.slug) === (cartItem.id || cartItem.slug) &&
                        (item.color === "Default" || !item.color)
                );
                if (itemExistsWithNoColor) {
                    console.log("Product already in cart (no color):", cartItem.id || cartItem.slug); // Debug log
                    alert("Product already in cart!");
                    return;
                }
                // No matching no-color item, proceed to add
            }
        }
        // Add new item to cart (either new product, same product with different color, or no-color product)
        const updatedCart = [...existingCart, cartItem];
        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log("Added to cart:", cartItem); // Debug log
        alert("Product added to cart!");
    };


    // Fetch data on component mount or when slug changes
    useEffect(() => {
        if (slug) {
            getSingleProduct();
            getSuggestedProducts();
        }
    }, [slug]);

    // Handle color selection and update image
    const handleColorSelect = (color) => {
        setSelectedColor(color);
        // Normalize color name to ensure consistency
        const colorName = typeof color === "string" ? color.trim() : color?.name?.trim() || "";
        // Find matching colorImages key (case-insensitive)
        const colorImagesKeys = data && data.colorImages ? Object.keys(data.colorImages) : [];
        const matchingKey = colorImagesKeys.find(
            key => key.trim().toLowerCase() === colorName.toLowerCase()
        );
        const newImageUrl = matchingKey
            ? data.colorImages[matchingKey]
            : data?.productImage || "";
        setCurrentImage(newImageUrl);
        console.log("Selected color:", colorName, "Image:", newImageUrl); // Debug log
    };

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
            <Head>
                <title>{data.title || "Product"} - Apple</title>
                <meta name="description" content={data.description || "Discover the latest Apple products."} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div
                            className="d-flex justify-content-center align-items-center bg-white rounded shadow-sm"
                            style={{ height: "400px", overflow: "hidden" }}
                        >
                            {currentImage ? (
                                <img
                                    src={currentImage}
                                    alt={`${data.title || "Product"} in ${typeof selectedColor === "string" ? selectedColor : selectedColor?.name || "default color"}`}
                                    className="img-fluid"
                                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
                                    onError={() => setCurrentImage(data.productImage || "")}
                                />
                            ) : (
                                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center">
                                    <span className="text-white">Image Not Available</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-12 col-md-6 ps-md-4">
                        <h1 className="display-5 fw-bold mb-3">{data.title || "Product Title"}</h1>
                        <p className="lead text-muted mb-4">{data.description || "No description available."}</p>
                        <p className="fs-4 fw-semibold mb-4">
                            From ${data.price || "N/A"} {data.monthly && `or ${data.monthly}`}
                        </p>

                        {data.colors && Array.isArray(data.colors) && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">
                                    Selected Color:{" "}
                                    {typeof selectedColor === "string" ? selectedColor : selectedColor?.name || "None selected"}
                                </p>
                                <div className="d-flex gap-2 flex-wrap">
                                    {data.colors.map((color, index) => {
                                        const colorName = typeof color === "string" ? color : color?.name || "";
                                        const colorCode = typeof color === "string" ? color : color?.code || "";
                                        const isSelected =
                                            typeof selectedColor === "string"
                                                ? selectedColor === color
                                                : selectedColor?.name === colorName;
                                        return (
                                            <button
                                                key={index}
                                                className={`d-inline-block rounded-circle border p-0 ${isSelected ? "border-primary border-2" : "border-secondary"}`}
                                                style={{
                                                    width: "24px",
                                                    height: "24px",
                                                    backgroundColor: colorCode || colorName,
                                                    cursor: "pointer",
                                                }}
                                                title={colorCode ? `${colorName}` : colorName}
                                                onClick={() => handleColorSelect(color)}
                                                aria-label={`Select ${colorName} color`}
                                            ></button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {data.specs && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Specifications:</p>
                                <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                                    {data.specs}
                                </p>
                            </div>
                        )}
                        {data.ports && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Ports:</p>
                                <p className="text-muted">{data.ports}</p>
                            </div>
                        )}
                        {data.display && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Display:</p>
                                <p className="text-muted">{data.display}</p>
                            </div>
                        )}
                        {data.chip && (
                            <div className="mb-4">
                                <p className="fw-semibold mb-2">Chip:</p>
                                <p className="text-muted">{data.chip}</p>
                            </div>
                        )}

                        <a href={data.learnMoreLink || "#"} className="btn btn-primary btn-lg rounded-pill px-4">
                            Learn More
                        </a>
                        <button onClick={addToCart} className="btn btn-dark btn-lg rounded-pill px-4">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {suggestions.length > 0 && (
                    <div className="pt-5">
                        <h2 className="fw-bold mb-4 text-center">You Might Also Like</h2>
                        <div className="row">
                            {suggestions.map((product, index) => (
                                <div key={product.slug || `suggestion-${index}`} className="col-12 col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <div
                                            className="d-flex justify-content-center align-items-center bg-white"
                                            style={{ height: "200px", overflow: "hidden" }}
                                        >
                                            {product.productImage ? (
                                                <img
                                                    src={product.productImage}
                                                    alt={product.title || "Product"}
                                                    className="img-fluid"
                                                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                                />
                                            ) : (
                                                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center">
                                                    <span className="text-white">Image Not Available</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title fw-semibold mb-2">{product.title || "Product"}</h5>
                                            <p className="card-text text-muted mb-3">
                                                From ${product.price || "N/A"}
                                            </p>
                                            <Link
                                                href={`/Product/${product.id || product.slug || ""}`}
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