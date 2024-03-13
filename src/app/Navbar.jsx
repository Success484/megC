"use client"
import React from 'react';
import Hamburber from './Hamburger';
import Link from 'next/link';
import { FaHome, FaProductHunt, FaList, FaInfoCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import style from './style/style.module.css';

export const navigation = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/product', label: 'Product', icon: FaProductHunt },
  { href: '/categories', label: 'Categories', icon: FaList },
  { href: '/about', label: 'About', icon: FaInfoCircle },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className='bg-gray-100 py-4 px-2 relative'>
      <div className='flex justify-between px-4 items-center text-center'>
        <h2 className={`font- text-[30px] ${style.head}`}>
          Meg <span className='text-green-500'>Appeal</span>
        </h2>

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

        <div className='block md:hidden sm:hidden'>
          <Hamburber />
        </div>
      </div>
    </div>
  );
}
