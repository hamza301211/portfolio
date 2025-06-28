import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'

const montSerrat = Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Hamza Nadeem Khan - Portfolio showcasing my work, skills, and experience as a developer" />
      <meta name="author" content="Hamza Nadeem Khan" />
      <meta property="og:title" content="Hamza Nadeem Khan | Portfolio" />
      <meta property="og:description" content="Portfolio of Hamza Nadeem Khan - Showcasing my work, skills, and experience as a developer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montSerrat.variable} font-mont bg-dark w-full min-h-screen`}>
      <NavBar/>
      <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer/> 
    </main>
    </>
  )
}
