import React, { useRef, useState, useEffect } from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './WhatsNewSwiper.css'
import { CgArrowLongRight } from "react-icons/cg";

export default function WhatsNewSwiper({ hoveredIndex }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const getSwiperClass = (index) => {
        if (activeIndex === 0 && index === 0)
            return 'firstImg0'
        if (activeIndex === 0 && index === 1)
            return 'secondImg0'
        if (activeIndex === 1 && index === 0)
            return 'firstImg1'
        if (activeIndex === 1 && index === 1)
            return 'secondImg1'
        if (activeIndex === 1 && index === 2)
            return 'thirdImg1'
        if (activeIndex === 2 && index === 1)
            return 'secondImg2'
        if (activeIndex === 2 && index === 2)
            return 'thirdImg2'
    }

    const getSwiperImageClass = (index) => {
        if (activeIndex === 0 && index === 0)
            return 'swiperFirstImageClass0'
        else if (activeIndex === 0 && index === 1)
            return 'swiperSecondImageClass0'
        else if (activeIndex === 1 && index === 0)
            return 'swiperFirstImageClass1'
        else if (activeIndex === 1 && index === 1)
            return 'swiperSecondImageClass1'
        else if (activeIndex === 1 && index === 2)
            return 'swiperThirdImageClass1'
        else if (activeIndex === 2 && index === 1)
            return 'swiperSecondImageClass2'
        else if (activeIndex === 2 && index === 2)
            return 'swiperThirdImageClass2'
    }

    const getImageSize = (index) => {
        if (activeIndex === 0 && index === 0)
            return 'swiperImgOne0'
        else if (activeIndex === 0 && index === 1)
            return 'swiperImgTwo0'
        else if (activeIndex === 1 && index === 0)
            return 'swiperImgOne1'
        else if (activeIndex === 1 && index === 1)
            return 'swiperImgTwo1'
        else if (activeIndex === 1 && index === 2)
            return 'swiperImgThree1'
        else if (activeIndex === 2 && index === 1)
            return 'swiperImgTwo2'
        else if (activeIndex === 2 && index === 2)
            return 'swiperImgThree2'
    }

    return (
        <div>
            <Swiper
                effect={'coverflow'}
                spaceBetween={80}
                grabCursor={true}
                slidesPerView={1.6}
                slideShadows={false}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    modifier: 2.5,
                    depth: 100,
                    slideShadows: false,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                onSlideChange={(e) => setActiveIndex(e.realIndex)}
            >
                <SwiperSlide className='swiper-slider-container'>
                    <div className={`${getSwiperClass(0)} swiper-image-container`}>
                        <img
                            className={`${getImageSize(0)}`}
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/first_image.png?raw=true"
                            alt="First Image"
                        />
                        <div className={`${getSwiperImageClass(0)}`}>
                            <div className='flex items-center swiper-img-text-head'>
                                <sapn className='bg-imgCircleColor1 swiper-img-text-circle'></sapn>
                                <h2 className='swiper-img-text-title'>Masterclass</h2>
                            </div>
                            <p className={`swiper-img-text-p ${activeIndex === 0 ? '' : 'hidden'}`}>Real-world learnings from the best.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${getSwiperClass(1)} swiper-image-container`}>
                        <img
                            className={`${getImageSize(1)}`}
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/second_image.png?raw=true"
                            alt="Second Image"
                        />
                        <div className={`${getSwiperImageClass(1)}`}>
                            <div className='flex items-center swiper-img-text-head'>
                                <sapn className='bg-imgCircleColor2 swiper-img-text-circle'></sapn>
                                <h2 className='swiper-img-text-title'>Webinar</h2>
                            </div>
                            <p className={`swiper-img-text-p ${activeIndex === 1 ? '' : 'hidden'}`}>Learn Industry relevant skills online.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${getSwiperClass(2)} swiper-image-container`}>
                        <img
                            className={`${getImageSize(2)}`}
                            src="https://github.com/Sanskar0124/launchpade_frontend_task/blob/master/src/assets/whats_new/third_image.png?raw=true"
                            alt="Third Image"
                        />
                        <div className={`${getSwiperImageClass(2)}`}>
                            <div className='flex items-center swiper-img-text-head'>
                                <sapn className='bg-imgCircleColor3 swiper-img-text-circle'></sapn>
                                <h2 className='swiper-img-text-title'>Podcast</h2>
                            </div>
                            <p className={`swiper-img-text-p ${activeIndex === 2 ? '' : 'hidden'}`}>Learn Industry trends from the experts.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >

                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='lg:hidden '>
                <button style={{ color: '#374A58' }} className='discover-button bg-lightBlue text-white mt-10 transition-all duration-300 flex 
                         hover:bg-neutralDGrey text-3xl font-normal'>Discover Now <span className='self-center pl-2'><CgArrowLongRight style={{ fontSize: '1.6rem' }} /> </span></button>
            </div>
        </div>
    )
}
