"use client"
import Image from 'next/image'
import React from 'react'
import style from '../style/style.module.css'
import Link from 'next/link'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Category() {
  const [cate, setData] = useState(null)
  useEffect(() => {
    const FetchApi = async () => {
      const response = await axios.get('https://meggieapi.onrender.com/categories/')
      setData(response.data)
    }
    FetchApi()
  }, [])
  const categoryList = cate ? (cate.map(category => (
    <section key={category.name}>
      <Link href={`cate/${category.name.split(' ').join('').toLocaleLowerCase()}`}>
        <div className={`flex justify-center items-center ${style.cate_background}`}>
          <div className={style.container}>
            <div className={style.imageContainer}>
              <Image
                src={category.image}
                alt="Hover Image"
                width={300}
                height={300}
                className={style.hoverImage}
                loading='lazy'
              />
              <div className={`mx-[15px] ${style.textOverlay}`}>
                <p className='text-[10px] ml-[10px]'>{category.text}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  ))) : (<p>loading</p>);

  return (
    <div className={`py-10`}>
      <div className='flex justify-center items-center text-center py-[20px] px-10'>
        <div>
          <h2 className='text-[30px] font-semibold text-black'>Our Categories</h2>
          <p className='font-normal text-black'>Here is now our Category page and happy shopping</p>
        </div>
      </div>
      <div className={`item grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5`}>
        {categoryList}
      </div>
    </div>
  );
}