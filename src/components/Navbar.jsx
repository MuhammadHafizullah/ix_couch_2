import React from 'react'

export const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full'>
        <nav>
            <div className="container mx-auto px-4 flex items-center">
            <div className='flex items-center gap-3'>
                <a href="#team" className='text-gray-300 font-exo'>About</a>
                <a href="#contact" className='text-gray-300 font-exo'>Contact</a>
            </div>
            <h3 className="uppercase xl:ps-96 lg:ps-64 md:ps-36 md:text-3xl text-xl ps-12 text-white py-4 font-exo flex-grow"><a href="#hero">AI MASTERCLASS</a></h3>
            </div>
        </nav>
    </header>
  )
}
