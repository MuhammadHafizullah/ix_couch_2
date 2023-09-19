import React from 'react'
import Cta from './Cta.jsx'

const Hero = () => {
  return (
    <section className='hero w-full h-full relative overflow-hidden'>
    <div className="lg:w-96 md:w-72 h-52 rounded-full absolute blur-3xl -top-40 left-1/2 -translate-x-1/2 bg-gradient-to-r to-sky-400 from-purple-800"></div>
     <div className="container mx-auto nd:py-28 py-16 text-center px-4">
            <p className='text-white text-5xl font-semibold'>IX <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Couch</span></p>

            <h1 className='text-white md:text-7xl text-4xl font-mont font-bold lg:px-48 mt-5 mb-6 leading-snug'>Experience the Future of Personal Development with IX<span className='font-normal'>Coach</span></h1>

            <Cta link="https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral" text="Explore"/>

            <p className='text-white text-xl xl:px-96 lg:px-72 md:px-40 font-garet'>No cards, subscription or any other payment method needed</p>
     </div>
    </section>
  )
}

export default Hero