import React from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import Link from 'next/link';
import FooterEnding from './FooterEnding';
import Logo from './Logo';



export default function Footer() {
    return (
        <div className='bg-green-700 pt-8 text-white'>
            <div>
                <Logo />
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:gap-[250px] md:gap-[100px] gap-[100px] p-4'>
                    <div>
                        <div className='flex space-x-3 pb-3'>
                            <div className='h-9 w-1 bg-white'></div>
                            <h2 className='text-[18px] font-medium pb-7'>Quick links</h2>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Bridal Native</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Men Native</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Ladies Joggers</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Ladies Gown</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Categories</h2>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='flex space-x-3 pb-3'>
                            <div className='h-9 w-1 bg-white'></div>
                            <h2 className='text-[18px] font-medium pb-7'>Quick links</h2>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Hoodies</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Sweater</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Men Joggers</h2>
                                    </Link>
                                </li>
                                <li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Men Complete</h2>
                                    </Link>
                                </li><li >
                                    <Link href="#" className='flex items-center space-x-1'>
                                        <MdOutlineDoubleArrow />
                                        <h2>Women Complete</h2>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex space-x-3 pb-3'>
                                <div className='h-9 w-1 bg-white'></div>
                                <h2 className='text-[18px] font-medium pb-7'>Quick links</h2>
                            </div>
                            <div>
                                <ul className='space-y-2'>
                                    <li >
                                        <Link href="#" className='flex items-center space-x-1'>
                                            <MdOutlineDoubleArrow />
                                            <h2>Jeans</h2>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href="#" className='flex items-center space-x-1'>
                                            <MdOutlineDoubleArrow />
                                            <h2>T-Shirt</h2>
                                        </Link>
                                    </li><li >
                                        <Link href="#" className='flex items-center space-x-1'>
                                            <MdOutlineDoubleArrow />
                                            <h2>Home</h2>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href="#" className='flex items-center space-x-1'>
                                            <MdOutlineDoubleArrow />
                                            <h2>About Us</h2>
                                        </Link>
                                    </li><li >
                                        <Link href="#" className='flex items-center space-x-1'>
                                            <MdOutlineDoubleArrow />
                                            <h2>Contact Us</h2>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEnding />
        </div>
    );
}

