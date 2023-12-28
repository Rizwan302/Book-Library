import React from 'react'


export default function Banner() {
  return (
    <div className='relative  h-[90vh] w-full overflow-hidden'>
        <img src="https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_1280.jpg" className='absolute top-0 left-0 min-w-full min-h-full object-cover' alt="" />
      
      
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
        <div className='flex'>
            <input type='search' className=' w-[50vw] h-10 p-1 rounded-sm' placeholder='Search Book'/>
            <button className=' bg-green-600 w-[110px] rounded-sm'>Search</button>
        </div>
      </div>
    </div>
  )
}
