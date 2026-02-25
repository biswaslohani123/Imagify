import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
       <Link to='/'>
          <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
       </Link>

       <div >
            {user ? 
              <div></div>
              :
              <div className='flex items-center gap-2 sm:gap-5'>
                <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                <button className='bg-black text-white px-10 py-2.5 rounded-3xl cursor-pointer sm:py-2'>Login</button>
              </div>
            }
            
            
       </div>
    </div>
  )
}

export default NavBar
