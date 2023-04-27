import React from 'react'
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Barbra M.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a passionate web developer constantly on the lookout for new  innovative ways to create mind-blowing web experiences. <br className='sm:block hidden' />
          Let's build something amazing together!
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero