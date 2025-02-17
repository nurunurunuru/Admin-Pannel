import React, { useState } from 'react'
import loginImg from '../assets/Login.png'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onsubmitHanlder = async (e)=>{
    
      e.preventDefault()
      console.log(email,password);
      
   
  }
  
  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      {/* Container*/}
      <div className='flex h-full w-full'>
        {/* Form Side */}
        <div className='flex w-full sm:w-1/2 items-center justify-center'>
          <form onSubmit={onsubmitHanlder} className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800">
            <div className='w-full mb-4'>
              <h3 className='bold-36'>Login</h3>
            </div>
            <div className='w-full'>
              <label htmlFor='email' className='medium-15'>Email</label>
              <input onChange={(e)=>setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder='Email'
              required
              className='w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1'/> 
            </div>
            <div className='w-full'>
              <label htmlFor='password' className='medium-15'>Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} 
              value={password}
              type="password"
              placeholder='Password'
              required
              className='w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1'/> 
            </div>
            <button type='submit' className='btn-dark w-full mt-5 !py-[9px]'>Login</button>
          </form>
        </div>
        {/* Image Slide */}
        <div className='w-1/2 hidden sm:block'>
          <img src={loginImg} alt="" className='object-cover h-full w-full' />
        </div>
      </div>
    </section>
  )
}

export default Login