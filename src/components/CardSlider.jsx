import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


const CardSlider = ()=> {
    return (
      <div className="md:px-10 px-4">
      <Splide hasTrack={ false } options={
        {
          type:'loop',
          gap:'2rem',
          autoplay:true,
          width:"100%",
          padding:'10rem',
          perPage:1,
          breakpoints:{
            425:{
              padding:'0rem',
            },
            768:{
              padding:'1rem'
            },
          }
        }
      }>
          <SplideTrack className="mb-5">
            <SplideSlide className="bg-gradient-to-r mx-auto rounded-xl flex md:flex-nowrap flex-wrap items-center justify-between from-sky-900 to-blue-600 px-5 py-2">
              <div>
              <h3 className="text-white mb-5 font-mont text-4xl font-bold">Interdisciplinary <br /> Coaching</h3>
              <p className="font-garet text-white text-xl">Explore anything thats coming up for you right now with an AI trained to pull from many disciplines to support you.</p>
              </div>
              <div>
                <img className="w-full max-w-[250px] mx-auto" src="./assets/3d_green_ring.png" alt="" />
              </div>
            </SplideSlide>

            <SplideSlide className="bg-gradient-to-r mx-auto rounded-xl flex md:flex-nowrap flex-wrap items-center justify-between from-sky-900 to-blue-600 px-5 py-2">
              <div>
              <p className="font-garet text-white text-xl">Coaching inspired by</p>
              <h3 className="text-white mb-5 font-mont text-4xl font-bold">Interdisciplinary <br /> Coaching</h3>
              <p className="font-garet text-white text-xl">Explore anything thats coming up for you right now with an AI trained to pull from many disciplines to support you.</p>
              </div>
              <div>
                <img className="w-full max-w-[250px] mx-auto" src="./assets/3d_green_ring.png" alt="" />
              </div>
            </SplideSlide>


          </SplideTrack>


          <div className="splide__arrows flex justify-end gap-5 pe-5">
            <button className="splide__arrow splide__arrow--prev text-white">
            <img src="./assets/left_arrow.svg" className="w-6" alt="" />
            </button>


            <button className="splide__arrow splide__arrow--next text-white"><img src="./assets/right_arrow.svg" className="w-6" alt="" /></button>
          </div>
        </Splide>
      </div>
    );
  }


  export default CardSlider