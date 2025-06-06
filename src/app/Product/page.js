"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/Product')
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    // Search
    if (searchTerm.trim() !== '') {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Helper: Sanitize price string (remove commas)
    const cleanPrice = (price) =>
      parseFloat(String(price).replace(/,/g, '').trim()) || 0;

    // Sort
    if (sortOption === 'price-low-high') {
      updatedProducts.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
    } else if (sortOption === 'price-high-low') {
      updatedProducts.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
    } else if (sortOption === 'title-asc') {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'title-desc') {
      updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, sortOption, products]);


  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1
        className="text-center mb-4"
        style={{
          fontSize: '3rem',
          fontWeight: 300,
          color: '#1d1d1f',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}
      >
        Discover Our Products
      </h1>
      <p
        className="text-center mb-5"
        style={{
          fontSize: '1.25rem',
          color: '#6e6e73',
          fontWeight: 400,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}
      >
        Thoughtfully designed. Built to impress.
      </p>

      {/* Search & Sort */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control rounded-pill px-4"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select rounded-pill px-4"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort Products</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.length === 0 ? (
          <div className="col text-center">
            <p className="text-muted">No products found.</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card border-0 shadow-sm rounded-4 bg-white h-100">
                <Link href={`/Product/${product.id}`} className="text-decoration-none">
                  <img
                    src={product.productImage}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: '200px', objectFit: 'contain' }}
                  />
                </Link>

                <div className="card-body d-flex flex-column px-4 pb-4 pt-2">
                  {/* Product Title */}
                  <h6 className="fw-semibold text-dark mb-3 text-truncate" title={product.title}>
                    {product.title}
                  </h6>

                  {/* Price & Button */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <h5 className="fw-bold text-dark mb-0">$ {product.price}</h5>
                  </div>
                </div>
              </div>
            </div>

          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;