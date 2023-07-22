import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/dev.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { CircularText, LinkArrow } from '@/components/Icons'  
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {  
  return (
    <>
      <Head>
        <title>Hamza Nadeem | Home</title>
        <meta name="description" content="home page of hamza" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'> 
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='home pic' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 50vw'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text="HI I'M HAMZA" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
            A Full-Stack Web Developer, Proactive learner, always eager to explore new technologies and frameworks that can enhance my skill set. Excited to work on challenging projects that push the boundaries of my knowledge and allow me to grow both professionally and personally.
              </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="/resume.pdf" target={"_blank"} className='flex items-center bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'>
                Resume<LinkArrow className={"w-6 ml-1"}/>
                </Link>
              <Link href="/contact" className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
            </div>
            </div>
          </div>
        </Layout>
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto'>
          <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
          </div>
        </div>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="image" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
