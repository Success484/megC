"use client"
import React from 'react';
import Hamburber from './Hamburger';
import Link from 'next/link';
import { FaHome, FaProductHunt, FaList, FaInfoCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import style from './style/style.module.css';
import Image from 'next/image';

export const navigation = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/product', label: 'Product', icon: FaProductHunt },
  { href: '/categories', label: 'Categories', icon: FaList },
  { href: '/about', label: 'About', icon: FaInfoCircle },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className='bg-gray-100  relative h-[90px]'>
      <div className='flex justify-between pr-20 items-center text-center relative top-[-40px]'>
          <Link href="/" className=''>
            <Image src={'/MEGLOGO.png'} quality={100} height={1300} width={1300} className={`relative right-20 sm:right-10 ${style.logo}`} alt="Logo"/>
          </Link>

        <div className='hidden md:block sm:block'>
          <ul className='space-x-10 flex justify-center items-center'>
            {navigation.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`hover:text-green-500 hover:font-medium duration-200 font-semibold text-[13px] flex justify-center items-center space-x-1 pb-1 ${router.pathname === link.href ? style['active-link'] : ''
                    }`}
                >
                  <div>{link.icon && React.createElement(link.icon)}</div>
                  <div>{link.label}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='block md:hidden sm:hidden text-black relative left-10'>
          <Hamburber />
        </div>
      </div>
    </div>
  );
}
