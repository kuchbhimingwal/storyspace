import React from 'react'
import logo from '../../public/SsLogo.png'
import Image from 'next/image'
function Header() {
  return (
    <div className='flex justify-between'>
      <div>
       <Image src={`/SsLogo.png`} alt='logo' width="35" height="50" className='p-1'/>
      </div>
      <div className='flex'>
        <a href="#" className='font-sans font-light p-3'>Write</a>
        <a href="#" className='font-sans font-light p-3'>Read</a>
        <a href="#" className='font-sans font-light p-3'>About us</a>
      </div>
    </div>
  )
}

export default Header