import React, {useEffect} from 'react';
import Swiper from "swiper";
import useSwiper from "../helper/useSwiperCategory";

const MyComponent = () => {
    const [swiper] = useSwiper();
    useEffect(()=>{
        swiper();
    })
    return (
        <div>
            <div className="swiper mySwiperCat">
                <div className="swiper-wrapper">
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-tea-coffee-drinks.jpg")} alt=""/>
                            <p>Tea, Coffee, Drinks</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-atta-rice-dal.jpg")} alt=""/>
                            <p>Atta, Rice, Dal</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-baby-care.jpg")} alt=""/>
                            <p>Baby Care</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-bakery-biscuits.jpg")} alt=""/>
                            <p>Bakery Biscuits</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-chicken-meat-fish.jpg")} alt=""/>
                            <p>Chicken, Meat, Fish</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-cleaning-essentials.jpg")} alt=""/>
                            <p>Cleaning Essentials</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-dairy-bread-eggs.jpg")} alt=""/>
                            <p>Diary Bread Eggs</p>
                        </div>
                    </div>
                    <div className="swiper-slide border p-[30px] rounded-lg">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={require("../assets/images/category-instant-food.jpg")} alt=""/>
                            <p>Instant Food</p>
                        </div>
                    </div>
                    {/*<div className="swiper-slide border p-[30px] rounded-lg">*/}
                    {/*    <div className="flex flex-col items-center space-y-3">*/}
                    {/*        <img src={require("../assets/images/category-pet-care.jpg")} alt=""/>*/}
                    {/*        <p>Pet Care</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="swiper-slide border p-[30px] rounded-lg">*/}
                    {/*    <div className="flex flex-col items-center space-y-3">*/}
                    {/*        <img src={require("../assets/images/category-snack-munchies.jpg")} alt=""/>*/}
                    {/*        <p>Snack Munchies</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="swiper-button-next"></div>*/}
                {/*<div className="swiper-button-prev"></div>*/}
                {/*<div className="swiper-pagination"></div>*/}
            </div>
        </div>
    );
};

export default MyComponent;
