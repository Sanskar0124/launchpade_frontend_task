import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from "react-icons/fa6";
import { Bio } from '../../data/constatnts';
import { Dropdown, Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("000000000000000000000000000000000")
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    const navItems = [
        { link: "What's New", path: 'home', },
        { link: "Knowledge Hub", path: "service", type: 'home', dropdown: true },
        { link: "CB News", path: "request", type: 'home' },
        { link: "Internship", path: "request", type: 'home' },
        { link: "About Us", path: "request", type: 'home' },
    ];
    return (
        <div style={{ zIndex: 20000 }}>
            <header className='w-full  top-0 left-0 right-0' >
                <nav className={` shadow-xl py-4 ls:px-14 px-16 `}>

                    <div className='flex justify-between items-center text-base gap-8'>
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                            <img src={Bio.logo} width={120} alt="" className=' inline-block items-center rotated-and-cropped' />
                        </a>

                        {/* nav items for large devices */}
                        <ul className='md:flex space-x-12 hidden lg:flex'>
                            {
                                navItems.map(({ link, path, dropdown }) => {
                                    if (dropdown)
                                        return (
                                            <Dropdown className='text-xs block cursor-pointer lg:flex  text-gray900 ☐ hover:text-brandPrimary
                                            first:font-medium' label={((<Link to={path} spy={true} smooth={true} offset={-100}
                                                    key={path} className='text-xs block cursor-pointer hidden lg:flex  text-gray900 ☐ hover:text-brandPrimary
                      first:font-medium'>{link}</Link>))} dismissOnClick={false} inline>

                                                <div>
                                                    <div className='flex'>
                                                        <div>
                                                            <h1 className='text-5xl'>Join our <br />registration list</h1>
                                                            <p>Join our
                                                                registration list
                                                                And receive updates, expert educational insights, and early access to our platform.
                                                                Join</p>
                                                        </div>
                                                        <div>
                                                            <Dropdown.Item>Dashboard</Dropdown.Item>
                                                            <Dropdown.Item>Settings</Dropdown.Item>
                                                            <Dropdown.Item>Earnings</Dropdown.Item>
                                                            <Dropdown.Item>Sign out</Dropdown.Item>
                                                        </div>
                                                    </div>
                                                    Hello World
                                                </div>
                                            </Dropdown>
                                        )
                                    else
                                        return (<Link to={path} spy={true} smooth={true} offset={-100}
                                            key={path} className='text-xs block cursor-pointer hidden lg:flex  text-gray900 ☐ hover:text-brandPrimary
                  first:font-medium'>{link}</Link>)
                                }
                                )}

                        </ul>

                        {/* btn for large devices */}
                        <div className='space-x-5  lg:flex items-center '>
                            <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900 text-xs'>Login</a>
                            <button className='hidden lg:flex bg-brandPrimary text-white py-2 px-4 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-xs'>Register Now</button>
                        </div>

                        {/* menu btn for only mobile devices */}
                        <div className='lg:hidden' style={{ zIndex: 20000 }}>
                            <button
                                onClick={toggleMenu}
                                className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                                {
                                    isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey' />) : (<FaBars
                                        className='h-6 w-6 text-neutralDGrey' />)
                                }
                            </button>
                        </div>
                    </div>

                    {/* nav items for mobile devices*/}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({ link, path }) => {
                                return (<Link onClick={() => toggleMenu()} to={path} spy={true} smooth={true} offset=
                                    {-100} key={path} className='block text-base text-white hover:text-brandPrimary
                                        first:font-medium'>{link}</Link>)

                            }
                            )}
                    </div>

                </nav>
            </header >
        </div>
    )
}
