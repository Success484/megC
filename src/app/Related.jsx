import React from 'react';
import { file } from './File';
import Image from 'next/image';
import Link from 'next/link';
import style from './style/style.module.css'
import StarsRate from './Star';
import TitleRelated from './TitleRelated';

export default function Related() {
    // Function to shuffle array in place
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledFile = shuffleArray([...file]);

    const randomProducts = shuffledFile.slice(0, 4);

    return (
        <div>
            <div className='md:px-28 px-4 relative top-8'>
            <TitleRelated />
            </div>
            <div className='flex items-center pb-20 py-[50px] md:px-28 px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-2 gap-5'>
                {randomProducts.map((product, index) => (
                    <section key={index}>
                        <div className={`hover:bg-pink-200 ease-in-out duration-500 rounded-md bg-gray-200 relative`}>
                            <div className={`flex justify-center items-center`}>
                                <Link href={`${product.name.split(' ').join('').toLocaleLowerCase()}`}>
                                    <Image src={product.image} height={1200} width={1200} quality={100} className={style.relatedphoto} alt='' />
                                </Link>
                            </div>

                            <div className='text-[14px]'>
                                <div className='absolute top-0 left-0 bg-green-700 px-2.5 mt-5 ml-4'><h2 className='text-white font-medium'>New</h2></div>
                                {product.discount && (
                                    <div className='absolute top-0 left-0 bg-orange-600 px-2.5 mt-[50px] ml-4'><h2 className='text-white font-medium'>&#8722;{file.discount}</h2></div>
                                )}
                            </div>
                        </div>
                        <div className='mt-2.5 space-y-2.5 pt-2'>
                            <p className='text-[14px] font-medium text-gray-600'>{product.name}</p>
                            <StarsRate />
                            <div className='flex space-x-2 mb-3 pb-8'>
                                <p className='font-bold text-gray-700 text-[15px]'>&#8358;{product.price}</p>
                                {product.preAmount && (
                                    <p className='text-gray-500 text-[15px] line-through'>&#8358;{product.preAmount}</p>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
        </div>
    );
}
