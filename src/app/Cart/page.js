// pages/Cart.jsx
'use client';

import Head from 'next/head';
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import Privatepage from '@/Components/Privatepage';
import { AuthContext } from '@/Context/Auth';
import { db } from '@/service/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth } from '@/service/firebase';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const { authData } = useContext(AuthContext); // Fix: Use authData (capital D)
    const router = useRouter();

    // Sync cart with Firestore
    useEffect(() => {
        const getCart = async () => {
            try {
                if (authData.isAuth && authData.token) {
                    const userId = auth.currentUser.uid;
                    const cartRef = doc(db, 'carts', userId);
                    const cartSnap = await getDoc(cartRef);

                    let savedCart = [];
                    if (cartSnap.exists()) {
                        savedCart = cartSnap.data().items || [];
                    } else {
                        savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                        await setDoc(cartRef, { items: savedCart });
                    }

                    savedCart.forEach((item, i) => {
                        if (!item.price || isNaN(Number(item.price))) {
                            console.warn(`Bad price for item ${i}:`, item);
                        }
                    });

                    setCart(savedCart);
                    const totalCost = savedCart.reduce(
                        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                        0
                    );
                    setTotal(totalCost);
                } else {
                    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                    setCart(savedCart);
                    const totalCost = savedCart.reduce(
                        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                        0
                    );
                    setTotal(totalCost);
                }
            } catch (error) {
                console.error('Error getting cart:', error);
                setCart([]);
                setTotal(0);
            }
        };
        getCart();
    }, [authData]); // Update dependency to authData

    // Update cart in Firestore and localStorage
    const updateCart = async (newCart) => {
        try {
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            const totalCost = newCart.reduce(
                (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                0
            );
            setTotal(totalCost);

            if (authData.isAuth && auth.currentUser) {
                const userId = auth.currentUser.uid;
                const cartRef = doc(db, 'carts', userId);
                await setDoc(cartRef, { items: newCart }, { merge: true });
            }
        } catch (error) {
            console.error('Error updating cart:', error);
            toast.error('Failed to update cart');
        }
    };

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
        updateCart(newCart);
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
        updateCart(newCart);
    };

    // Delete one specific item by ID and color
    const deleteItem = (itemId, itemColor) => {
        const newCart = cart.filter(
            (item) =>
                (item.id || item.slug) !== itemId ||
                (item.color || 'Default') !== (itemColor || 'Default')
        );
        toast.success('Product Deleted successfully');
        updateCart(newCart);
    };

    useEffect(() => {
        const getCart = async () => {
            try {
                if (authData.isAuth && authData.token) {
                    const userId = auth.currentUser.uid;
                    const cartRef = doc(db, 'carts', userId);
                    const cartSnap = await getDoc(cartRef);

                    let savedCart = [];
                    if (cartSnap.exists()) {
                        savedCart = cartSnap.data().items || [];
                    } else {
                        savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                        await setDoc(cartRef, { items: savedCart });
                    }

                    savedCart.forEach((item, i) => {
                        if (!item.price || isNaN(Number(item.price))) {
                            console.warn(`Bad price for item ${i}:`, item);
                        }
                    });

                    setCart(savedCart);
                    const totalCost = savedCart.reduce(
                        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                        0
                    );
                    setTotal(totalCost);
                } else {
                    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                    setCart(savedCart);
                    const totalCost = savedCart.reduce(
                        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                        0
                    );
                    setTotal(totalCost);
                }
            } catch (error) {
                console.error('Error getting cart:', error);
                setCart([]);
                setTotal(0);
            }
        };
        getCart();
    }, [authData]);

    // Show empty cart message if no items
    if (cart.length === 0) {
        return (
            <Privatepage>
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
            </Privatepage>
        );
    }

    return (
        <Privatepage>
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
                                                aria-label={`Remove one ${item.title || 'item'}`}
                                            >
                                                -
                                            </button>
                                            <span className="card-text text-muted">Qty: {item.quantity || 1}</span>
                                            <button
                                                onClick={() => addOne(item.id || item.slug, item.color)}
                                                className="btn btn-outline-primary btn-sm ms-2"
                                                aria-label={`Add one ${item.title || 'item'}`}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="card-text text-muted mb-3">Color: {item.color || 'None'}</p>
                                        <button
                                            onClick={() => deleteItem(item.id || item.slug, item.color)}
                                            className="btn btn-danger btn-sm rounded-pill px-3"
                                            aria-label={`Delete ${item.title || 'item'}`}
                                        >
                                            Remove
                                        </button>
                                        <button
                                            onClick={() => router.push('/Checkout')}
                                            className="btn btn-dark btn-sm rounded-pill px-3 ms-2"
                                            aria-label={`Buy ${item.title || 'item'} now`}
                                        >
                                            Buy Now
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
        </Privatepage>
    );
};

export default Cart;