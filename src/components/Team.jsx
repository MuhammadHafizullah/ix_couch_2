import React from 'react'

import {team_cards} from './index.jsx'
import Cta from './Cta.jsx'

const Team = () => {
  return (
    <section className='team py-20'>
        <div className="container mx-auto px-4">
            <h2 className='font-mont text-center mb-5 lg:text-7xl md:text-6xl text-4xl font-bold text-white'>Our Dream Team</h2>
            <p className='font-exo text-xl mb-10 text-white text-center'>Join us and starting building yours! </p>

            <div className="grid md:grid-cols-3 grid-col-1 gap-x-5">
            {
                team_cards.map((card, index)=>{
                        return(
                            <div className="card px-5 py-10 rounded-lg mb-10" key={index}>
                                <img src={card.image} alt="jonathan harbar" className='lg:w-32 md:w-20 w-28 mb-5 mx-auto' />
                                <h4 className='text-2xl text-center font-exo font-bold text-white'>{card.heading}</h4>
                                <p className='font-exo text-white text-center'>{card.company}</p>
                                <p className='font-exo text-white text-center mb-5'>{card.title}</p>
                                <a href={card.link}><img src="./assets/linkedin_icon.png" alt="linkedin profile" className='w-10 mx-auto'/></a>
                            </div>
                        )
                })
            }
            </div>

            <div className="flex justify-center">
            <Cta link="https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral" text="MORE ABOUT US"/>
            </div>
        </div>
    </section>
  )
}

export default Team