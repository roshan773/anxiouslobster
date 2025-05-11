// Components/Privatepage.jsx
'use client';

import { AuthContext } from '@/Context/Auth';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

function Privatepage({ children }) {
    const { authData } = useContext(AuthContext);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for authData to be initialized
        if (authData.isAuth === undefined) {
            // Authentication state is still being determined
            return;
        }

        // Once authData is initialized, stop loading
        setIsLoading(false);

        // Only redirect if the user is explicitly not authenticated
        if (authData.isAuth === false) {
            router.push('/Login');
        }
    }, [authData, router]);

    // Show loading spinner while determining auth state
    if (isLoading || authData.isAuth === undefined) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: '100vh', backgroundColor: '#f8f9fa' }}
            >
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // If not authenticated, show unauthorized message (this won't be reached due to redirect)
    if (!authData.isAuth) {
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

    // Render protected content if authenticated
    return children;
}

export default Privatepage;