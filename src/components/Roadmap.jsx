import {texture_cards} from './index.jsx'
import Texture_bg from './Texture_bg.jsx';


const Choose_Method = () => {
  return (
    <section className='power'>
        <div className="container mx-auto px-4 lg:pt-40 md:pt-28 pt-10 pb-10">
            <Texture_bg  content={texture_cards[6]}/>
        </div>
    </section>
  )
}

export default Choose_Method