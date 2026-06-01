import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-slate-900 px-4 py-8 text-white'>
      <div className='w-full max-w-md rounded-lg border border-slate-800 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/40 sm:p-8'>
        <div className='mb-8'>
          <p className='text-sm font-medium uppercase tracking-wide text-emerald-300'>EMS Portal</p>
          <h1 className='mt-2 text-3xl font-semibold'>Sign in</h1>
          <p className='mt-2 text-sm text-slate-400'>Admin: admin@example.com / 123</p>
        </div>
        <form onSubmit={ (e)=>{
          submitHandler(e)
        }} className='flex flex-col gap-4'>
            <input value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }} required className='rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400'  type="email" placeholder='Enter your email' />
            <input value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }
            } required className='rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400' type="password" placeholder='Enter password' />
            <button className='mt-2 rounded-md bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
