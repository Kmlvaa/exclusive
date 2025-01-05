import Image from 'next/image'
import React from 'react'

export default function Slider() {
    return (
        <div className='w-3/4 p-10'>
            <div className='w-full h-auto bg-black text-white px-12 pt-12 pb-3'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src='assets/apple.svg' alt='apple' width={30} height={30} />
                            <p>Iphone 14 Series</p>
                        </div>
                        <h2 className='text-5xl font-semibold'>Up to 10% off Voucher</h2>
                        <p className='border-b-2 p-[1px] w-20 mt-10'>Shop now</p>
                    </div>
                    <div>
                        <Image src='assets/hero.svg' alt='hero image' width={400} height={350} />
                    </div>
                </div>
                <div className='m-auto flex items-center justify-center gap-2 w-20'>
                    <div className='rounded-full bg-gray-400 w-2 h-2'></div>
                    <div className='rounded-full bg-gray-400 w-2 h-2'></div>
                    <div className='rounded-full bg-red-400 w-2 h-2'></div>
                    <div className='rounded-full bg-gray-400 w-2 h-2'></div>
                    <div className='rounded-full bg-gray-400 w-2 h-2'></div>
                </div>
            </div>
        </div>
    )
}
