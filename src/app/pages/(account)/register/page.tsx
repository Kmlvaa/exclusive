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
                    <h2 className='text-4xl font-semibold'>Create an account</h2>
                    <p>Enter your details below</p>
                </div>
                <form className='flex flex-col gap-8'>
                    <input placeholder='Name' className='border-[1px] border-white border-b-gray-300' />
                    <input placeholder='Email' className='border-[1px] border-white border-b-gray-300' />
                    <input placeholder='Password' className='border-[1px] border-white border-b-gray-300' />
                    <div className='flex flex-col gap-3'>
                        <button className='w-full p-3 bg-red-600 rounded-md text-white border-[1px] border-white hover:border-red-600 hover:bg-white hover:text-red-600'>Create account</button>
                        <button className='w-full p-3 rounded-md border-[1px] border-gray-400 hover:border-red-600'>Sign up with Google</button>
                    </div>
                    <div className='w-full text-center'>
                        <p>Already have an account? <Link href='/pages/login' className='underline hover:text-red-500 m-auto'>Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}