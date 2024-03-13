import React from 'react'
import Display from './Display'

export default function NewArrival() {
    return (
        <div className='bg-gray-100'>
            <div className='flex justify-center items-center text-center py-[30px]'>
                <div>
                    <h2 className='text-[30px] font-semibold'>New Arrival</h2>
                    <p className='font-normal'>Here is now our newest arrival and happy shopping</p>
                </div>
            </div>
            <Display />
        </div>
    )
}
