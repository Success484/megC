"use client"
import React from 'react'
import Image from 'next/image'
import style from '../style/style.module.css'
import StarsRate from './Star'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Display() {
    const [data, setData] = useState(null)
    useEffect(()=> {
        const FetchApi = async () => {
            const token = '5b82083b8d3eb5322b1d682474ba15e888b65625';
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
        
            try {
                const response = await axios.get('https://meggieapi.onrender.com/clothing/', config);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        FetchApi()
    }, [])

    const display = data ? (data.map((file, index) => (
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
    ))): (
        <p>Loading...</p>
      );
    return (
        <div className='px-10 flex justify-center items-center pb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-2 gap-5'>
                {display}
            </div>
        </div>
    )
}
