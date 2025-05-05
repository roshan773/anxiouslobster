"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mainProduct, setMainProduct] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/Product'); // Replace with your API endpoint
        if (!res.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await res.json();

        // Check if the expected data structure exists
        if (!data.Product || !Array.isArray(data.Product)) {
          throw new Error('Invalid data structure: Product array not found');
        }

        const products = data.Product;

        // Main product: iPhone 16 Pro Max (id 11)
        const product = products.find(p => p.id === 11);
        if (!product) {
          throw new Error('Main product (iPhone 16 Pro Max) not found');
        }
        setMainProduct(product);

        // Suggested products: compatible case and charger (ids 26 and 37)
        const suggestions = products.filter(p => p.id === 26 || p.id === 37);
        setSuggestedProducts(suggestions);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Error</h2>
        <p>{error}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setError(null);
            fetchData();
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!mainProduct) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container py-5">
      {/* Product Section */}
      <div className="row bg-white rounded-3 shadow-lg p-4 mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={mainProduct.productImage}
            alt={mainProduct.title}
            className="img-fluid rounded-3"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold mb-3">{mainProduct.title}</h1>
          <p className="fs-4 text-success mb-3">{mainProduct.price}</p>
          <p className="text-muted mb-3">{mainProduct.monthly}</p>
          <p className="text-dark mb-4">{mainProduct.description}</p>
          <Link href={`/description/${mainProduct.id}`} className="btn btn-primary btn-lg">
            View Full Description
          </Link>
        </div>
      </div>

      {/* Suggested Products Section */}
      <div className="mt-5">
        <h2 className="display-6 fw-bold mb-4">Suggested Products</h2>
        <div className="row">
          {suggestedProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={product.productImage}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{product.title}</h5>
                  <p className="card-text text-success">{product.price}</p>
                  <Link href={`/description/${product.id}`} className="btn btn-outline-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}