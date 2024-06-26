import Image from 'next/image'
import React from 'react'
import StarsRate from './Star'

export default function Logo() {
  return (
    <div className='mb-4 flex justify-center items-center px-2.5'>
      <div className='bg-gray-100 h-[90px] flex justify-center items-center rounded-md'>
        <div className='relative md:left-10 left-16'>
          <StarsRate />
        </div>
        <Image src={'/MEGLOGO.png'} loading='lazy' quality={100} height={300} width={300} alt='Logo' className='relative bottom-0' />
        <div className='relative md:right-10 right-16'>
          <StarsRate />
        </div>
      </div>
    </div>
  )
}
