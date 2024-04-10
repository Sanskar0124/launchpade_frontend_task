import React, { useRef, useState, useEffect } from 'react';
import './WhatsNew.css'; // Import your CSS file for styling
import { CgArrowLongRight } from "react-icons/cg";
import 'swiper/css';
import 'swiper/css/pagination';
import WhatsNewSwiper from './WhatsNewSwiper';

const WhatsNew = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        // setHoveredIndex(null);
    };

    const getImageTextSize = index => {
        if (!hoveredIndex && index === 0)
            return 'largeimgtext0'
        else if (!hoveredIndex && index === 1)
            return 'mediumimgtext0'
        else if (!hoveredIndex && index === 2)
            return 'smallimgtext0'
        if (hoveredIndex === 0 && index === 1)
            return 'medium0';
        else if (hoveredIndex === 0 && index === 2)
            return 'small0';
        else if (hoveredIndex === 1 && index === 0)
            return 'mediumimgtext1';
        else if (hoveredIndex === 1 && index === 2)
            return 'smallimgtext1';
        else if (hoveredIndex === 1 && index === 1)
            return 'largeimgtext1';
        else if (hoveredIndex === 2 && index === 2)
            return 'largeimgtext2';
        else if (hoveredIndex === 2 && index === 1)
            return 'mediumimgtext2';
        else if (hoveredIndex === 2 && index === 0)
            return 'smallimgtext2';
    };


    const getImageSize = index => {
        if (!hoveredIndex && index === 0)
            return 'large'
        else if (!hoveredIndex && index === 1)
            return 'medium0'
        else if (!hoveredIndex && index === 2)
            return 'small0'
        else if (hoveredIndex === index && index === 2)
            return 'large2';
        else if (hoveredIndex === index)
            return 'large';
        if (hoveredIndex === 0 && index === 1)
            return 'medium0';
        else if (hoveredIndex === 0 && index === 2)
            return 'small0';
        else if (hoveredIndex === 1 && index === 0)
            return 'medium1';
        else if (hoveredIndex === 1 && index === 2)
            return 'small1';
        else if (hoveredIndex === 2 && index === 1)
            return 'medium2';
        else if (hoveredIndex === 2 && index === 0)
            return 'small2';
    };

    return (
        <div className='mx-16 whatsNew-main-container'>
            <div className='flex justify-between whats-new-container'>
                <div className='headingText'>
                    <h2 className='font-normal text-7xl  heading-text'> Explore. <br /> Upskill. <br />Elevate.</h2>
                    <button style={{ color: '#374A58' }} className='bg-lightBlue hidden lg:flex text-white mt-12 py-5 px-16 transition-all duration-300 
                         hover:bg-neutralDGrey text-base font-normal'>Discover Now <span className='self-center pl-2'><CgArrowLongRight style={{ fontSize: '1.6rem' }} /> </span></button>
                </div>
                <div className="image-gallery hidden lg:flex">
                    <div className="image-container">
                        <img
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/first_image.png?raw=true"
                            alt="First Image"
                            className={getImageSize(0)}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={getImageTextSize(0)}>
                            <div className='flex items-center img-text-head'>
                                <sapn className='bg-imgCircleColor1 img-text-circle'></sapn>
                                <h2 className='img-text-title'>Masterclass</h2>
                            </div>
                            <p className={`img-text-p ${hoveredIndex === 0 ? '' : 'hidden'}`}>Real-world learnings from the best.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/second_image.png?raw=true"
                            alt="Second Image"
                            className={getImageSize(1)}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={getImageTextSize(1)}>
                            <div className='flex items-center img-text-head'>
                                <sapn className='bg-imgCircleColor2 img-text-circle'></sapn>
                                <h2 className='img-text-title'>Webinar</h2>
                            </div>
                            <p className={`img-text-p ${hoveredIndex === 1 ? '' : 'hidden'}`}>Learn Industry relevant skills online.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/third_image.png?raw=true"
                            alt="Third Image"
                            className={getImageSize(2)}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={getImageTextSize(2)}>
                            <div className='flex items-center img-text-head'>
                                <sapn className='bg-imgCircleColor3  img-text-circle'></sapn>
                                <h2 className='img-text-title'>Podcast</h2>
                            </div>
                            <p className={`img-text-p ${hoveredIndex === 2 ? '' : 'hidden'}`}>Learn Industry trends from the experts.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden mb-16 swiper-div' >
                <WhatsNewSwiper hoveredIndex={hoveredIndex} />
            </div>
        </div >
    );
};

export default WhatsNew;
