import React from 'react'
import Icon_card from './Icon_card'
import {card_content} from './index.jsx'

const Try = () => {
  return (
    <section className='w-full try py-20'>
        <div className="container px-4 mx-auto"> 
            <h2 className='text-white font-garet text-6xl font-medium mb-10'>Why Try IX Coach?</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 mb-10">
                <Icon_card content={card_content[0]}/>
            </div>

            <div className="flex">
            <a href="https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral" className='px-10 py-4 mx-auto text-white bg-gradient-to-r rounded-full from-primary to-secondary'>Sign Up & Start Sharing</a>
            </div>
        </div>
    </section>
  )
}

export default Try