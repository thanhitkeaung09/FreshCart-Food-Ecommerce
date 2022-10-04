import Swiper from "swiper";


const useSwiper = () =>{
const swiper = () =>{
    const swiper = new Swiper(".mySwiperCat", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
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
}
return [swiper]
}

export default useSwiper