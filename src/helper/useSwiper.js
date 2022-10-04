import {useEffect, useState} from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const useSwiper = () =>{
    const swiper = (x) =>{
        var swiper = new Swiper(x, {
            spaceBetween: 30,
            loop : true,
            autoplay : {
                delay : 2000
            },
            pagination: {
                el: ".swiper-pagination",
                // number : 2,
                clickable: true,
            },
        });
    }


    return [swiper]
}
export default useSwiper