import React from 'react'
import CardSlider from './CardSlider'
import Cta from './Cta'

const Method = () => {
  return (
    <section className='methods py-20'>
        <div className="containr mx-auto px-4">
            <h2 className='text-6xl font-mont mb-6 text-sky-200 font-bold text-center'>Coaching Methods</h2>
            <p className='text-white font-garet text-xl text-center mb-5 lg:px-96'>Explore some of the many coaching methods we offer and find one that matches your style and personality best.</p>
        </div>
        <CardSlider />
        <div className="flex justify-center">
        <Cta link="http://ixcoaching.come/reasoning" text="SEE ALL OF THE METHODS"/>
        </div>
    </section>
  )
}

export default Method