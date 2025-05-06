"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Product');
        let fetchedProducts = [];

        if (Array.isArray(response.data)) {
          fetchedProducts = response.data;
        } else if (response.data.Product && Array.isArray(response.data.Product)) {
          fetchedProducts = response.data.Product;
        } else if (response.data.products && Array.isArray(response.data.products)) {
          fetchedProducts = response.data.products;
        } else {
          throw new Error('Invalid data structure');
        }

        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError('Failed to load products.');
        setLoading(false);
      }
    };

    fetchProducts();
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
      <h1 className="mb-5 text-center fw-semibold" style={{ fontSize: '2.5rem' }}>
        Our Products
      </h1>

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
              <div className="card border-0 shadow-sm rounded-4 bg-white h-100 text-center p-4">

                {/* Product Image */}
                <img
                  src={product.productImage}
                  alt={product.title}
                  className="mx-auto mb-3 img-fluid"
                  style={{ height: '200px', objectFit: 'contain' }}
                />

                {/* Product Title */}
                <h6 className="text-start
                 fw-semibold mb-2">{product.title}</h6>

                {/* Price & Button */}
                <div className="d-flex justify-content-between align-items-center px-2 mt-auto">
                  <h5 className="fw-bold text-dark mb-0">$ {product.price}</h5>
                  <button className="btn btn-primary btn-sm">
                    <AiOutlineShoppingCart size={20}/>
                  </button>
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
