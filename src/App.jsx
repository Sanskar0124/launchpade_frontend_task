import React, { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage';

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Set timeout to 1 second (1000 milliseconds)

        return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }, []);
    return (
        <>
            {isLoading ?
                (
                    <div className='flex justify-center items-center loader-body'>
                        <l-helix
                            size="100"
                            speed="2.5"
                            color="#4CAF4F"
                        ></l-helix>
                    </div>
                )
                :
                (
                    <LandingPage />
                )
            }
        </>
    );
}

export default App
