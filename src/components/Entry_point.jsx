import {texture_cards} from './index.jsx'
import Texture_bg from './Texture_bg.jsx';


const Entry_point = () => {
  return (
    <section className='power'>
        <div className="container mx-auto px-4 pt-10 pb-10">
        <h2 className='font-exo md:text-5xl text-3xl px-4 text-gray-500 text-center font-bold mb-3'>Choose your <br className='md:block hidden'/> <span className='text-sky-500'>Entry Point</span></h2>

        <p className='font-exo text-gray-400 text-center mb-3 md:text-xl'>Instant Start, Customized Path, or Creating your own Roadmap toward the actualization of any goal... you decide where to begin.</p>
        <p className='font-exo text-gray-400 text-center mb-10 md:text-xl'>Use IXCoach to accelerate learning and personal development in minutes per day.</p>

        <Texture_bg  content={texture_cards[4]}/>
        </div>
    </section>
  )
}

export default Entry_point