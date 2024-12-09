import Link from 'next/link'
import React from 'react'
import heart from '../../../assets/heart.png'
import basket from '../../../assets/shopping-basket.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='border-b-2 border-gray'>
        <div className='Sale w-full h-14 bg-black text-white flex flex-row justify-around items-center'>
            <div></div>
            <div>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href='/' className='underline font-bold'>ShopNow</Link></p>
            </div>
            <div>English</div>
        </div>
        <div className='Header px-28 pt-8 pb-4 flex flex-row items-center justify-between'>
            <div className='Logo text-2xl font-bold'>Exclusive</div>
            <div className='w-1/4'>
                <ul className='flex flex-row items-center justify-between'>
                    <li className='hover:underline cursor-pointer'>Home</li>
                    <li className='hover:underline cursor-pointer'>Contact</li>
                    <li className='hover:underline cursor-pointer'>About</li>
                    <li className='hover:underline cursor-pointer'>Sign Up</li>
                </ul>
            </div>
            <div className='flex flex-row items-center justify-around w-1/4'>
                <input placeholder='What are you looking for?' className='p-2 bg-gray-100 rounded-md'/>
                <div className='WishList cursor-pointer'><Image src={heart} alt='wishlist' width={20} height={20}/></div>
                <div className='Basket cursor-pointer'><Image src={basket} alt='basket' width={20} height={20}/></div>
            </div>
        </div>
    </div>
  )
}
