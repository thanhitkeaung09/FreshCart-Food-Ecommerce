import React, {useEffect} from 'react';
import {BsFillCaretLeftFill, BsFillCaretRightFill} from "react-icons/bs";
import Swiper from "swiper";
import useSwiper from "../helper/useSwiperCategory";

const MyComponent = () => {
    const [swiper] = useSwiper();

    useEffect(()=>{
        swiper();
    })

    const handleNext = () =>{
        const swiper = new Swiper(".mySwiperCat", {
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                // when window width is >= 320px
                375: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            },
            slidesPerGroup: 2,
            loop: true,

            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,

            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        swiper.slideNext();
    }

    const handlePrev = () =>{
        const swiper = new Swiper(".mySwiperCat", {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            breakpoints: {
                // when window width is >= 320px
                375: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            },
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,

            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        swiper.slidePrev()
    }
    return (
        <div>
            <div className="grid grid-cols-8 mt-[60px] mb-[30px]">
                <div className="col-span-8 flex justify-between items-center">
                    <h1 className={'text-[25px] md:text-[30px] '} >Featured Categories</h1>
                    <div className="flex ">
                        <div onClick={handlePrev} className="group w-[40px] h-[40px] bg-gray-200 hover:bg-[#0aad0a] rounded-full flex justify-center items-center  focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <BsFillCaretLeftFill  className={'group-hover:text-white ' } >
                                {/*<div className="swiper-button-next"></div>*/}
                            </BsFillCaretLeftFill>
                        </div>

                        <div onClick={handleNext} className="group w-[40px] h-[40px] bg-gray-200 hover:bg-[#0aad0a] rounded-full flex justify-center items-center focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <BsFillCaretRightFill className={'group-hover:text-white'} >
                                {/*<div className="swiper-button-prev"></div>*/}
                            </BsFillCaretRightFill>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
