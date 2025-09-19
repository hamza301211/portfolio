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
      {/* Primary Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Hamza Nadeem Khan - Full Stack Developer specializing in MERN stack, React, Node.js, MongoDB, Express.js, Docker, Kubernetes, and cloud computing. View my portfolio and projects." />
      <meta name="author" content="Hamza Nadeem Khan" />
      <meta name="keywords" content="Hamza Nadeem Khan, Full Stack Developer, MERN Stack Developer, React Developer, Node.js Developer, MongoDB, Express.js, Docker, Kubernetes, Cloud Computing, Web Development, JavaScript, Portfolio, Software Engineer" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://hamzanadeem.vercel.app" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hamzanadeem.vercel.app" />
      <meta property="og:title" content="Hamza Nadeem Khan | Full Stack Developer & MERN Stack Expert" />
      <meta property="og:description" content="Professional portfolio of Hamza Nadeem Khan - Full Stack Developer with expertise in MERN stack, React, Node.js, Docker, Kubernetes, and cloud computing solutions." />
      <meta property="og:image" content="https://hamzanadeem.vercel.app/images/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Hamza Nadeem Khan Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hamzanadeem.vercel.app" />
      <meta property="twitter:title" content="Hamza Nadeem Khan | Full Stack Developer & MERN Stack Expert" />
      <meta property="twitter:description" content="Professional portfolio of Hamza Nadeem Khan - Full Stack Developer with expertise in MERN stack, React, Node.js, Docker, Kubernetes, and cloud computing solutions." />
      <meta property="twitter:image" content="https://hamzanadeem.vercel.app/images/og-image.jpg" />
      <meta property="twitter:creator" content="@hamzanadeem" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Pakistan" />
      <meta name="ICBM" content="33.6844, 73.0479" />
      
      {/* Schema.org markup for Google+ */}
      <meta itemProp="name" content="Hamza Nadeem Khan | Full Stack Developer Portfolio" />
      <meta itemProp="description" content="Professional portfolio showcasing full stack development projects, MERN stack expertise, and cloud computing solutions." />
      <meta itemProp="image" content="https://hamzanadeem.vercel.app/images/og-image.jpg" />
      
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
