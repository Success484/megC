import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { navigation } from './Navbar';
import Link from 'next/link';

export default function Hamburber() {
const [Change, setChange] = useState(false)
const handleClick = ()=> {
    setChange(!Change)
}

const handLinkClose = () => {
  setChange(false)
}
  return (
    <div>
    <div onClick={handleClick} className='cursor-pointer '>
        {Change ? <GrClose color='black' size={35} /> : <RxHamburgerMenu color='black' size={35}/> }
    </div>
    <div className={Change ? 'mt-3 z-10 fixed left-0 w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in sm:hidden duration-500 rounded-sm' : 'z-10 fixed w-[65%] h-screen bg-[#ecf0f3] p-10 rounded-sm ease-in duration-500 left-[-100%]'}>
    {navigation.map((link, index) => (
            <section key={index}>
              <div className=' '>
              <Link href={link.href} className='flex mt-5 hover:text-green-500 hover:font-medium duration-200 font-semibold text-[16px] items-center space-x-1' onClick={handLinkClose}>
              <div className='text-left'>{link.icon && React.createElement(link.icon)}</div><div>{link.label}</div>
              </Link>
              </div>
            </section>
          ))}
    </div>
    </div>
  )
}

