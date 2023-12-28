import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import imglogo from '../../../public/logo.jpg'


export default function Navbar() {
    return (
        <div className=' bg-slate-300 text-black flex justify-center w-full items-center '>
            <div className="flex w-11/12 justify-between items-center ">


                <div className="">
                    <Image
                        src={imglogo}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                        className='cursor-pointer rounded-full'
                    />
                </div>
                <ul className='flex'>
                    <Link href="/">
                        <li className=' text-[20px] font-[fantasy] text-black mr-3 hover:text-blue-600 cursor-pointer'>Home</li>
                    </Link>
                    <li className=' text-[20px] font-[fantasy] text-black  hover:text-blue-600 cursor-pointer'>About</li>
                </ul>
                <div>
                    <Link href="/login" className='text-[18px] p-2  text-black mr-2 cursor-pointer border-4 border-sky-500 rounded-lg'>Log in</Link>
                    <Link href="/signIn" className='text-[18px] p-2  text-black mr-0 cursor-pointer border-4 border-sky-500 rounded-lg'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}
