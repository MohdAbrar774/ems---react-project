import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='mt-10 flex  justify-between gap-5 screen'>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-orange-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}
 
export default TaskListNumber
