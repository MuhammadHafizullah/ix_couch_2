import React from 'react'

import {text_cards} from './index.jsx'



const What_In_It = () => {
  return (
    <section className='py-20 whats_in'>
      <div className="container mx-auto px-4">

        <div className="flex gap-4 lg:mb-20 mb-10
        ">
          <div className="">
            <h2 className='text-6xl font-month mb-6 text-secondary leading-normal font-bold'>What's in It <br />
              for You</h2>
              <p className='font-exo md:text-2xl text-white'>Why might you be interested in the first place?</p>
          </div>
          <div className="text-center card px-5 py-10 rounded-xl ms-auto max-w-[400px]  hidden lg:inline-block">
            <h4 className='font-mont text-2xl font-bold text-secondary mb-5'>Community Building</h4>
            <p className='font-garet text-white text-xl'>Amplify your impact by becoming part of something bigger—a community driven by growth and transformation.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {
            text_cards.map((card, index)=>{
              return(
                <div className={card.classes} key={index}>
                  <h4 className='font-mont text-2xl font-bold text-secondary mb-5'>{card.heading}</h4>
                  <p className='font-garet text-white text-xl'>{card.desc}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default What_In_It