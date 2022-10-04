import React from 'react';
import {BsArrowRight} from "react-icons/bs"

const MyComponent = () => {
    return (
        <div className={'grid grid-cols-8 w-[90%] mx-auto'} >
            <div className="col-span-8 md:col-span-4 flex flex-col h-full justify-center">
                <div className="">
                    <span
                        className="bg-[#ffc107] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Free Shipping- orders over $100</span>
                    <h1 className={'text-[41px] md:text-[36px] font-extrabold my-5'} >Free Shipping on Orders Over <span className={'text-green-600'} >$100</span></h1>
                    <p className={'mb-5'}>Free Shipping to First Time Customers only, After Promotions and Discounts are applied.</p>
                    <button type="button"
                            className=" text-white bg-[#001e2b] hover:bg-[#26404b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        Shop now
                        <BsArrowRight className={"ml-2"} />
                    </button>
                </div>
            </div>
            <div className="col-span-4 hidden md:block">
                <img src={require("../assets/images/fruittwo.png")} alt=""/>
            </div>
        </div>
    );
};

export default MyComponent;
