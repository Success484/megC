import Image from 'next/image'
import React from 'react'
import StarsRate from './Star'

export default function Logo() {
  return (
    <div className='mb-4 flex justify-center items-center'>
        <div className='bg-gray-100 h-[90px] flex justify-center items-center rounded-md'>
            <div className='relative left-8'>
            <StarsRate />
            </div>
            <Image src={'/MEGLOGO.png'} quality={100} height={300} width={300} alt='Logo' className='relative bottom-0'/>
            <div className='relative right-8'>
            <StarsRate />
            </div>
        </div>
    </div>
  )
}
