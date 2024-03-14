import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaRegCopyright } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const iconsData = [
  { icon: <FaFacebookF size={30} />, key: 'facebook', url: 'https://facebook.com' },
  { icon: <FaTwitter size={30} />, key: 'twitter', url: 'https://twitter.com' },
  { icon: <FaInstagram size={30} />, key: 'instagram', url: 'https://instagram.com' },
  { icon: <FaGooglePlusG size={30} />, key: 'google', url: 'https://google.com' },
  { icon: <IoMdMail size={30} />, key: 'mail', url: 'mailto:info@example.com' },
];

export default function FooterEnding() {
  return (
    <div className='pb-10'>
      <div className='flex justify-center items-center py-16'>
        {iconsData.map(({ icon, key, url }) => (
          <Link key={key} href={url} target='_blank' className='mx-3'>
            {icon}
          </Link>
        ))}
      </div>
      <div className='flex justify-center items-center text-center'>
        <div>
          <div>
            <h2 className='px-5'>
              Meg Apparel is the home of modern fashion. Contact us with any design
              and we provide. Feel free to explore!
            </h2>
          </div>
          <div className='flex justify-center items-center text-center py-6'>
            <FaRegCopyright />
            <h2>All rights reserved</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
