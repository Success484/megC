"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarsRate from './Star';
import TitleRelated from './TitleRelated';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Related({ currentProductName, currentProductClasses }) {
  const [data, setData] = useState(null)
    useEffect(()=> {
        const FetchApi = async () => {
            const response = await axios.get('https://meggieapi.onrender.com/clothing/')
            setData(response.data)
        }
        FetchApi()
    }, [])
  const relatedProducts = data ? (data.filter(product => currentProductClasses.includes(product.clothing_class) && product.name !== currentProductName)
  ):(<p>loading</p>)

  return (
    <div className='flex justify-center items-center'>
      <div className='flex items-center pb-20 py-[50px] md:px-28 px-4 '>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-2 gap-5'>
          {data && relatedProducts.map(product => (
            <section key={product.name}>
              <div className={`hover:bg-pink-200 ease-in-out duration-500 rounded-md bg-gray-200 relative`}>
                <div className={`flex justify-center items-center`}>
                  <Link href={`/details/${product.name.split(' ').join('').toLocaleLowerCase()}`}>
                    <Image src={product.image} loading='lazy' height={1300} width={1300} quality={100} alt='' className='cate_products' />
                  </Link>
                </div>
                <div className='text-[14px]'>
                  <div className='absolute top-0 left-0 bg-green-700 px-2.5 mt-5 ml-4'>
                    <h2 className='text-white font-medium'>New</h2>
                  </div>
                  {product.discount && (
                    <div className='absolute top-0 left-0 bg-orange-600 px-2.5 mt-[50px] ml-4'>
                      <h2 className='text-white font-medium'>-{product.discount}%</h2>
                    </div>
                  )}
                </div>
              </div>
              <div className='mt-2.5 space-y-2.5 pt-2'>
                <p className='text-[14px] font-medium text-gray-600'>{product.name}</p>
                <StarsRate />
                <div className='flex space-x-2 mb-3 pb-8'>
                  <p className='font-bold text-gray-700 text-[15px]'>&#8358;{product.price}</p>
                  {product.previous_amount && (
                    <p className='text-gray-500 text-[15px] line-through'>&#8358;{product.previous_amount}</p>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
