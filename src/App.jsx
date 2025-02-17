import React, { useState } from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './component/Login'

const backend_url = import.meta.env.VITE_BACKEND_URL

function App() {

  const [token, seToken] = useState('')
  return (
    <main>
      {token === "" ?(
        <Login/>
      ) :(

      
      <div className='bg-primary text-[#404040]'>
        <Header>
        <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-8 sm:mt-4'>
          <Routes>
            <Route path='/' element={<Add/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/orders' element={<Orders/>}/>
          </Routes>
        </div>
        </Header>
        <Sidebar/>
      </div>
      )}
    </main>
  )
}

export default App;