import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='flex felx-row items-center mt-10 mb-20'>
            <div className='w-1/2 h-[600px]'>
                <Image src='/assets/login.png' alt='login image' width={500} height={500} className='w-full h-full' />
            </div>
            <div className='w-1/2 p-20'>
                <div className='flex flex-col gap-3 mb-10'>
                    <h2 className='text-4xl font-semibold'>Log in to Exclusive</h2>
                    <p>Enter your details below</p>
                </div>
                <form className='flex flex-col gap-8'>
                    <input placeholder='Email' className='border-[1px] border-white border-b-gray-300' />
                    <input placeholder='Password' className='border-[1px] border-white border-b-gray-300' />
                    <div className='flex flex-row items-center justify-between'>
                        <button className='w-1/2 p-3 bg-red-600 rounded-md text-white border-[1px] border-white hover:border-red-600 hover:bg-white hover:text-red-600'>Login</button>
                        <p className='text-red-500 cursor-pointer'>Forget password?</p>
                    </div>
                    <div className='w-full text-center'>
                        <p>Don't have an account? <Link href='/pages/register' className='underline hover:text-red-500 m-auto'>Register now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

