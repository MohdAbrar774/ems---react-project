import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <div className='border-2 rounded-xl border-white p-20'>
        <form className='flex flex-col items-center justify-center'>
            <input required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'  type="email" placeholder='Enter your email' />
            <input className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl mt-3  py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
            <button className='text-white font-semibold mt-5 py-3 px-5 text-lg w-full border-none rounded-full bg-emerald-600'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
