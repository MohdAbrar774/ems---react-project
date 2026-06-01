import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
      <div className='rounded-lg border border-cyan-900/60 bg-cyan-950 p-5'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='mt-1 text-sm font-medium text-cyan-100'>New Tasks</h3>
      </div>
      <div className='rounded-lg border border-emerald-900/60 bg-emerald-950 p-5'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='mt-1 text-sm font-medium text-emerald-100'>Completed</h3>
      </div>
      <div className='rounded-lg border border-amber-900/60 bg-amber-950 p-5'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='mt-1 text-sm font-medium text-amber-100'>Active</h3>
      </div>
      <div className='rounded-lg border border-rose-900/60 bg-rose-950 p-5'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='mt-1 text-sm font-medium text-rose-100'>Failed</h3>
      </div>
    </div>
  )
}
 
export default TaskListNumber
