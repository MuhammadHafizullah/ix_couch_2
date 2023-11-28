import Cta from './Cta.jsx'

const CoachinVission = () => {
  return (
    <section className='working'>
        <div className="container mx-auto px-4 py-20">
            <div className="flex md:gap-12 gap-5 lg:flex-nowrap flex-wrap">
              <div className="shrink-0 lg:w-auto w-full lg:order-first order-last">
                <img src="./assets/standingRock.jpg" alt="" className="xl:w-[500px] lg:w-[450px] w-full rounded-[36px]" />
              </div>
              <div>
                <h3 className="md:text-4xl text-3xl uppercase font-exo text-gray-200 tracking-widest mb-10">EMPOWER YOU COACHING VISION</h3>
                <p className="text-gray-300 text-xl mb-5">With IXCoach, we bring your unique coaching philosophy to life through a personalized AI solution. Our platform doesn't just replicate your wisdom; it enriches it with interdisciplinary insights or unique styles that you can choose from, offering your clients a deeply engaging conversational experience.</p>

                <p className="text-gray-300 text-xl mb-5">Our AI coaches are not just digital echoes but dynamic partners, adapting to your specific knowledge domain and coaching style. They blend seamlessly into your digital presence, whether on your website, through popular messaging apps like WhatsApp or Telegram, or as a versatile mobile app avatar equipped with your own voice.</p>

                <p className="text-gray-300 text-xl mb-5">Elevate your coaching impact by creating an AI coach that's not just a reflection of your expertise but an extension of it, attracting a diverse audience and positioning you as a pioneer in integrative AI coaching."</p>

                <p className="text-gray-300 text-xl mb-5">We offer the leading system for synthesizing the unique way in which you approach and engage different coaching contexts, and take the hundreds of hours required to capture this and boil it down to just a couple of hours, which creating the worlds most aligned pathway for sculpting your AI.</p>

                <Cta link="https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral" text="Contact Us"/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CoachinVission