import React from 'react'
import AuthPopup from '../components/AuthPopup'
const Navbar = () => {
  return (
    <div className=' h-10 text-white font-sans tracking-wide w-full flex flex-row justify-between gap-5'>
    <h1 className='text-xl font-bold'>Tuberculosis Classification</h1>
     <ul className=' flex  gap-10 text-xl'>
        <li>About Us</li>
        <li>Contact us</li>

     </ul>
     <div className='w-1/2 flex  justify-end '>

     <AuthPopup/>
     </div>
    </div>
  )
}

export default Navbar