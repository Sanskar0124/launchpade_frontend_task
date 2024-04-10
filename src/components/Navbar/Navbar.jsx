import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from "react-icons/fa6";
import { Bio } from '../../data/constatnts';
import { Dropdown, Footer } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiFilePaper2Line } from "react-icons/ri";
import { RxVideo } from "react-icons/rx";
import { MdNotificationsNone } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiLogOut } from "react-icons/bi";

import './Navbar.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false)

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }
    const toggleModal = () => {
        setOpenModal(!openModal);
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
                <nav className={` shadow-xl py-4 ls:px-14 px-16 navbar-main-container`}>

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
                                            <Link onClick={() => toggleModal()} to={path} spy={true} smooth={true} offset={-100}
                                                key={path} className='text-xs block cursor-pointer hidden lg:flex items-center  text-gray900 ☐ hover:text-brandPrimary
                  first:font-medium'><span>{link}</span> <span className='pl-1'>{openModal ? <IoIosArrowUp /> : <IoIosArrowDown />}</span></Link>
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
                            {isLogin ?
                                (
                                    <Link onClick={() => setIsLogin(true)} className='hidden lg:flex items-center cursor-pointer text-brandPrimary hover:text-gray900 text-xs'>
                                        <Dropdown label="Account" inline>
                                            <Dropdown.Item className='mt-2'><RiFilePaper2Line className='mr-2' style={{ fontSize: '1rem' }} /> Purchase History</Dropdown.Item>
                                            <Dropdown.Item><RxVideo className='mr-2' style={{ fontSize: '1.1rem' }} /> Video Stream</Dropdown.Item>
                                            <Dropdown.Item><MdNotificationsNone className='mr-2' style={{ fontSize: '1.3rem' }} /> Notifications</Dropdown.Item>
                                            <Dropdown.Item><HiOutlineSquares2X2 className='mr-2' style={{ fontSize: '1.3rem' }} /> Settings</Dropdown.Item>
                                            <Dropdown.Item className='mb-2' onClick={toggleLogin}><BiLogOut className='mr-2' style={{ fontSize: '1.3rem' }} /> Sign out</Dropdown.Item>
                                        </Dropdown>
                                    </Link>
                                )
                                :
                                (<Link onClick={() => setIsLogin(true)} className='hidden lg:flex items-center cursor-pointer text-brandPrimary hover:text-gray900 text-xs'>Login</Link>)
                            }
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
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`} style={{ zIndex: 100 }}>
                        {
                            navItems.map(({ link, path }) => {
                                return (<Link onClick={() => toggleMenu()} to={path} spy={true} smooth={true} offset=
                                    {-100} key={path} className='block text-base text-white hover:text-brandPrimary
                                        first:font-medium'>{link}</Link>)
                            }
                            )
                        }
                        <div className='mt-4 '>
                            <button className='bg-white text-brandPrimary py-2 px-4 mt-5 transition-all duration-300 rounded-3xl hover:bg-neutralDGrey text-s'>Register Now</button>
                            <button className='bg-white text-brandPrimary py-2 px-4 transition-all duration-300 rounded-3xl hover:bg-neutralDGrey ml-4 text-s'>Login</button>
                        </div>


                    </div>

                </nav>
                {openModal ?
                    (
                        <div className='px-16 modal-container' style={{ width: '100wh', position: 'absolute', backgroundColor: 'white', zIndex: 200 }}>
                            <div className='flex mx-12 py-8' style={{ zIndex: '800' }}>
                                <div className='' style={{ width: '40%' }}>
                                    <h1 className='text-4xl font-semibold'>Join our <br />registration list</h1>
                                    <p className='mt-6 pr-16'>Join our
                                        registration list
                                        And receive updates, expert educational insights, and early access to our platform.
                                        Join</p>

                                    <div className='mt-9 flex space-x-5'>
                                        <button className='flex bg-brandPrimary text-white py-2 px-5 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-s'>Join</button>
                                        <button className='flex  item-center  text-brandPrimary border border-brandPrimary py-1 px-2 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-s'><AiOutlineMail className='self-center' style={{ fontSize: '1.4rem' }} /></button>
                                        <button className='flex  item-center  text-brandPrimary border border-brandPrimary py-1 px-2 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-s'><BiLogoFacebook className='self-center' style={{ fontSize: '1.4rem' }} /></button>
                                        <button className='flex  item-center  text-brandPrimary border border-brandPrimary py-1 px-2 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-s'><AiOutlineWhatsApp className='self-center' style={{ fontSize: '1.4rem' }} /></button>
                                        <button className='flex  item-center  text-brandPrimary border border-brandPrimary py-1 px-2 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-s'><AiOutlineTwitter className='self-center' style={{ fontSize: '1.4rem' }} /></button>
                                        <button className='flex  item-center  text-brandPrimary border border-brandPrimary py-1 px-2 transition-all duration-300
                        rounded-3xl hover:bg-neutralDGrey text-s'><AiOutlineInstagram className='self-center' style={{ fontSize: '1.4rem' }} /></button>
                                    </div>
                                </div>
                                <div className='px-5' style={{ width: '28%' }}>
                                    <ul className='space-y-4 list-disc text-brandPrimary' >
                                        <li><a href=''>Masterclass</a></li>
                                        <li><a href=''>Webinar</a></li>
                                        <li><a href=''>CB Connect</a></li>
                                        <li><a href=''>Blogs</a></li>
                                    </ul>
                                </div>
                                <div className='flex justify-content-end'>
                                    <img width={500} src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/dropdown/cover.png?raw=true" ></img>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <></>
                    )
                }

            </header >


        </div >
    )
}
