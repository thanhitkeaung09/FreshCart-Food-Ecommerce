import React, {useEffect} from 'react';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import HeroMainPage1 from "./HeroMainPage1";
import HeroMainPage2 from "./HeroMainPage2";
import useSwiper from "../helper/useSwiper";



const MyComponent = () => {
    const [swiper] = useSwiper();
    useEffect(()=>{
        swiper(".mySwiper")
    },[])
    return (
        <div>
            <div className="w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 ">

                        <div className="swiper mySwiper h-[55vh] md:h-[100%] lg:h-[100%]">
                            <div className="swiper-wrapper ">
                                <div className="swiper-slide bg-[#e3fcf7]">
                                    <HeroMainPage1/>
                                </div>
                                <div className="swiper-slide bg-gray-200">
                                    <HeroMainPage2/>
                                </div>
                            </div>
                            {/*<div className="swiper-pagination"></div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
