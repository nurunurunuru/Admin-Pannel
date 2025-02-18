import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './component/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backend_url = import.meta.env.VITE_BACKEND_URL
// const backend_url = import.meta.env.VITE_BACKEND_URL;

console.log('Backend URL:', backend_url);


function App() {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'): "")
  // localStorage.getItem('token')?localStorage.getItem('token'): ""

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <main>
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className='bg-primary text-[#404040] min-h-screen flex'>
          {/* Sidebar */}
          <Sidebar token={token} setToken={setToken}/>

          {/* Content */}
          <div className='flex-1'>
            <Header />

            <div className='mx-auto max-w-[1440px] p-4'>
              <Routes>
                <Route path='/' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
