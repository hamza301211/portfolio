import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid font-medium text-lg text-light border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <div className='flex items-center lg:py-2'>
            {/* <Link href="/">Hamza</Link> */}
            </div>
            <span>&copy; Copyright {new Date().getFullYear()} Hamza Nadeem</span>
            <div></div>
        </Layout>
    </footer>
  )
}

export default Footer