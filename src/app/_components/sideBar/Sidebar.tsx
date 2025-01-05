import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-1/4 border-r-2 border-gray py-5 leading-9'>
      <ul>
        {data?.map((x) => {
          return (
            <li key={x.id} className='hover:underline cursor-pointer'>{x.title}</li>
          );
        })}
      </ul>
    </div>
  )
}

const data = [
  {
    id: 1,
    title: 'Women`s fasion',
  },
  {
    id: 2,
    title: 'Men`s fasion',
  },
  {
    id: 3,
    title: 'Electronics',
  },
  {
    id: 4,
    title: 'Home & LifeStyle',
  },
  {
    id: 5,
    title: 'Medicine',
  },
  {
    id: 6,
    title: 'Sports & Outdoor',
  },
  {
    id: 7,
    title: 'Baby`s & Toys',
  },
  {
    id: 8,
    title: 'Groceries & Pets',
  },
  {
    id: 9,
    title: 'Health & Beauty',
  },
]