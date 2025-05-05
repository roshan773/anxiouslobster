"use client";

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/Product');
//         console.log('Raw API Response:', response); // Log the full response
//         console.log('Response Data:', response.data); // Log the data specifically

//         // Try to extract the products array from the response
//         let fetchedProducts = [];

//         // Check common response structures
//         if (Array.isArray(response.data)) {
//           // If response.data is an array directly
//           fetchedProducts = response.data;
//         } else if (response.data.Product && Array.isArray(response.data.Product)) {
//           // If response.data has a 'Product' key with an array
//           fetchedProducts = response.data.Product;
//         } else if (response.data.products && Array.isArray(response.data.products)) {
//           // If response.data has a lowercase 'products' key with an array
//           fetchedProducts = response.data.products;
//         } else {
//           throw new Error(
//             'Invalid data structure: Expected an array, or an object with "Product" or "products" key containing an array'
//           );
//         }

//         setProducts(fetchedProducts);
//         setLoading(false);
//       } catch (err) {
//         console.error('Fetch Error:', err);
//         setError('Failed to load products. Check the console for API response details.');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mt-5">
//         <div className="text-center">
//           <div className="spinner-border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mt-5">
//         <div className="alert alert-danger" role="alert">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Our Products</h1>
//       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
//         {products.length === 0 ? (
//           <div className="col">
//             <p className="text-center">No products available.</p>
//           </div>
//         ) : (
//           products.map((product) => (
//             <div key={product.id} className="col">
//               <div className={`card h-100 ${styles.productCard}`}>
//                 <img
//                   src={product.productImage}
//                   className="card-img-top"
//                   alt={product.title}
//                   style={{ height: '200px', objectFit: 'contain' }}
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">
//                     {product.description || 'No description available'}
//                   </p>
//                   <p className="card-text fw-bold">{product.price}</p>
//                   {product.learnMoreLink ? (
//                     <a
//                       href={product.learnMoreLink}
//                       className="btn btn-primary"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Learn More
//                     </a>
//                   ) : (
//                     <button className="btn btn-primary" disabled>
//                       Learn More
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;