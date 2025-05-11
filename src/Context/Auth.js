// Context/Auth.jsx
'use client';

import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/service/firebase';

export const AuthContext = createContext();

const initialState = {
    isAuth: undefined, // Changed from false to undefined
    token: null,
};

export function AuthContextProvider({ children }) {
    const [authData, setAuthData] = useState(initialState);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const idToken = await user.getIdToken();
                setAuthData({ isAuth: true, token: idToken });
            } else {
                setAuthData({ isAuth: false, token: null });
            }
        });

        return () => unsubscribe();
    }, []);

    const login = (token) => {
        setAuthData({ isAuth: true, token });
    };

    const logout = () => {
        setAuthData({ isAuth: false, token: null });
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}