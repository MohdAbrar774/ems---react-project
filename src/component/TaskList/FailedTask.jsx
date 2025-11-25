import React from 'react'

const FailedTask = () => {
  return (
   <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-orange-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
      <div className='mt-4 flex justify-around'>
        <button className='w-full bg-red-500 px-2 rounded text-sm'>Failed</button>
      </div>
      </div>
  )
}

export default FailedTask