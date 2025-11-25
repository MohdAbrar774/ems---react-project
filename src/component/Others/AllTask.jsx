import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const AllTask = () => {
  const  authData = useContext(AuthContext)
console.log(authData.employees)
  return (
    <div className='tasklist bg-[#1C1C1C] p-5 rounded mt-5  overflow-auto'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
        </div>
        <div>
          {authData.employees.map(function(elem){
            return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>{elem.firstname}</h2>
        <h3 className='w-1/5 text-blue-600'>Task</h3>
        <h5 className='w-1/5 text-yellow-400'>Status</h5>
        <h5 className='w-1/5 text-white'>Status</h5>
        <h5 className='w-1/5 text-red-600'>Failed</h5>
        </div>
          })}
        </div>
    </div>
  )
}

export default AllTask
