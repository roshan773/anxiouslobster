'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';

const ProductGrid = ({ filteredProducts }) => {
    const { addToCart } = useCart();

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {filteredProducts.length === 0 ? (
                <div className="col text-center">
                    <p className="text-muted">No products found.</p>
                </div>
            ) : (
                filteredProducts.map((product) => (
                    <div key={product.id} className="col">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={product.productImage}
                                className="card-img-top"
                                alt={product.title}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-muted flex-grow-1">
                                    {product.description || 'No description available.'}
                                </p>
                                <p className="card-text fw-bold mb-3">{product.price}</p>
                                <div className="d-grid gap-2 mt-auto">
                                    <button className="btn btn-outline-primary">Learn More</button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-warning text-white">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductGrid;
