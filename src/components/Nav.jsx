import React, {useRef, useState} from 'react';
import { FiMapPin } from "react-icons/fi";
import {BsJustify} from "react-icons/bs"
import {BsGrid} from "react-icons/bs"
import Logo from "../assets/images/freshcart-logo.svg"
import "../index.css"
import useSwiper from "../helper/useSwiper"

const MyComponent = () => {
    const [data] = useSwiper()

   const [isHover,setHover] = useState()

    const handleAni = () =>{

    }

    return (
        <div>
            <div className=" w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-10 z-50">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <nav className='h-[100%] flex items-center'>
                            <a href="#">
                                <img src={require("../assets/images/freshcart-logo.svg").default} className={"!max-w-[400%]"} alt=""/>
                                {/*{data}*/}
                                {/*<img src={Logo} className={""} alt=""/>*/}
                            </a>
                        </nav>
                    </div>
                    <div className=" col-span-6 md:col-span-8 ">
                        <div className=" justify-center space-x-3 hidden md:flex">
                            <input type="text" id="first_name"
                                   className="bg-gray-50 border outline-none border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[457px] leading-[21px] px-2.5 py-1 md:w-[45%]"
                                   placeholder="" required/>
                            <button type="button"
                                    className=" border border-gray-300 text-gray-500 hover:bg-gray-300 rounded-lg text-sm px-5 py-2.5 text-center flex items-center space-x-2  "><FiMapPin/> <span className={'font-[14px]'} >Location</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2 w-[105px] sm:w-[230px] md:w-full">
                        <div className="flex  space-x-2 h-[100%] items-center justify-end">
                            <div className="relative hidden md:block">
                                <img src={require("../assets/images/heart.svg").default} alt=""/>
                                <h1 className='absolute text-white -top-5 left-1.5 text-[15px] flex justify-center items-center bg-green-700 w-6 h-6 text-center rounded-full' >5</h1>
                            </div>
                            <div className="">
                                <img src={require("../assets/images/user.svg").default} className={"!max-w-[400%]"} alt=""/>
                            </div>
                            <div className="relative">
                                <img src={require("../assets/images/cart.svg").default} className={"!max-w-[400%]"} alt=""/>
                                <h1 className='absolute text-white -top-5 left-1.5 text-[15px] flex justify-center items-center bg-green-700 w-6 h-6 text-center rounded-full' >2</h1>
                            </div>
                            <div className="flex">
                                <button>
                                    <BsJustify size={25} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-12 mt-5 hidden md:hidden lg:block">
                        <div className="flex items-center space-x-7">
                            <button type="button"
                                    className="  text-white bg-[#0aad0a]  rounded-lg text-sm px-8 py-2.5 text-center flex items-center space-x-2  "><BsGrid size={17}/> <span className={'font-[14px]'} >All Department</span>
                            </button>
                            <div className="group z-50">
                                    <button id="mega-menu-dropdown-button"
                                            data-dropdown-toggle="mega-menu-dropdown"
                                            className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                        Home <svg aria-hidden="true"
                                                     className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    </button>
                                    <div id="mega-menu-dropdown"
                                         className="mt-0.5 grid animate__animated animate__fadeIn hidden group-hover:block absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                            <ul className="space-y-4"
                                                aria-labelledby="mega-menu-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Home 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Home 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Home 3
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                            </div>

                            <div className="group">
                                <button onMouseOver={handleAni} id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                    Shop <svg aria-hidden="true"
                                              className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                              fill="currentColor" viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                </button>
                                <div id="mega-menu-dropdown"
                                     className={ `mt-0.5 hidden animate__animated animate__fadeIn grid  group-hover:block absolute z-10  w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700  dark:bg-gray-700`}>
                                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul className="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Shop Grid Filter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Shop Grid 3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Shop List Filter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Shop - Filter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Shop Wide
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Shop Single
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <button id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                    Store <svg aria-hidden="true"
                                              className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                              fill="currentColor" viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                </button>

                                <div id="mega-menu-dropdown"
                                     className="mt-0.5 grid animate__animated animate__fadeIn hidden group-hover:block absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul className="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Store List
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Store Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Store Single
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <div className="group">
                                <button id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                    Mega menu <svg aria-hidden="true"
                                              className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                              fill="currentColor" viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                </button>
                                <div id="mega-menu-dropdown"
                                     className="mt-0.5   absolute left-[400px] grid animate__animated animate__fadeIn hidden group-hover:block absolute z-[100] grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="flex justify-center  shadow-md rounded-lg" >
                                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white w-[200px]">
                                            <ul className="space-y-4"
                                                aria-labelledby="mega-menu-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Diary Bread and Egg
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Butter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Milk Drinks
                                                    </a>
                                                </li>
                            
                                            </ul>
                                        </div>
                            
                                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white w-[200px]">
                                            <ul className="space-y-4"
                                                aria-labelledby="mega-menu-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Breakfast and Instant Food
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Noodle , Pasta and soup
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Vermicelli
                                                    </a>
                                                </li>
                            
                                            </ul>
                                        </div>
                            
                                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white w-[200px]">
                                            <ul className="space-y-4"
                                                aria-labelledby="mega-menu-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Cold Drinks and Juices
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Soft Drinks
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                        Fruit Juices
                                                    </a>
                                                </li>
                            
                                            </ul>
                                        </div>
                            
                            
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <button id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                    Pages <svg aria-hidden="true"
                                              className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                              fill="currentColor" viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                </button>
                                <div id="mega-menu-dropdown"
                                     className="mt-0.5 grid animate__animated animate__fadeIn hidden group-hover:block absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul className="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Page 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Page 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Page 3
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <button id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                    Account <svg aria-hidden="true"
                                              className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                              fill="currentColor" viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                </button>
                                <div id="mega-menu-dropdown"
                                     className="mt-0.5 grid animate__animated animate__fadeIn hidden group-hover:block absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul className="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Sign in
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Logout
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <button id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full  font-medium text-gray-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0aad0a] md:p-0 ">
                                    Docs <svg aria-hidden="true"
                                              className=" ml-1 w-5 h-5 md:w-4 md:h-4"
                                              fill="currentColor" viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                </button>
                                <div id="mega-menu-dropdown"
                                     className="mt-0.5 grid animate__animated animate__fadeIn hidden group-hover:block absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul className="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Documentation 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Documentation 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-500">
                                                    Documentation 3
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
