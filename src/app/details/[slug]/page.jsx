import { file } from '@/app/File'
import Related from '@/app/Related'
import StarsRate from '@/app/Star'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page({ params }) {
  const detailproduct = file.find((detail) => detail.name.split(' ').join('').toLocaleLowerCase() == params.slug)
  return (
    <div className='bg-white pb-10'>
      <div className='mb-6 pt-8 '>
        <div className='bg-gray-100 h-[50px] w-full text-center flex items-center md:px-28 px-4'>
          <div className='flex md:space-x-6 space-x-1 text-gray-600'>
            <h2 className='text-[16px] font-semibold'><Link href={'/'}>Home </Link></h2>
            <span>/</span>
            <h2 className='text-[16px] font-semibold'><Link href={'/'}>Clothing </Link></h2>
            <span>/</span>
            <h2 className='text-red-500 text-[16px] font-semibold '>{detailproduct.name}</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:px-28 px-10 bg-white  space-x-4'>
        <div className='bg-gray-100 flex justify-center items-center'>
          <Image src={detailproduct.image} quality={100} height={1300} width={1300} className='globals_image'/>
        </div>

        <div>
          <h2 className='font-bold text-[23px] md:mt-0 mt-5'>{detailproduct.name}</h2>
          <div className='my-4'>
            <StarsRate />
          </div>
          <div className='flex space-x-3'>
            <h2 className='font-bold text-gray-700 text-[17px]'>&#8358;{detailproduct.price} </h2>
            { detailproduct.preAmount && (
            <span className='text-gray-500 text-[17px] line-through'>&#8358;{detailproduct.preAmount}</span>
            )
            }
          </div>

          <div className='w-full h-0.5 bg-gray-200 my-8'></div>

          <div className='pr-5'>
            <h2 className='text-wrap text-gray-700'>{detailproduct.description}</h2>
          </div>

          <div className='w-full h-0.5 bg-gray-200 my-8'></div>

          <button className='bg-red-500 text-white p-3 rounded-sm px-12 mb-9 text-[18px]'>Proceed</button>

          <div>
            <h2 className='text-gray-600 text-[16px] font-semibold'>Category: <span className='text-gray-500 font-normal'>{detailproduct.category}</span></h2>
          </div>
        </div>

      </div>
      <Related />
    </div>
  )
}
