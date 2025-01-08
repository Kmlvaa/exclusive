'use client'
import Sidebar from "./_components/sideBar/Sidebar";
import Slider from './_components/slider/Slider'
import ContentHeader from "./_components/contentHeader/ContentHeader";
import ProductCard from "./_components/productCard/ProductCard";
import CategoryCard from './_components/category/categoryCard'
import { useState } from "react";
import Pagination from "./_components/pagination/Pagination";
import ArrivalComp from "./_components/ArrivalComponent/ArrivalComp";

export default function Home() {

  const [childData, setChildData] = useState([{}]);

  const getDataFromComponent = (data: any) => {
    setChildData(data)
  }

  return (
    <div>
      <div className="hero flex flex-row items-center justify-between">
        <Sidebar />
        <Slider />
      </div>
      <div className="my-20 py-10 border-gray-300 border-b-[1px]">
        <div className="flex flex-row items-end justify-between">
          <ContentHeader head="Today's" title='Flash Sales' />
          <Pagination data={saleProducts} sendDataToParent={getDataFromComponent} />
        </div>
        <div>
          <div className='flex flex-row items-center justify-start my-10 gap-8'>
            {childData?.map((product: any) => {
              return (
                <ProductCard id={product.id} title={product.title} price={product.price} oldPrice={product.oldPrice} imageUrl={product.imageUrl} sale={product.sale} rate={product.rate} />
              );
            })}
          </div>
          <div className='m-auto w-40'>
            <button className='p-3 bg-red-500 rounded-sm text-white'>View all products</button>
          </div>
        </div>
      </div>
      <div className="my-20 py-10 border-gray-300 border-b-[1px]">
        <div className="flex flex-row items-end justify-between">
          <ContentHeader head='Categories' title='Browse by Categories' />
        </div>
        <div>
          <div className='flex flex-row items-center justify-between my-10'>
            {categories?.map((category) => {
              return (
                <CategoryCard id={category.id} title={category.title} url={category.url} />
              );
            })}
          </div>
          <div className='m-auto w-40'>
            <button className='p-3 bg-red-500 rounded-sm text-white'>View all products</button>
          </div>
        </div>
      </div>
      <div className="my-20 py-10 border-gray-300 border-b-[1px]">
        <div className="flex flex-row items-end justify-between w-full">
          <ContentHeader head="This month" title='Best selling products' />
          <button className='py-3 px-10 bg-red-500 rounded-sm text-white'>View all</button>
        </div>
        <div>
          <div className='flex flex-row items-center justify-between my-10'>
            {childData?.map((product: any) => {
              return (
                <ProductCard id={product.id} title={product.title} price={product.price} oldPrice={product.oldPrice} imageUrl={product.imageUrl} sale={product.sale} rate={product.rate} />
              );
            })}
          </div>
        </div>
      </div>
      <ArrivalComp />
    </div>
  );
}

const saleProducts = [
  {
    id: 1,
    title: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    imageUrl: '/assets/console.svg',
    sale: 40,
    rate: 88
  },
  {
    id: 2,
    title: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    imageUrl: '/assets/klavye.png',
    sale: 35,
    rate: 75
  },
  {
    id: 3,
    title: 'S-Series Comfort Chair ',
    price: 375,
    oldPrice: 400,
    imageUrl: '/assets/chair.png',
    sale: 25,
    rate: 99
  },
  {
    id: 4,
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    imageUrl: '/assets/klavyeRed.png',
    sale: 30,
    rate: 99
  },
  {
    id: 5,
    title: 'S-Series Comfort Chair ',
    price: 375,
    oldPrice: 400,
    imageUrl: '/assets/chair.png',
    sale: 25,
    rate: 99
  },
  {
    id: 6,
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    imageUrl: '/assets/klavyeRed.png',
    sale: 30,
    rate: 99
  },
]

const categories = [
  {
    id: 1,
    title: 'Phones',
    url: '/assets/phone.png'
  },
  {
    id: 2,
    title: 'Computers',
    url: '/assets/comp.png'
  },
  {
    id: 3,
    title: 'SmartWatchs',
    url: '/assets/watch.png'
  },
  {
    id: 4,
    title: 'Camera',
    url: '/assets/camera.png'
  },
  {
    id: 5,
    title: 'HeadPhones',
    url: '/assets/headPhone.png'
  },
  {
    id: 6,
    title: 'Gaming',
    url: '/assets/gaming.png'
  },
]