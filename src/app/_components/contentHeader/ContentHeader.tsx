import React from 'react'

export default function ContentHeader(props: any) {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-row items-center gap-2 text-red-600 font-semibold'>
            <div className='rounded-md bg-red-600 w-5 h-10'></div>
            <p>{props.head}</p>
        </div>
        <div>
            <h1 className='text-5xl font-semibold'>{props.title}</h1>
        </div>
    </div>
  )
}
