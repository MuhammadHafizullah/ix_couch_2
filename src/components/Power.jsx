import {texture_cards} from './index.jsx'
import Texture_bg from './Texture_bg.jsx';


const Power = () => {
  return (
    <section className='power'>
        <div className="container mx-auto px-4 pt-10 pb-10">
        <h2 className='font-exo md:text-5xl text-3xl px-4 text-gray-500 text-center font-bold mb-3'>Harness the Power of <br className='md:block hidden'/> <span className='text-sky-500'>next-gen  AI Coaching</span></h2>

        <p className='font-exo text-gray-400 text-center mb-3 md:text-xl'>Get Coached, Learn Coaching, Build Roadmaps, Get Feedback, Learn. </p>
        <p className='font-exo text-gray-400 text-center mb-10 md:text-xl'>Use IXCoach to accelerate learning and personal development in minutes per day.</p>

        <Texture_bg  content={texture_cards[0]}/>
        </div>
    </section>
  )
}

export default Power