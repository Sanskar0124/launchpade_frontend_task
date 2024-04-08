// import './App.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import { helix } from 'ldrs'

helix.register()

function LandingPage() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Set timeout to 1 second (1000 milliseconds)

        return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }, []);

    function ScrollToTopOnPageChange() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }
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
                    <>
                        <Navbar home={true} />
                    </>
                )
            }
        </>
    );
}

export default LandingPage
