import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from '@/components/LiIcon'

const Details = ({type,time,place,info})=>{
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full dark:text-light md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>

}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='mt-10 mb-32'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16'> 
            Education    
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'> 
                <Details 
                type="Bachelors Of Science In Computer Science"
                time="2019-23"
                place="Comsats University"
                info="Relevanct courses include Data structures, Object oriented programming, Databases, Artficial Intelligence and much more."
                />
                 <Details 
                type="Pre Engineering"
                time="2016-18"
                place="Garrison Academy"
                info="Intermediate pre engineering develops basic scientific skills in the fields of Physic, Chemistry and Mathematics throughout the program."
                />
                 <Details 
                type="Matriculation in Sciences"
                time="2014-16"
                place="Beaconhouse School System"
                info="The formal step of entering a university with major subjects Biology, Physics, Chemistry, Mathematics.."
                />
            </ul>
        </div>
        </div>
  )
}

export default Education