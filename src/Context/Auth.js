'use client';
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState({ isAuth: false, user: null });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setAuthData({ isAuth: true, user: JSON.parse(storedUser) });
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setAuthData({ isAuth: true, user: userData });
    };

    const logout = () => {
        localStorage.removeItem('user');
        setAuthData({ isAuth: false, user: null });
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
