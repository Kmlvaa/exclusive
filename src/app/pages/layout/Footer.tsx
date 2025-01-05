import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center bg-black text-white px-28 py-8 gap-16 w-full'>
        <div className='flex flex-row items-start w-full gap-10 leading-10'>
            <div className='flex flex-col w-1/5'>
                <p className='font-bold text-xl mb-5'>Exclusive</p>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <input placeholder='Enter your email' className='bg-black border-[1px] pl-2 mt-2 border-white rounded-md'/>
            </div>
            <div className='w-1/5'>
                <p className='font-bold mb-5 text-lg'>Support</p>
                <ul>
                    <li className='leading-normal'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                    <li>exclusive@gmail.com</li>
                    <li>+88015-88888-9999</li>
                </ul>
            </div>
            <div className='w-1/5'>
                <p className='font-bold mb-5 text-lg'>Account</p>
                <ul>
                    <li className='cursor-pointer hover:underline'>My account</li>
                    <li className='cursor-pointer hover:underline'>Login / Register</li>
                    <li className='cursor-pointer hover:underline'>Cart</li>
                    <li className='cursor-pointer hover:underline'>Wishlist</li>
                    <li className='cursor-pointer hover:underline'>Shop</li>
                </ul>
            </div>
            <div className='w-1/5'>
                <p className='font-bold mb-5 text-lg'>Quick link</p>
                <ul>
                    <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                    <li className='cursor-pointer hover:underline'>Terms of use</li>
                    <li className='cursor-pointer hover:underline'>FAQ</li>
                    <li className='cursor-pointer hover:underline'>Contact</li>
                </ul>
            </div>
            <div className='w-1/5'>
                <p className='font-bold mb-5 text-lg'>Download App</p>
            </div>
        </div>
        <div>
            <p className='text-sm text-gray-700'>Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
  )
}
