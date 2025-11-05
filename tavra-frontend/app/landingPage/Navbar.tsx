import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-4'>
            <span className='font-light text-3xl'>TAVRA</span>
            <div> 
                <span className='font-light text-3xl'>Home</span>
                <span className='font-light text-3xl'>About</span>
                <span className='font-light text-3xl'>Documentation</span>
                <span className='font-light text-3xl'>Meet the Team</span>
                <span className='font-light text-3xl'>Contact</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar