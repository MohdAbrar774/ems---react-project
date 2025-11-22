import React from 'react'

const Header = ({data}) => {
  return (
  <div className='flex item-center justify-between'>
   <h1 className='text-2xl font-medium'>Hii, <br /> <span className='text-3xl font-semibold'>{data.firstname} 👋</span></h1>
   <button className='bg-red-600 h-8 w-16 font-lg rounded-sm border-white '>Logout</button>
    </div>
  )
}

export default Header
