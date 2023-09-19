import React from 'react'

const Testimonial = () => {
  return (
    <section className='w-full bg-blue-900 py-10'>
        <div className="container mx-auto px-4">
            <h2 className='lg:text-7xl md:text-5xl text-3xl mb-10 text-white'>Client Testimonials</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                <div className="w-full testimonial_1">
                    <div className="md:w-3/5 w-full h-full px-3 py-5 bg-blue-300 ms-auto me-0 flex flex-col justify-center">
                        <h4 className='text-2xl font-agrandir text-white'>Barbara L.</h4>
                        <p className='md:text-xl text-white'>“it worked great....easy to use... I used it to settle a disagreement and I was impressed that it managed to soothe and validate both of us."</p>
                    </div>
                </div>
                <div className="w-full testimonial_2">
                <div className="md:w-3/5 w-full h-full px-3 py-5 bg-blue-300 flex flex-col justify-center">
                        <h4 className='text-2xl font-agrandir text-white'>Misty F.</h4>
                        <p className='md:text-xl text-white'>"I’ve been using it, and have to say… as I life coach… it’s brilliant… "</p>
                    </div>
                </div>
            </div>
            <div className="w-full testimonial_3">
                <div className="md:w-1/2 w-full h-full px-3 py-5 bg-blue-300 flex flex-col justify-center ms-auto me-0">
                        <h4 className='text-2xl font-agrandir text-white'>Janie J.</h4>
                        <p className='md:text-xl text-white lg:pe-32 md:pe-16'>"I tried it out! It's Amazing! 💓💓💓 I'm so Excited to see AI being used for one of its most helpful benefits to humanity! Great job team!! 💖💖💖"</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial