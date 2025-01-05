import Image from 'next/image'
import React from 'react'

export default function categoryCard(props: any) {
  return (
    <div className='border-[1px] border-gray-400 rounded-md p-5 flex flex-col items-center gap-2 w-40 h-32 hover:bg-red-500 cursor-pointer hover:text-white'>
        <Image src={props.url} alt='category' width={50} height={50}/>
        <p>{props.title}</p>
    </div>
  )
}
