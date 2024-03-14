"use client"
import Image from 'next/image'
import React from 'react'
import style from './style/style.module.css'
import { motion } from 'framer-motion';

export default function Header() {
  const date = new Date().getFullYear()
  return (
    <div className='bg-pink-100 flex items-center justify-center space-x-10 md:space-x-10 sm:space-x-3'>
        <div className='p-10 relative top-[150px]'>
        <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        className={style.image}
      >
          <p className='text-[18px] mb-[-23px]'>NEW TREND {date}</p><br />
          <h2 className='font-serif text-[42px] tracking-widest'>Meg <span className='text-green-500'>Apparel</span></h2>
          <button className='bg-white px-10 py-3 mt-3 rounded-sm font-medium text-[14px] hover:bg-black hover:text-gray-100 duration-500 ease-in-out'>SHOP NOW</button>
      </motion.div>
        </div>
        <div className='md:block sm:block hidden'>
        <div className='flex justify-center items-center'>
        <motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  transition={{ duration: 0.9, ease: 'easeInOut' }}
  className={style.imageContainer} 
>
  <div className={`h-[300px] lg:h-[300px] md:h-[270px] sm:h-[230px] w-[300px] lg:w-[300px] sm:w-[230px] md:w-[270px]  absolute top-20 left-10 border-white ${style.border} z-[-1]`}>
  </div>
  <Image src={'/header.png'} height={300} loading='lazy' quality={100} width={300} alt='' className={style.image} />
</motion.div>

        </div>
        </div>
    </div>
  )
}
