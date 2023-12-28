import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (
    <div className=' bg-gray-300 w-[16rem] h-auto py-2 shadow-2xl rounded m-2 border border-blue-500 cursor-pointer'>
      <div className="text-center p-2">
        <div className="text-center items-center justify-center w-full flex my-2">
          <img src="https://static-01.daraz.pk/p/5204664eab3fb4d665478951a8300aba.png_750x750.jpg_.webp" className=' w-[120px] h-[170px]' alt="books name" />

        </div>

        <div className=" mt-4 w-[80%] mx-auto">
          <h2 className=' font-bold text-[17px] my-2'>Hello Wold</h2>

          <div className='flex '>
            <p className='text-[15px] font-bold'>Author: </p>
            <p className=' ml-2'>Rizwan Ahmed</p>
          </div>

          <div className='flex '>
            <p className='text-[15px] font-bold'>Total Editions: </p>
            <span className='ml-2'>10</span>
          </div>

          <div className="flex">
            <p>First publish year: </p>
            <span className='ml-2'>2000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
