import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='mt-10 flex  justify-between gap-5 screen'>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-green-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-orange-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}
 
export default TaskListNumber
