import React from 'react'

export const Contact = () => {
    return (
        <section id="contact" className='py-20'>
            <div className="container mx-auto px-4">
                <div className="flex lg:flex-nowrap flex-wrap lg:gap-10">
                    <div className='md:w-1/2 w-full md:mb-0 mb-10'>
                        <h2 className="capitalize font-inter font-semibold mb-10 lg:text-5xl md:text-4xl text-3xl text-white">Contact Us Today</h2>
                        <p className="font-exo text-xl text-white">Interested in learning more about how AI Masterclass can help transform your coaching practices? <strong>Send us a message</strong> and one of our team members will be in touch right away.</p>
                    </div>
                    <div className='flex-1'>
                        <form action="#" method="post">
                            <div  className="mb-5">
                                <div className="flex gap-8 justify-between">
                                <div className='flex-1'>
                                <label htmlFor="nameInput" className="text-gray-200 font-exo block mb-3">Name</label>
                                <input type="text" id='nameInput' className="bg-sky-100 px-2 py-3 rounded-md w-full text-gray-200 focus:outline-none"/>
                                </div>
                                <div className='flex-1'>
                                <label htmlFor="emailInput" className="text-gray-200 font-exo block mb-3">Email</label>
                                <input type="text" id='emailInput' className="bg-sky-100 px-2 py-3 rounded-md w-full text-gray-200 focus:outline-none"/>
                                </div>  
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="messageInput" className="text-gray-200 font-exo block mb-3">Message</label>
                                <textarea name="" id='messageInput' className="bg-sky-100 px-2 py-3 rounded-md w-full text-gray-200 focus:outline-none" cols="30" rows="7">
                                </textarea>
                            </div>
                            <div className="flex gap-8">
                                <p className='text-white font-exo'>This site is protected by reCAPTCHA and the Google <a href="#" classname="underline">Privacy Policy</a> and <a href="#" classname="underline">Terms of Services</a> apply.</p>
                                <button type='submit' className="px-10 mb-10 py-4 font-exo text-xl inline-block text-white bg-gradient-to-r rounded-md from-primary to-secondary">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}
