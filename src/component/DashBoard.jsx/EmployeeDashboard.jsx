import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
      <main className='min-h-screen w-full bg-slate-900 px-4 py-5 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data} onStatusChange={props.onStatusChange} onAddFollowUp={props.onAddFollowUp}/>
  </div>
  </main>
  )
}

export default EmployeeDashboard
