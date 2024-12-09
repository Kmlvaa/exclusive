import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col items-center bg-black text-white px-28 py-8 gap-16'>
        <div className='flex flex-row items-start w-auto gap-10 leading-10'>
            <div className='flex flex-col w-1/5'>
                <p className='font-bold text-xl mb-5'>Exclusive</p>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <input placeholder='Enter your email' className='bg-black border-white'/>
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
                    <li>My account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className='w-1/5'>
                <p className='font-bold mb-5 text-lg'>Quick link</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
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
