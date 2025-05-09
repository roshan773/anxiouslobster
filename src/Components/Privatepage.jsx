"use client";

import { AuthContext } from "@/Context/Auth";
import Link from "next/link";
import { useContext } from "react";

function Privatepage({ children }) {

    const { authdata } = useContext(AuthContext)

    if (!authdata.isAuth) {
        return (
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: '100vh', backgroundColor: '#f8f9fa' }}
            >
                <h1 className="display-4 text-center mb-4 px-3">
                    You Are Not Authorized
                    <br />
                    Please Log In First
                </h1>
                <Link href="/Login">
                    <button
                        className="btn btn-dark btn-lg"
                        aria-label="Redirect to login page"
                    >
                        Log In
                    </button>
                </Link>
            </div>
        );
    }
    return children;

}

export default Privatepage;