"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '../style/style.module.css';
import { BsSearch } from 'react-icons/bs'
import StarsRate from './Star';
import Link from 'next/link';
import axios from 'axios';

export default function Display() {
    const [data, setData] = useState([]);
    const [allDataLoaded, setAllDataLoaded] = useState(false);
    const [search, setSearch] = useState('')
    function inputChange(e) {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const token = '5b82083b8d3eb5322b1d682474ba15e888b65625';
        const config = {
            headers: {
                'Authorization': `Token ${token}`
            }
        };

        try {
            const response = await axios.get('https://meggieapi.onrender.com/clothing/', config);
            setData(response.data.slice(0, 24)); // Display the first 24 items initially
            if (response.data.length <= 24) {
                setAllDataLoaded(true); // If total items are less than or equal to 24, set allDataLoaded to true
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSeeMore = async () => {
        try {
            const token = '5b82083b8d3eb5322b1d682474ba15e888b65625';
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(`https://meggieapi.onrender.com/clothing/?limit=100`, config); // Fetch all data
            setData(response.data); // Update data state with all fetched data
            setAllDataLoaded(true); // Set allDataLoaded to true to indicate that all data has been loaded
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // filler search items
    const filteredSearchItem = data.filter(filteredItem => filteredItem.name.toLowerCase().includes(search.toLowerCase()))
    const display = filteredSearchItem.length > 0 ? filteredSearchItem.map((file, index) => (
        <section key={index}>
            <div>
                <div className={`hover:bg-pink-200 ease-in-out duration-500 rounded-md bg-gray-200 relative`}>
                    <div className={`flex justify-center items-center`}>
                        <Link href={`details/${file.name.split(' ').join('').toLocaleLowerCase()}`}>
                            <Image src={file.image} loading='lazy' height={300} width={300} quality={100} className={`p-5 ${index == 12 || index == 13 || index == 14 || index == 15 ? style.larger_image : ''} ${style.display_image}`} alt={file.name} />
                        </Link>
                    </div>
                    <div className='text-[14px]'>
                        <div className='absolute top-0 left-0 bg-green-700 px-2.5 mt-5 ml-4'><h2 className='text-white font-medium'>New</h2></div>
                        {file.discount && (
                            <div className='absolute top-0 left-0 bg-orange-600 px-2.5 mt-[50px] ml-4'><h2 className='text-white font-medium'>&#8722;{file.discount}</h2></div>
                        )}
                    </div>
                </div>
                <div className='mt-2.5 space-y-2.5 pt-2'>
                    <p className='text-[14px] font-medium text-gray-600'>{file.name}</p>
                    <StarsRate />
                    <div className='flex space-x-2 mb-3 pb-8'>
                        <p className='font-bold text-gray-700 text-[15px]'>&#8358;{file.price}</p>
                        {file.previous_amount && (
                            <p className='text-gray-500 text-[15px] line-through'>&#8358;{file.previous_amount}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )):(<h2>Sorry we do not have the item</h2>)

    return (
        <div>
            <div className='flex justify-center items-center p-14'>
            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                <input className='border p-2 px-4 rounded-lg w-full border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500' type='text' placeholder='Your product name...' 
                    value={search}
                    onChange={inputChange}/>
                    <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer' size={20}/>
                </div>
            </div>
            <div className='px-10 flex justify-center items-center pb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-2 gap-5'>
                    {display}
                </div>
            </div>
            {!allDataLoaded && (
                <button className='bg-white text-gray-700 font-medium border border-green-600 p-3 mx-10 mb-5 hover:bg-green-300 ease-linear' onClick={handleSeeMore}>See More</button>
            )}
        </div>
    );
}
