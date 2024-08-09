import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
    <div className=" text border-t-[1px] border-b-[1px] border-zinc-400 flex overflow-hidden whitespace-nowrap">
    <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw]  font-[FoundersGrotesk,Roboto,sans-serif] uppercase pt-10 -mt-[3vw] -mb-[3vw] font-semibold tracking-tighter'>I am MERN stack developer</motion.h1>
    <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw]  font-[FoundersGrotesk,Roboto,sans-serif] uppercase pt-10 -mt-[3vw] -mb-[3vw] font-semibold tracking-tighter'>&nbsp;I am MERN stack developer</motion.h1>
    </div>
    </div>
  )
}

export default Marquee