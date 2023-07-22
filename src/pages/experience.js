import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from '@/components/LiIcon'
import Education from '@/components/Education'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

const Details = ({position,company,companyLink,time,address,work})=>{
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light'>{position}&nbsp; <a target='_blank' className='text-primary dark:text-primaryDark capitalize' href={companyLink}>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full dark:text-light md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>

}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <>
    <Head>
        <title>Hamza Nadeem | Experiences</title>
        <meta name="description" content="experiences of hamza" />
      </Head>
      <TransitionEffect/>
    <div className='mt-10 mb-32'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16'> 
            Experience  
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'> 
                <Details 
                position="Associate Software Engineer"
                company="Innovage.io"
                companyLink="https://innovage.io/"
                time="2023-Present"
                address="881-C Faisal Town,
                Lahore, Pakistan"
                work="Working on full stack applications with innovation in technology as of moving from ReactJS to NextJS."
                />
                <Details 
                position="MERN Stack developer Internee"
                company="Professional freelancing training program"
                companyLink="https://pftpedu.org/"
                time="Sep 2022 - Dec 2022"
                address="Hybrid"
                work="Learned basics of full stack development,Created REST api's and worked with UI/UX design aswell."
                />
                {/* <Details 
                position="Associate Software Engineer"
                company="Innovage.io"
                companyLink="https://innovage.io/"
                time="2023-Present"
                address="881-C Faisal Town,
                Lahore, Pakistan"
                work="Working on full stack applications with innovation in technology as of moving from ReactJS to NextJS."
                /> */}
            </ul>
        </div>
        </div>
        <Education/>
        </>
  )
}

export default Experience