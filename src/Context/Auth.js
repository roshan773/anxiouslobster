'use client';

import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initialstate = {
    isAuth : false,
    token: null
}

export function AuthContextProvider({ children }) {

    const [authdata, setauthdata] = useState(initialstate)

    const login = (token) => {
        setauthdata({isAuth: true, token})
    }

    const logout = () => {
        setauthdata({isAuth: false, token: null})
    }

    return (
        <AuthContext.Provider value={{authdata, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}