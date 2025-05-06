"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <h1 className="mb-4 text-center">Our Products</h1>

      {/* Search and Sort Controls */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
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
                    <button className="btn btn-primary">
                      Add to Cart
                    </button>
                    <button className="btn btn-dark text-white">
                      Buy Now
                    </button>
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
