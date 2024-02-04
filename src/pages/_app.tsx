import { Layout } from '@/components/layout'
import Nav from '@/components/layout/Nav'
import StartAnimation from '@/components/layout/StartAnimation'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [endAnimation, setEndAnimation] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true)
    }, 4500);
  }, [])


  return (
    endAnimation ?  
    <>

      <Nav/>
      <AnimatePresence mode='wait'>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
    :           
    <StartAnimation/>
  )
}
