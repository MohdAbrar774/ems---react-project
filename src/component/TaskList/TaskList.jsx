import React from 'react'

const TaskList = () => {
  return (
    <div  className='tasklist h-[55%] w-full mt-10 py-5 overflow-x-auto flex items-center justify-start gap-2 flex-nowrap'>
      <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
      </div>
       <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
      </div>
       <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
      </div>
       <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-orange-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
      </div>
       <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-red-900 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
      </div>
    </div>
  )
}

export default TaskList
