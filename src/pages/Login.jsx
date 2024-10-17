import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[98vh]  flex items-center justify-center'>

    <div className='p-4 w-2/6 rounded bg-gray-800'>
    <div className='text-2xl font-semibold'>LogIn</div>
    <input type="username" placeholder='usename' className='bg-gray-700 px-3 py-3 my-3 w-full rounded'
    name="username">

    </input>
       
<input type="password" placeholder='password' className='bg-gray-700 px-3 py-3 my-3 w-full rounded'
    name="password"></input>

<div className='w-full flex items-center justify-between'>
<button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded'>Login</button>
<Link to='/signup' className='text-gray-500 hover:text-gray-400'>Not having an account? Sign up</Link>
</div>


    </div>
  </div>
  )
}

export default Login
