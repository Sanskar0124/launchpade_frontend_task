import React, { useState } from 'react';
import './WhatsNew.css'; // Import your CSS file for styling
import { CgArrowLongRight } from "react-icons/cg";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const WhatsNew = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        // setHoveredIndex(null);
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
        <div className='mx-16'>
            <div className='flex justify-between whats-new-container'>
                <div className='headingText'>
                    <h2 className='font-normal text-7xl  '> Explore. <br /> Upskill. <br />Elevate.</h2>
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
                    </div>
                    <div className="image-container">
                        <img
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/second_image.png?raw=true"
                            alt="Second Image"
                            className={getImageSize(1)}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className="image-container">
                        <img
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/third_image.png?raw=true"
                            alt="Third Image"
                            className={getImageSize(2)}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
            </div>

            <div className='lg:hidden mb-16'>
                <Swiper
                    slidesPerView={1.6}
                    // centeredSlides={true}
                    spaceBetween={100}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper swiper-container-custom"
                >
                    <SwiperSlide>
                        <div className="swiper-image-container">
                            <img
                                src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/first_image.png?raw=true"
                                alt="First Image"
                                className={getImageSize(0)}
                                onMouseEnter={() => handleMouseEnter(0)}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-image-container">
                            <img
                                src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/second_image.png?raw=true"
                                alt="Second Image"
                                className={getImageSize(1)}
                                onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-image-container">
                            <img
                                src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/third_image.png?raw=true"
                                alt="Third Image"
                                className={getImageSize(2)}
                                onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='lg:hidden '>
                    <button style={{ color: '#374A58' }} className='discover-button bg-lightBlue text-white mt-10 transition-all duration-300 flex 
                         hover:bg-neutralDGrey text-3xl font-normal'>Discover Now <span className='self-center pl-2'><CgArrowLongRight style={{ fontSize: '1.6rem' }} /> </span></button>
                </div>
            </div>
        </div>
    );
};

export default WhatsNew;
