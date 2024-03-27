import Image from 'next/image'
import React from 'react'
import style from '../style/style.module.css'


export const categories = [
    {
        "name": "LADIES GOWN",
        "image": "/simple3.png",
        "text" : "Check more of our ladies gown the best"
    },
    {
        "name": "MEN SHIRTS",
        "image": "/shirt1.png",
        "text" : "Check more of our men shirts the best"
    },
    {
        "name": "BRIDA DRESS",
        "image": "/Bignative1.png",
        "text" : "Check more of our brida dress the best"
    },
    {
        "name": "MEN JOGGERS",
        "image": "/men_jogger2.png",
        "text" : "Check more of our men joggers the best"
    },
    {
        "name": "LADIES JOGGERS",
        "image": "/pink_jogger.png",
        "text" : "Check more of our ladies joggers the best"
    },
    {
        "name": "NATIVE FOR MEN",
        "image": "/men_wear2.png",
        "text" : "Check more of our native for men gown the best"
    },
    {
        "name": "HOODIES",
        "image": "/Hoodie3.png",
        "text" : "Check more of our hoodies the best"
    },
]

export default function page() {
    const category = categories.map(cate => (
        <section key={cate.name}>
            <div className={`flex justify-center items-center ${style.cate_background}`}>
            <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={cate.image}
          alt="Hover Image"
          width={300}
          height={300}
          className={style.hoverImage}/>
        <div className={`mx-[15px] ${style.textOverlay}`}>
          <p className='text-[10px] ml-[10px]'>{cate.text}</p>
        </div>
    </div>
    </div>
            </div>
            {/* <h2>{cate.name}</h2> */}
        </section>
    ))
    return (
        <div className={`py-10`}>
            <div className='flex justify-center items-center text-center py-[20px] px-10'>
                <div>
                    <h2 className='text-[30px] font-semibold text-black'>Our Categories</h2>
                    <p className='font-normal  text-black'>Here is now our Category page and happy shopping</p>
                </div>
            </div>
            <div className={` item grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5`}>
                {category}
            </div>
        </div>
    )
}






