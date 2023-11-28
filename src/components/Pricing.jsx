import React, {useEffect, useState} from 'react'
import { plans } from './index';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

export const Pricing = () => {

    const [pricing, setPricing] = useState("monthly");
    const [mobile, setMobile] = useState(false);
    const [transform, setTransform] = useState("justify-start");
    useEffect(() => {
    (window.innerWidth <= 425) ? setMobile(true) : setMobile(false);
    }, [])


    const cardClick = (index) => { 
        (index === 1) ? setTransform("justify-start") : (index === 2) ? setTransform("justify-center") : setTransform("justify-end")
     }
    

  return (
    <section className="pricing py-20 relative overflow-hidden">
        <img src="./assets/pricingBgLines.svg" alt="" className='md:w-2/3 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'/>
        <div className="container mx-auto px-4">
        <h2 class="font-exo text-5xl text-white text-center font-bold mb-8">Simple, transparent <span class="text-sky-400">pricing</span></h2>
        <p className='text-gray-200 text-center font-exo text-xl mb-10'>No contracts. No surprise fees.</p>

        <div className="flex justify-center mb-10">
            <div className="flex bg-white rounded-full uppercase text-sm font-exo p-1">
                <button onClick={()=> setPricing("monthly")} className={`py-3 px-5 font-semibold ${pricing == 'monthly' ? 'text-white bg-sky-400' : 'text-gray-600'} rounded-full cursor-pointer`}>MONTHLY</button>
                <button onClick={()=> setPricing("yearly")} className={`py-3 px-6 font-semibold ${pricing == 'yearly' ? 'text-white bg-sky-400' : 'text-gray-600'} rounded-full cursor-pointer` }>YEARLY</button>
            </div>
        </div>
            <Splide hasTrack={ false } options={
                {
                gap:'2rem',
                width:"100%",
                padding:'10rem',
                breakpoints:{
                    425:{
                    gap:'4rem',
                    padding:'2.5rem',
                    perPage:1
                    },
                    768:{
                    padding:'1rem',
                    perPage: 2,
                    },
                }
                }
            }>
            <SplideTrack className='relative z-20 mb-10'>
                {
                    Object.keys(plans[pricing]).map((pkey)=>{
                        const plan = plans[pricing][pkey];
                        
                        return(
                            <SplideSlide className={`rounded-[30px] ${plan.classes} min-w-[300px] lg:py-20 py-10 lg:px-10 md:px-5 px-2 flex-1`} key={pkey}>
                                <h4 className={`${plan["heading"]["class"]} font-exo font-semibold text-xl capitalize mb-5 text-center`}>{pkey} Package</h4>
                                <h4 className='text-white md:text-2xl text-xl font-semibold mb-5 text-center font-exo'>{plan["heading"]["text"]}</h4>
                                <p className='text-gray-200 mb-5 text-center'>{plan.subhead}</p>

                                <p className='text-white mb-10 text-center font-semibold'>{plan.desc}</p>

                                {
                                    plan["packages"].map((pl)=>{
                                        return (
                                            <div className="flex gap-4 items-start mb-10">
                                                <img src="./assets/checkCircle.svg" alt="" className='w-6'/>
                                                <div>
                                                    <p className='text-white font-semibold'>{pl.name}</p>
                                                    <p className='text-gray-300 '>{pl.detail}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="flex">
                                    <a href="#contact" className={`mx-auto font-semibold text-gray-600 ${plan.cta} rounded-md py-2 lg:px-10 px-5`}>
                                        Learn More
                                    </a>
                                </div>
                            </SplideSlide>
                        )
                    })
                }
        
            </SplideTrack>
           <ul class="splide__pagination"></ul>
            
            </Splide>
        </div>
    </section>
  )
}
