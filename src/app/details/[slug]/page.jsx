import { file } from '@/app/File'
import StarsRate from '@/app/Star'
import Image from 'next/image'
import React from 'react'

export default function page({ params }) {
  const detailproduct = file.find((detail) => detail.name.split(' ').join('').toLocaleLowerCase() == params.slug)
  return (
    <div className='bg-white pb-10'>
      <div className='mb-6 pt-8 '>
        <div className='bg-gray-100 h-[50px] w-full text-center flex items-center px-28'>
          <div className='flex space-x-6 text-gray-600'>
            <h2 className='text-[16px] font-semibold'>Home</h2>
            <h2 className='text-[16px] font-semibold'>Clothing</h2>
            <h2 className='text-red-500 text-[16px] font-semibold'>{detailproduct.name}</h2>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-white px-28 space-x-4'>
        <div className='bg-gray-100'>
          <Image src={detailproduct.image} quality={100} height={300} width={529} />
        </div>

        <div>
          <h2 className='font-bold text-[23px]'>{detailproduct.name}</h2>
          <div className='my-4'>
            <StarsRate />
          </div>
          <div className='flex space-x-3'>
            <h2 className='font-bold text-gray-700 text-[17px]'>&#8358;{detailproduct.price} </h2>
            <span className='text-gray-500 text-[17px] line-through'>&#8358;{detailproduct.preAmount}</span>
          </div>

          <div className='w-full h-0.5 bg-gray-200 my-8'></div>

          <div className='w-[600px] '>
            <h2 className='text-wrap text-gray-700'>{detailproduct.description}</h2>
          </div>

          <div className='w-full h-0.5 bg-gray-200 my-8'></div>

          <button className='bg-red-500 text-white p-3 rounded-sm px-12 mb-9 text-[18px]'>Proceed</button>

          <div>
            <h2 className='text-gray-600 text-[16px] font-semibold'>Category: <span className='text-gray-500 font-normal'>{detailproduct.category}</span></h2>
          </div>
        </div>

      </div>
    </div>
  )
}
