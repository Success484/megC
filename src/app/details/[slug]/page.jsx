import { file } from '@/app/File'
import Image from 'next/image'
import React from 'react'

export default function page({params}) {
  const detailproduct = file.find((detail) => detail.name.split(' ').join('').toLocaleLowerCase() == params.slug)
  return (
    <div>
      <Image src={detailproduct.image} height={300} width={300} />
    </div>
  )
}
