import React from 'react'

const AcceptTask = ({data}) => {
  return (
   <div className='flex-shrink-0 h-full p-5 w-[300px] gap-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime recusandae earum expedita. Ex, placeat!</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 rounded text-sm'>Marks as Completed</button>
            <button className='bg-red-500 py-1 px-2 rounded text-sm'>Marks as Failed</button>
        </div>
      </div>

  )
}

export default AcceptTask
