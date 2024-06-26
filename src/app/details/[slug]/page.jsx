'use client'
import ProductRelated from '@/app/components/ProductRelated'
import StarsRate from '@/app/components/Star'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Page({ params }) {
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
  const detailProduct = data ? (data.find(detail => detail.name.split(' ').join('').toLocaleLowerCase() === params.slug)
  ):(<p>loading</p>)

  const openWhatsApp = () => {
    const phoneNumber = '+2347081887562';
    const message = `I am interested in your product: ${detailProduct.name}.`;
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div>
      <div className='bg-white pb-10'>
        <div className='mb-6 pt-8 '>
          <div className='bg-gray-100 h-[50px] w-full text-center flex items-center md:px-28 px-4'>
            <div className='flex md:space-x-6 space-x-1 text-gray-600'>
              <h2 className='text-[16px] font-semibold'><Link href={'/'}>Home </Link></h2>
              <span>/</span>
              <h2 className='text-[16px] font-semibold'><Link href={'/'}>Clothing </Link></h2>
              <span>/</span>
              <h2 className='text-red-500 text-[16px] font-semibold '>{detailProduct.name}</h2>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:px-28 px-10 bg-white  space-x-4'>
          <div className='bg-gray-100 flex justify-center items-center rounded-md'>
            <Image src={detailProduct.image} loading='lazy' quality={100} height={1300} width={1300} alt={detailProduct.name} className='globals_image' />
          </div>

          <div>
            <h2 className='font-bold text-[23px] md:mt-0 mt-5'>{detailProduct.name}</h2>
            <div className='my-4'>
              <StarsRate />
            </div>
            <div className='flex space-x-3'>
              <h2 className='font-bold text-gray-700 text-[17px]'>&#8358;{detailProduct.price} </h2>
              {detailProduct.previous_amount && (
                <span className='text-gray-500 text-[17px] line-through'>&#8358;{detailProduct.previous_amount}</span>
              )}
            </div>

            <div className='w-full h-0.5 bg-gray-200 my-8'></div>

            <div className='pr-5'>
              <h2 className='text-wrap text-gray-700'>{detailProduct.description}</h2>
            </div>

            <div className='w-full h-0.5 bg-gray-200 my-8'></div>

            {/* Button to open WhatsApp */}
            <button onClick={openWhatsApp} className='bg-red-500 text-white p-3 rounded-sm px-12 mb-9 text-[18px]'>Contact via WhatsApp</button>

            <div>
              <h2 className='text-gray-600 text-[16px] font-semibold'>Category: <span className='text-gray-500 font-normal'>{detailProduct.category}</span></h2>
            </div>
          </div>
        </div>
      </div>
      {detailProduct.clothing_class && (
        <ProductRelated
          currentProductName={detailProduct.name}
          currentProductClasses={[detailProduct.clothing_class]}
        />
      )}
    </div>

  )
}
