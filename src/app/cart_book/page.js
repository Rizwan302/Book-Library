import React from 'react'
import Link from 'next/link';


export default function cat_Book() {
  return (
    <div className=' w-full h-full'>
      <div className="w-[80%] items-center justify-center mx-auto my-8 text-start bg-orange-300">
        <div className="mb-4">
            <Link href="">
                <h4>GO Back</h4>
            </Link>            
        </div>

        <div className="flex">
            <div className='h-full w-[40%] mr-8 '>
                <img src="https://static-01.daraz.pk/p/5204664eab3fb4d665478951a8300aba.png_750x750.jpg_.webp" alt="" />
            </div>

            <div className="">
                <h2 className='text-[25px] font-normal'>Hello World</h2>

                <div className="flex items-center">
                    <p className='text-[18px] font-semibold mr-3'>Subject places: </p>
                    <p>No Subject</p>
                </div>

                <div className="flex items-center">
                    <p className='text-[18px] font-semibold mr-3'>Subject Time: </p>
                    <p>No Subject</p>
                </div>

                <div className="flex items-center justify-center">
                    <p className='text-[18px] font-semibold mr-3'>Subjects: </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum dolorem quibusdam! Libero, amet! Ratione, voluptates est. Totam optio, temporibus nihil doloribus itaque quod odit illo molestias quam doloremque fugiat.</p>
                </div>


            </div>
        </div>
      </div>
    </div>
  )
}
