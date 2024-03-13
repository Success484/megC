import React from 'react'
import { file } from './File'
import Image from 'next/image'
import style from './style/style.module.css'
import StarsRate from './Star'

export default function Display() {
    const display = file.map((file, index) => (
        <section key={index}>
            <div>
            <div className={`hover:bg-pink-200 ease-in-out duration-500 rounded-md bg-gray-200 relative`}>
                <div className={`flex justify-center items-center`}>
                <Image src={file.image} height={300} width={300} quality={100} className={`p-5 ${index == 8 || index == 9 || index == 10 || index == 11 ? style.larger_image:''} ${style.display_image}`} alt='' />
                </div>
                <div className='text-[14px]'>
                    <div className='absolute top-0 left-0 bg-green-700 px-2.5 mt-5 ml-4'><h2 className='text-white font-medium'>New</h2></div>
                    {file.discount && (
                        <div className='absolute top-0 left-0 bg-orange-600 px-2.5 mt-[50px] ml-4'><h2 className='text-white font-medium'>&#8722;{file.discount}</h2></div>
                    )}
                </div>
            </div>
            <div className='mt-2.5'>
                <p className='text-[14px] font-medium text-gray-600'>{file.name}</p>
                <StarsRate />
                <div className='flex space-x-2 mb-3'>
                    <p className='font-bold text-gray-700 text-[15px]'>&#8358;{file.price}</p>
                    {file.preAmount && (
                    <p className='text-gray-500 text-[15px] line-through'>&#8358;{file.preAmount}</p>
                    )}
                </div>
            </div>
            </div>
        </section>
    ))
  return (
    <div className='px-10 flex justify-center items-center pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-2 gap-5'>
            {display}
        </div>
    </div>
  )
}
