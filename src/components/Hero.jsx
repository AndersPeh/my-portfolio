import { motion } from 'framer-motion'
import { styles } from "../styles"
import { ComputersCanvas } from './canvas'
import {  useEffect, useState } from "react";




const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const _handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", _handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", _handleMediaQueryChange);
    };
  }, []);
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#357DB8]"/>
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className="text-[#357DB8]">
                 Jenny </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I take immense pride in what I craft and the innovations I bring to life. In the future, I aspire to produce even more, developing creations that can positively impact and transform people&apos;s lives.
            {isMobile? <p className={`${styles.heroSubText} mt-2 text-white-100`} >I am excited about opportunities that allow me to grow, learn, and contribute to meaningful and creative projects in the tech world.</p>:<p></p>}
         
          </p>
        </div>
      </div>
      
   
  
       {!isMobile?<ComputersCanvas /> : null}
     
    
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
               y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />       
  

          </div>
          </a>
      </div>

    </section>
  )
}

export default Hero