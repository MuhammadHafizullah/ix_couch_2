import React from 'react'
import Cta from './Cta.jsx'

const Hero = () => {
  return (
    <section id='hero' className='team w-full h-full relative overflow-hidden'>
     <div className="container mx-auto md:py-40 py-16 text-center px-4">
            <p className='text-teal-400 md:mb-10 mb-5 lg:text-5xl md:text-3xl text-xl font-semibold'>AI MASTERCLASS</p>

            <h1 className='text-white md:text-7xl text-4xl font-mont font-bold mt-5 mb-6 leading-snug'>Your Wisdom, Amplified</h1>

            <Cta link="https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral" text="Get Started"/>

            <p className='text-gray-300 md:text-2xl text-xl xl:px-96 lg:px-72 md:px-40 font-garet capitalize'>Craft Your signature ai coach, fully attuned to your unique coaching style</p>
     </div>
    </section>
  )
}

export default Hero