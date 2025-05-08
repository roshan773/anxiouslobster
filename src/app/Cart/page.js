"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Load cart from local storage on component mount
    useEffect(() => {
        const loadCart = () => {
            try {
                const storedCart = localStorage.getItem("cart") || "[]";
                const parsedCart = JSON.parse(storedCart);
                if (!Array.isArray(parsedCart)) {
                    throw new Error("Cart data is not an array");
                }
                setCartItems(parsedCart);
                const total = parsedCart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
                setTotalPrice(total);
            } catch (error) {
                console.error("Error loading cart:", error);
                setCartItems([]);
                setTotalPrice(0);
                localStorage.setItem("cart", JSON.stringify([]));
            }
        };
        loadCart();
    }, []);

    // Increase quantity of an item
    const increaseQuantity = (itemId, itemColor) => {
        const updatedCart = cartItems.map(item => {
            if ((item.id || item.slug) === itemId && (item.color || "Default") === (itemColor || "Default")) {
                return { ...item, quantity: (item.quantity || 1) + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        const total = updatedCart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
        setTotalPrice(total);
    };

    // Decrease quantity of an item
    const decreaseQuantity = (itemId, itemColor) => {
        let updatedCart = cartItems.map(item => {
            if ((item.id || item.slug) === itemId && (item.color || "Default") === (itemColor || "Default")) {
                const newQuantity = (item.quantity || 1) - 1;
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        updatedCart = updatedCart.filter(item => (item.quantity || 1) > 0);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        const total = updatedCart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
        setTotalPrice(total);
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => (item.id || item.slug) !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        const total = updatedCart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
        setTotalPrice(total);
    };

    // Empty cart state
    if (cartItems.length === 0) {
        return (
            <div className="bg-light min-vh-100">
                <Head>
                    <title>Cart - Apple</title>
                    <meta name="description" content="View your shopping cart." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="container py-5">
                    <h1 className="display-5 fw-bold mb-4 text-center">Your Cart</h1>
                    <div className="alert alert-info text-center" role="alert">
                        Your cart is empty. <Link href="/Product" className="alert-link">Continue shopping</Link>.
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light min-vh-100">
            <Head>
                <title>Cart - Apple</title>
                <meta name="description" content="View your shopping cart." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container py-5">
                <h1 className="display-5 fw-bold mb-4 text-center">Your Cart</h1>
                <div className="row">
                    {cartItems.map((item, index) => (
                        <div key={(item.id || item.slug || `cart-${index}`) + "-" + (item.color || "Default")} className="col-12 col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div
                                    className="d-flex justify-content-center align-items-center bg-white"
                                    style={{ height: "200px", overflow: "hidden" }}
                                >
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title || "Product"}
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
                                    <h5 className="card-title fw-semibold mb-2">{item.title || "Unknown Product"}</h5>
                                    <p className="card-text text-muted mb-2">Price: ${(Number(item.price) || 0) * (item.quantity || 1)}</p>
                                    <div className="mb-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id || item.slug, item.color)}
                                            className="btn btn-outline-secondary btn-sm me-2"
                                        >
                                            -
                                        </button>
                                        <span className="card-text text-muted">Quantity: {item.quantity || 1}</span>
                                        <button
                                            onClick={() => increaseQuantity(item.id || item.slug, item.color)}
                                            className="btn btn-outline-primary btn-sm ms-2"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="card-text text-muted mb-3">Color: {item.color || "None"}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id || item.slug)}
                                        className="btn btn-danger btn-sm rounded-pill px-3"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <h3 className="fw-semibold">Total: ${totalPrice.toFixed(2)}</h3>
                    <Link href="/" className="btn btn-primary btn-lg rounded-pill px-4 mt-3">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;