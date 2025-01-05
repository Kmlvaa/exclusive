import Image from 'next/image';
import React from 'react'

export default function ProductCard(props: any) {
    return (

        <div key={props.id} className='group'>
            <div className='w-full h-60 bg-gray-100 rounded-md mb-3 relative z-10'>
                <Image src={props.imageUrl} alt='image' width={200} height={200} className='w-full h-full z-0' />
                <div className='bg-red-500 text-white rounded-sm w-14 px-2 py-1 absolute top-2 left-2 z-0'>-{props.sale}%</div>
                <Image src='/assets/addWishlist.png' alt='wishlist' width={30} height={30} className='absolute top-2 right-2 cursor-pointer z-20' />
                <Image src='/assets/eye.png' alt='view product' width={30} height={30} className='absolute top-11 right-2 cursor-pointer z-20' />
                <div className='w-full p-3 bg-black text-white absolute bottom-0 text-center cursor-pointer hidden group-hover:flex z-30'>Add To Cart</div>
            </div>
            <div className='flex flex-col items-start gap-3'>
                <h3 className='text-xl '>{props.title}</h3>
                <div className='flex gap-3'>
                    <span className='text-red-600'>${props.price}</span>
                    <span className='text-gray-500 line-through'>${props.oldPrice}</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <Image src='/assets/stars.png' alt='stars' height={30} width={100} />
                    <span>({props.rate})</span>
                </div>
            </div>
        </div>


    )
}
