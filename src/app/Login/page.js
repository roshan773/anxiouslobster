"use client";

import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // For App Router
import React, { useContext, useState } from 'react';
import GoogleButton from 'react-google-button';
import { AuthContext } from '@/Context/Auth';
// import { auth } from '../firebase'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const token = await res.user.getIdToken(); // Get Firebase ID token
      console.log(res);
      alert('Welcome Back');
      setEmail('');
      setPassword('');
      login(token); // Pass token to AuthContext login function
      router.push('/Cart'); // Redirect to Cart page
    } catch (error) {
      console.error(error);
      alert(error.message); // User-friendly error message
      setEmail('');
      setPassword('');
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const token = await res.user.getIdToken(); // Get Firebase ID token
      console.log(res);
      alert('Signed in with Google');
      setEmail('');
      setPassword('');
      login(token); // Pass token to AuthContext login function
      router.push('/Cart'); // Redirect to Cart page
    } catch (error) {
      console.error(error);
      alert(error.message); // User-friendly error message
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#fff' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '12px' }}>
              <div className="text-center mb-4">
                <h1 className="h2 fw-bold" style={{ color: '#1d1d1f' }}>
                  Sign In
                </h1>
                <p className="text-muted" style={{ fontSize: '1rem' }}>
                  Access your account to continue shopping.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-medium"
                    style={{ color: '#1d1d1f' }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="example@apple.com"
                    required
                    style={{
                      borderRadius: '8px',
                      borderColor: '#d2d2d7',
                      padding: '12px',
                      fontSize: '1rem',
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label fw-medium"
                    style={{ color: '#1d1d1f' }}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="••••••••"
                    required
                    style={{
                      borderRadius: '8px',
                      borderColor: '#d2d2d7',
                      padding: '12px',
                      fontSize: '1rem',
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 fw-medium"
                  style={{
                    backgroundColor: '#0071e3',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    border: 'none',
                  }}
                >
                  Sign In
                </button>
              </form>
              <p className="text-center text-muted mt-4" style={{ fontSize: '0.9rem' }}>
                Don’t have an account?{' '}
                <a href="/signup" style={{ color: '#0071e3', textDecoration: 'none' }}>
                  Sign up
                </a>
              </p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <GoogleButton onClick={handleGoogle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;