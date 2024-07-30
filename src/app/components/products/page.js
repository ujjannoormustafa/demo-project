"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import DialogBox from "../dialogBox/page"
import { Image } from "next/image";
const GetData = () => {


    const [data, setData] = useState([]);

    // Function to fetch data here..

    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes");

            // console.log(response.data.recipes); this just for testing purpose 

            setData(response.data.recipes);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);


    const [activeTab, setActiveTab] = useState('homeContent');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <div className={"w-[85%] mx-auto block"}>
            <h1 className={"lg:text-5xl text-3xl font-bold py-8  my-3"}>Week Orders</h1>
            <div>

                <div className="font-sans p-4">
                    {/* Top sectin menus and dialog button */}
                    <div className="flex  justify-between flex-wrap w-full  items-center">

                        <div>
                            <ul className="flex ">
                                <li
                                    id="homeTab"
                                    className={`tab text-base text-center py-3 p-1 lg:px-6 border-b-2 cursor-pointer transition-all ${activeTab === 'homeContent'
                                        ? 'text-blue-600 font-bold bg-gray-50 border-blue-600'
                                        : 'text-gray-600 font-semibold hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleTabClick('homeContent')}
                                >
                                    All Meals
                                </li>
                                <li
                                    id="week1"
                                    className={`tab text-base text-center py-3 p-1 lg:px-6 border-b-2 cursor-pointer transition-all ${activeTab === 'week1'
                                        ? 'text-blue-600 font-bold bg-gray-50 border-blue-600'
                                        : 'text-gray-600 font-semibold hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleTabClick('week1')}
                                >
                                    Week 1
                                </li>
                                <li
                                    id="week2"
                                    className={`tab text-base text-center py-3 p-1 lg:px-6 border-b-2 cursor-pointer transition-all ${activeTab === 'week2'
                                        ? 'text-blue-600 font-bold bg-gray-50 border-blue-600'
                                        : 'text-gray-600 font-semibold hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleTabClick('week2')}
                                >
                                    Week 2
                                </li>
                                <li
                                    id="week3"
                                    className={`tab text-base text-center py-3 p-1 lg:px-6 border-b-2 cursor-pointer transition-all ${activeTab === 'week3'
                                        ? 'text-blue-600 font-bold bg-gray-50 border-blue-600'
                                        : 'text-gray-600 font-semibold hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleTabClick('week3')}
                                >
                                    Week 3
                                </li>
                                <li
                                    id="week4"
                                    className={`tab text-base text-center py-3 p-1 lg:px-6 border-b-2 cursor-pointer transition-all ${activeTab === 'week4'
                                        ? 'text-blue-600 font-bold bg-gray-50 border-blue-600'
                                        : 'text-gray-600 font-semibold hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleTabClick('week4')}
                                >
                                    Week 4
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 flex justify-center">

                            <DialogBox />
                        </div>
                    </div>


                    {/* whole products */}
                    <div id="homeContent" className={`tab-content w-100 mt-8 ${activeTab === 'homeContent' ? 'block' : 'hidden'}`}>

                        <div className={"flex justify-center flex-wrap "}>


                            {data.length > 0 ? (

                                data.map((recipe) => (

                                    <div key={recipe.id} className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                                        <div className="min-h-[206px]">
                                            <img src={recipe.image} className="w-full" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-gray-800 text-xl font-bold">{recipe.name}</h3>
                                            <p className="mt-4 h-[250px] mb-4 overflow-hidden text-sm text-gray-500 leading-relaxed">
                                                {recipe.instructions.map((step, index) => (
                                                    <p key={index} className="mt-2 "> {step}</p>
                                                ))}
                                            </p>
                                            <div className={"flex flex-wrap mt-2 justify-between"}>
                                                <div className={"font-bold my-2"}>Cuisine: <span className={"font-thin"}>{recipe.cuisine}</span></div>
                                                <div className={"font-bold my-2"}>Rating: <span className={"font-thin"}>{recipe.rating}⭐</span></div>
                                            </div>
                                            <button
                                                type="button"
                                                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>

                                ))


                            ) : (

                                <p>Loading...</p>
                            )
                            }




                        </div>


                    </div>

                    <div id="profileContent" className={`tab-content flex justify-center flex-wrap   mt-8 ${activeTab === 'week1' ? 'block' : 'hidden'}`}>
                        {
                            data.slice(4, 8).map((recipe) => (

                                <div key={recipe.id} className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                                    <div className="min-h-[206px]">
                                        <Image alt={"image"} src={recipe.image} className="w-full" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-gray-800 text-xl font-bold">{recipe.name}</h3>
                                        <p className="mt-4 h-[250px] mb-4  text-sm text-gray-500 leading-relaxed">
                                            {recipe.instructions.map((step, index) => (
                                                <p key={index} className="mt-2   "> {step}</p>
                                            ))}
                                        </p>
                                        <div className={"flex flex-wrap justify-between"}>
                                            <div className={"font-bold my-2"}>Cuisine: <span className={"font-thin"}>{recipe.cuisine}</span></div>
                                            <div className={"font-bold my-2"}>Rating: <span className={"font-thin"}>{recipe.rating}⭐</span></div>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <div id="profileContent" className={`tab-content flex justify-center flex-wrap    mt-8 ${activeTab === 'week2' ? 'block' : 'hidden'}`}>
                        {
                            data.slice(11, 14).map((recipe) => (

                                <div key={recipe.id} className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                                    <div className="min-h-[206px]">
                                        <img src={recipe.image} className="w-full" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-gray-800 text-xl font-bold">{recipe.name}</h3>
                                        <p className="mt-4 h-[250px] mb-4  text-sm text-gray-500 leading-relaxed">
                                            {recipe.instructions.map((step, index) => (
                                                <p key={index} className="mt-2   "> {step}</p>
                                            ))}
                                        </p>
                                        <div className={"flex flex-wrap justify-between"}>
                                            <div className={"font-bold my-2"}>Cuisine: <span className={"font-thin"}>{recipe.cuisine}</span></div>
                                            <div className={"font-bold my-2"}>Rating: <span className={"font-thin"}>{recipe.rating}⭐</span></div>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <div id="profileContent" className={`tab-content flex justify-center flex-wrap gap-3 mt-8 ${activeTab === 'week3' ? 'block' : 'hidden'}`}>
                        {
                            data.slice(19, 22).map((recipe) => (

                                <div key={recipe.id} className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                                    <div className="min-h-[206px]">
                                        <img src={recipe.image} className="w-full" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-gray-800 text-xl font-bold">{recipe.name}</h3>
                                        <p className="mt-4 h-[250px] mb-4  text-sm text-gray-500 leading-relaxed">
                                            {recipe.instructions.map((step, index) => (
                                                <p key={index} className="mt-2   "> {step}</p>
                                            ))}
                                        </p>
                                        <div className={"flex flex-wrap justify-between"}>
                                            <div className={"font-bold my-2"}>Cuisine: <span className={"font-thin"}>{recipe.cuisine}</span></div>
                                            <div className={"font-bold my-2"}>Rating: <span className={"font-thin"}>{recipe.rating}⭐</span></div>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <div id="profileContent" className={`tab-content flex justify-center flex-wrap gap-3 mt-8 ${activeTab === 'week4' ? 'block' : 'hidden'}`}>
                        {
                            data.slice(23, 28).map((recipe) => (

                                <div key={recipe.id} className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                                    <div className="min-h-[206px]">
                                        <img src={recipe.image} className="w-full" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-gray-800 text-xl font-bold">{recipe.name}</h3>
                                        <p className="mt-4 h-[250px] mb-4  text-sm text-gray-500 leading-relaxed">
                                            {recipe.instructions.map((step, index) => (
                                                <p key={index} className="mt-2   "> {step}</p>
                                            ))}
                                        </p>
                                        <div className={"flex flex-wrap justify-between"}>
                                            <div className={"font-bold my-2"}>Cuisine: <span className={"font-thin"}>{recipe.cuisine}</span></div>
                                            <div className={"font-bold my-2"}>Rating: <span className={"font-thin"}>{recipe.rating}⭐</span></div>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>

            </div>


        </div>
    );
};

export default GetData;
