import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head'

const montSerrat = Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Hamza Nadeem Khan - Full Stack Developer with 3+ years experience in React.js, Node.js, TypeScript, and cloud technologies. Based in Manchester, UK." />
      <meta name="author" content="Hamza Nadeem Khan" />
      <meta name="keywords" content="Hamza Nadeem Khan, Full Stack Developer, MERN Stack, React, Node.js, TypeScript, Manchester, UK, Software Engineer, Portfolio" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://hamzanadeem.vercel.app" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hamzanadeem.vercel.app" />
      <meta property="og:title" content="Hamza Nadeem Khan | Full Stack Developer" />
      <meta property="og:description" content="Full Stack Developer with 3+ years experience building scalable web apps. Based in Manchester, UK." />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Hamza Nadeem Khan | Full Stack Developer" />

      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="Manchester, United Kingdom" />
      <meta name="theme-color" content="#1b1b1b" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montSerrat.variable} font-mont bg-dark w-full min-h-screen`}>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
    </>
  )
}
