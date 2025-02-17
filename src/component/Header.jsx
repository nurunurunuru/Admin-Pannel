import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='flexCenter py-8 bg-white'>
      {/* Logo */}
      <Link to={'/'} className='bold-24 '>
      <h4 className='bg-white shadow-sm text-secondary flexCenter h-2 w-8 px-2 rounded-full'>Shoppire</h4>
      </Link> 
    </header>
  )
}

export default Header