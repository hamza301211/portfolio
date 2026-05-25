import React from 'react'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full border-t border-solid border-light/10 bg-dark'>
      <div className='max-w-[1200px] mx-auto px-8 py-10 md:px-5'>
        <div className='flex items-center justify-between md:flex-col md:gap-6 md:text-center'>
          {/* Brand */}
          <div>
            <h3 className='text-light font-bold text-lg mb-1'>
              <span className='gradient-text'>H</span>amza Nadeem Khan
            </h3>
            <p className='text-light/40 text-sm'>Full Stack Developer · Manchester, UK</p>
          </div>

          {/* Social Icons */}
          <div className='flex items-center gap-3'>
            <motion.a href='https://www.linkedin.com/in/hamza-nadeem-khan-420389242/' target='_blank' whileHover={{y:-2}} className='social-icon'><LinkedInIcon/></motion.a>
            <motion.a href='https://github.com/hamza301211' target='_blank' whileHover={{y:-2}} className='social-icon'><GithubIcon/></motion.a>
            <motion.a href='https://twitter.com/hbutt7883' target='_blank' whileHover={{y:-2}} className='social-icon'><TwitterIcon/></motion.a>
          </div>

          {/* Copyright */}
          <p className='text-light/30 text-sm'>
            &copy; {new Date().getFullYear()} Hamza Nadeem Khan
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer