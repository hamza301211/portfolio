import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import  { GithubIcon, LinkedInIcon, TwitterIcon,FbIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href,title,className=""})=>{
  const router = useRouter()
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-light ${router.asPath === href ? 'w-full': 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href,title,className="",toggle})=>{
  const router = useRouter()
  const handleClick = ()=>{
    toggle()
    router.push(href)
  }
  return(
    <button href={href} className={`${className} relative group text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-dark ${router.asPath === href ? 'w-full': 'w-0'}`}>&nbsp;</span>
    </button>
  )
}

const NavBar = () => {
  const [mode,setMode]= useThemeSwitcher()
  const [isOpen,setIsOpen]=useState(false)

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
    <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
      <span className={`bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
      <span className={`bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
      <span className={`bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
    </button>
     
     <div className='w-full flex justify-between items-center lg:hidden'>
       <nav>
        <CustomLink href="/" title='Home' className='mr-4'/>
        <CustomLink href="/experience" title='Experience' className='mx-4'/>
        <CustomLink href="/skills" title='Skills' className='mx-4'/>
        <CustomLink href="/projects" title='Projects' className='mx-4'/>
        <CustomLink href="/contact" title='Contact' className='ml-4'/>
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href='https://www.linkedin.com/in/hamza-nadeem-khan-420389242/' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
        <motion.a href='https://github.com/hamza301211' whileHover={{y:-2}} target='_blank' whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
        <motion.a href='https://twitter.com/hbutt7883' whileHover={{y:-2}} target='_blank' whileTap={{scale:0.9}} className='w-6 mx-3'><TwitterIcon/></motion.a>
        <motion.a href='https://www.facebook.com/hamza.nadeem.14289/' whileHover={{y:-2}} target='_blank' whileTap={{scale:0.9}} className='w-6 mx-3'><FbIcon/></motion.a>
      </nav>
     </div>

     {
      isOpen ?
      <motion.div initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}} animate={{scale:1,opacity:1}} className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/75 rounded-lg backdrop-blur-md py-32'>
       <nav className='flex items-center flex-col justify-center'>
        <CustomMobileLink href="/" title='Home' className=''toggle={handleClick}/>
        <CustomMobileLink href="/experience" title='Experience' className=''toggle={handleClick}/>
        <CustomMobileLink href="/skills" title='Skills' className=''toggle={handleClick}/>
        <CustomMobileLink href="/projects" title='Projects' className=''toggle={handleClick}/>
        <CustomMobileLink href="/contact" title='Contact' className=''toggle={handleClick}/>
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap mt-2'>
        <motion.a href='https://www.linkedin.com/in/hamza-nadeem-khan-420389242/' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 sm:mx-1'><LinkedInIcon/></motion.a>
        <motion.a href='https://github.com/hamza301211' whileHover={{y:-2}} target='_blank' whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1 rounded-full bg-dark'><GithubIcon/></motion.a>
        <motion.a href='https://twitter.com/hbutt7883' whileHover={{y:-2}} target='_blank' whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><TwitterIcon/></motion.a>
        <motion.a href='https://www.facebook.com/hamza.nadeem.14289/' whileHover={{y:-2}} target='_blank' whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><FbIcon/></motion.a>
      </nav>
     </motion.div>

      : null
     }
      </header>
  )
}

export default NavBar