"use client";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { AuthContext } from "@/Context/Auth";
import { auth } from "@/service/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  // ✅ Add persistence logic here
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        console.log("Auth persistence set to localStorage");
      })
      .catch((error) => {
        console.error("Persistence error", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const idToken = await user.getIdToken();
      login(idToken); // or pass user depending on your AuthContext
      toast.success(`Welcome Back`);
      setemail("");
      setpassword("");
      router.push("/Cart");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setemail("");
      setpassword("");
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = res.user;
      const idToken = await user.getIdToken();
      login(idToken);
      toast.success(`Welcome Back`);
      router.push("/Cart");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
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
                    onChange={(e) => setemail(e.target.value)}
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
                    onChange={(e) => setpassword(e.target.value)}
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
                <a href="/Register" style={{ color: '#0071e3', textDecoration: 'none' }}>
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