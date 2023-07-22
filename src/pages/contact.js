import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profileImage from "../../public/images/profile/hamza.jpeg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import ContactForm from '@/components/ContactForm'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue,{duration:3000})
    const isInView = useInView(ref,{once:true})

    useEffect(()=>{
        if(isInView){
            motionValue.set(value); 
        }
    },[isInView,value,motionValue])

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue,value])
    return <span ref={ref}></span>
}

const Contact = () => {
  return (
   <>
   <Head>
        <title>Hamza Nadeem | Contact</title>
        <meta name="description" content="contact page of hamza" />
      </Head>
   <TransitionEffect/>
   <main className='flex w-full flex-col items-center justify-center text-light'>
    <Layout className='pt-16'>
    <AnimatedText text="Full Stack Developer" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-light/75'>About Me</h2>
            <p className='font-medium'>
            Hey there! I'm Hamza, a passionate and experienced Full Stack Developer with one year of hands-on experience. I've had the privilege of working extensively with the MERN (MongoDB, Express.js, React, Node.js) stack and Next.js, allowing me to create some incredible web applications.
            </p>
            <p className='font-medium my-4'>
            Over the past year, I've had the chance to immerse myself in both front-end and back-end development, and it's been an amazing journey. Working with React has given me the opportunity to craft stunning user interfaces that are not only visually appealing but also highly responsive, ensuring a seamless user experience.
            </p>
            <p className='font-medium'>
            Throughout my career, I have collaborated with cross-functional teams, including UI/UX designers and backend developers, to deliver high-quality products. I am experienced in Agile methodologies and version control systems like Git, which enables smooth collaboration and efficient project management.
            </p>
        </div>

        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid p-8 bg-dark border-light xl:col-span-4 md:order-1 md:col-span-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light'/>
            <Image src={profileImage} alt="hamza" className='w-full h-auto rounded-2xl' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'/>
        </div>

        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={5}/>+</span>
                <h2 className='text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Client's Satisfied</h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={10}/>+</span>
                <h2 className='text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Project's Completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={1}/>+</span>
                <h2 className='text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Experience</h2>
            </div>
        </div>

    </div>
    </Layout>
   </main>
   <AnimatedText text="Contact" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
   <ContactForm/>
   </>
  )
}

export default Contact