'use client';

import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // Get cart from browser storage when page opens
    useEffect(() => {
        const getCart = () => {
            try {
                const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                // Warn if any item has a bad price
                savedCart.forEach((item, i) => {
                    if (!item.price || isNaN(Number(item.price))) {
                        console.warn(`Bad price for item ${i}:`, item);
                    }
                });
                setCart(savedCart);
                // Add up total cost (price * quantity for each item)
                const totalCost = savedCart.reduce(
                    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                    0
                );
                setTotal(totalCost);
            } catch (error) {
                console.error('Error getting cart:', error);
                setCart([]);
                setTotal(0);
            }
        };
        getCart();
    }, []);

    // Add one more of an item
    const addOne = (itemId, itemColor) => {
        const newCart = cart.map((item) => {
            if (
                (item.id || item.slug) === itemId &&
                (item.color || 'Default') === (itemColor || 'Default')
            ) {
                return { ...item, quantity: (item.quantity || 1) + 1 };
            }
            return item;
        });
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        // Update total cost
        const totalCost = newCart.reduce(
            (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
            0
        );
        setTotal(totalCost);
    };

    // Remove one of an item
    const removeOne = (itemId, itemColor) => {
        let newCart = cart.map((item) => {
            if (
                (item.id || item.slug) === itemId &&
                (item.color || 'Default') === (itemColor || 'Default')
            ) {
                return { ...item, quantity: (item.quantity || 1) - 1 };
            }
            return item;
        });
        newCart = newCart.filter((item) => (item.quantity || 1) > 0);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        // Update total cost
        const totalCost = newCart.reduce(
            (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
            0
        );
        setTotal(totalCost);
    };

    // Delete one specific item by ID and color
    const deleteItem = (itemId, itemColor) => {
        const newCart = cart.filter(
            (item) =>
                (item.id || item.slug) !== itemId ||
                (item.color || 'Default') !== (itemColor || 'Default')
        );
        toast.success("Product Deleted successfully")
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        // Update total cost
        const totalCost = newCart.reduce(
            (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
            0
        );
        setTotal(totalCost);
    };

    // Show empty cart message if no items
    if (cart.length === 0) {
        return (
            <div className="bg-light min-vh-100">
                <Head>
                    <title>Cart - Apple</title>
                    <meta name="description" content="Your shopping cart" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="container py-5">
                    <h1 className="display-5 fw-bold mb-4 text-center">Your Cart</h1>
                    <div className="alert alert-info text-center">
                        Your cart is empty.{' '}
                        <Link href="/Product" className="alert-link">
                            Shop now
                        </Link>
                        .
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light min-vh-100">
            <Head>
                <title>Cart - Apple</title>
                <meta name="description" content="Your shopping cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container py-5">
                <h1 className="display-5 fw-bold mb-4 text-center">Your Cart</h1>
                <div className="row">
                    {cart.map((item, index) => (
                        <div
                            key={(item.id || item.slug || `item-${index}`) + '-' + (item.color || 'Default')}
                            className="col-12 col-md-4 mb-4"
                        >
                            <div className="card h-100 shadow-sm border-0">
                                <div
                                    className="d-flex justify-content-center align-items-center bg-white"
                                    style={{ height: '200px', overflow: 'hidden' }}
                                >
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title || 'Item'}
                                            className="img-fluid"
                                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                        />
                                    ) : (
                                        <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center">
                                            <span className="text-white">No Image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-semibold mb-2">{item.title || 'Unknown Item'}</h5>
                                    <p className="card-text text-muted mb-2">
                                        Total: ${(Number(item.price) || 0) * (item.quantity || 1).toFixed(2)}
                                    </p>
                                    <div className="mb-2">
                                        <button
                                            onClick={() => removeOne(item.id || item.slug, item.color)}
                                            className="btn btn-outline-secondary btn-sm me-2"
                                        >
                                            -
                                        </button>
                                        <span className="card-text text-muted">Qty: {item.quantity || 1}</span>
                                        <button
                                            onClick={() => addOne(item.id || item.slug, item.color)}
                                            className="btn btn-outline-primary btn-sm ms-2"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="card-text text-muted mb-3">Color: {item.color || 'None'}</p>
                                    <button
                                        onClick={() => deleteItem(item.id || item.slug, item.color)}
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
                    <h3 className="fw-semibold">Total: ${total.toFixed(2)}</h3>
                    <Link href="/Product" className="btn btn-primary btn-lg rounded-pill px-4 mt-3">
                        Keep Shopping
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;