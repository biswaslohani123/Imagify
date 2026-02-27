import React from 'react'
import { assets } from '../assets/assets'

const ButtonSection = () => {
  return (
    <div className='mt-32 items-center flex justify-center flex-col'>
    
        <h1 className='text-3xl sm:text-4xl font-semibold'>See the magic. Try now</h1>

         <button  className="sm:text-lg text-white bg-black px-7 py-3 flex justify-center items-center gap-2 rounded-4xl mt-8 cursor-pointer">
                Generate Images <img className="w-5 h-5" src={assets.star_group} alt="" />
            </button>
      
    </div>
  )
}

export default ButtonSection
