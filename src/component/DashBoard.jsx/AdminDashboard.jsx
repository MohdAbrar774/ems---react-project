import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
      <main className='min-h-screen w-full bg-slate-900 px-4 py-5 text-white sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6'>
        <Header changeUser={props.changeUser} role="Admin"/>
        <CreateTask/>
        <AllTask/>
        </div>
    </main>
  )
}

export default AdminDashboard
