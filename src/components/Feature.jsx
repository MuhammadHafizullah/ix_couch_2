import React from 'react'
import { feature_cards } from './index.jsx'

const Feature = () => {
    return (
        <section className='feature py-20'>
            <div className="container px-4 mx-auto grid md:grid-cols-2 grid-cols-1 items-center">
                <div className='mb-10'>
                    {
                        feature_cards.map((card, index) => {
                            
                            return(
                                <div className={card.classes} key={index}>
                                <div className={card.heading_class}>
                                    {index+1}
                                </div>
                                <div>
                                    <h4 className='font-mont text-xl text-secondary mb-3 font-bold'>{card.heading}</h4>
                                    <p className='text-white text-justify'>
                                    {card.desc}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                <div>
                    <img src="./assets/mobile.png" className="lg:w-96 md:w-76 w-full mx-auto md:me-0 md:ms-auto" alt="mobile phone mockup" />
                </div>
            </div>
        </section>
    )
}

export default Feature