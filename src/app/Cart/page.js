'use client';

import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import Privatepage from '@/Components/Privatepage';
import { AuthContext } from '@/Context/Auth'; // Ensure this path is correct
import { useRouter } from 'next/navigation';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Safely access AuthContext
    let authData, logout;
    try {
        ({ authData, logout } = useContext(AuthContext) || {});
    } catch (error) {
        console.error('Error accessing AuthContext:', error);
        authData = { isAuth: false, user: null };
        logout = () => {
            console.error('Logout function unavailable');
            router.push('/login');
        };
    }

    // Helper function to generate a unique key for each cart item
    const getItemKey = (item) => `${item.id || item.slug}-${item.color || 'Default'}`;

    // Fetch cart from localStorage
    useEffect(() => {
        if (authData?.isAuth) {
            const getCart = () => {
                try {
                    setIsLoading(true);
                    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                    setCart(savedCart);
                    const totalCost = savedCart.reduce(
                        (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                        0
                    );
                    setTotal(totalCost);
                } catch (error) {
                    console.error('Error loading cart:', error);
                    setCart([]);
                    setTotal(0);
                    toast.error('Failed to load cart');
                } finally {
                    setIsLoading(false);
                }
            };
            getCart();
        } else {
            setIsLoading(false);
            setCart([]);
            setTotal(0);
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [authData?.isAuth, router]);

    // Update cart in localStorage
    const updateCart = (newCart) => {
        try {
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            const totalCost = newCart.reduce(
                (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
                0
            );
            setTotal(totalCost);
        } catch (error) {
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

    // Handle logout
    const handleLogout = () => {
        try {
            logout();
            toast.success('Logged out successfully');
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Failed to log out');
            router.push('/login');
        }
    };

    return (
        <Privatepage>
            <div className="bg-light min-vh-100">
                <div className="container py-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="display-5 fw-bold text-center">Your Cart</h1>
                        {authData?.isAuth && (
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline-danger rounded-pill px-4"
                                aria-label="Log out"
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                    {isLoading ? (
                        <div className="text-center">
                            <p>Loading cart...</p>
                        </div>
                    ) : cart.length === 0 ? (
                        <div className="alert alert-info text-center">
                            Your cart is empty.{' '}
                            <Link href="/Product" className="alert-link">
                                Shop now
                            </Link>
                            .
                        </div>
                    ) : (
                        <>
                            <div className="row">
                                {cart.map((item, index) => (
                                    <div
                                        key={getItemKey(item)}
                                        className="col-12 col-md-4 mb-4"
                                    >
                                        <div className="card h-100 shadow-sm border-0 transition-transform hover:shadow-lg hover:scale-105">
                                            <div
                                                className="bg-white"
                                                style={{ height: '200px', overflow: 'hidden' }}
                                            >
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.title || 'Item'}
                                                        className="card-img-top"
                                                        style={{ height: '100%', objectFit: 'contain' }}
                                                    />
                                                ) : (
                                                    <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center">
                                                        <span className="text-white">No Image</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title fw-bold mb-3">{item.title || 'Unknown Item'}</h5>
                                                <p className="card-text text-muted mb-3">
                                                    Total: ${((Number(item.price) || 0) * (item.quantity || 1)).toFixed(2)}
                                                </p>
                                                <div className="d-flex justify-content-center align-items-center mb-3">
                                                    <button
                                                        onClick={() => removeOne(item.id || item.slug, item.color)}
                                                        className="btn btn-outline-secondary btn-sm me-2"
                                                        aria-label={`Remove one ${item.title || 'item'}`}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-muted">Qty: {item.quantity || 1}</span>
                                                    <button
                                                        onClick={() => addOne(item.id || item.slug, item.color)}
                                                        className="btn btn-outline-primary btn-sm ms-2"
                                                        aria-label={`Add one ${item.title || 'item'}`}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="card-text text-muted mb-4">Color: {item.color || 'None'}</p>
                                                <div className="d-flex justify-content-center gap-2">
                                                    <button
                                                        onClick={() => deleteItem(item.id || item.slug, item.color)}
                                                        className="btn btn-danger rounded-pill px-4"
                                                        aria-label={`Delete ${item.title || 'item'}`}
                                                    >
                                                        Remove
                                                    </button>
                                                    <button
                                                        onClick={() => router.push('/Checkout')}
                                                        className="btn btn-dark rounded-pill px-4"
                                                        aria-label={`Buy ${item.title || 'item'} now`}
                                                    >
                                                        Buy Now
                                                    </button>
                                                </div>
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
                        </>
                    )}
                    <ToastContainer />
                </div>
            </div>
        </Privatepage>
    );
};

export default Cart;