import React from 'react'
import Icon_card from './Icon_card'
import {card_content} from './index.jsx'
import Cta from './Cta'

const Why_Join = () => {
  return (
    <section className='w-full try py-20'>
        <div className="container px-4 mx-auto"> 
            <h2 className='text-white font-garet text-6xl font-bold mb-10'>Why Join The IXCoach Community?</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 mb-10">
                <Icon_card content={card_content[1]}/>
            </div>

            <div className="flex justify-center">
            <Cta link="https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral" text="MEET IO"/>
            </div>
        </div>
    </section>
  )
}

export default Why_Join