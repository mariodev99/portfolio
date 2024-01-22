import { Layout } from '@/components/layout'
import Nav from '@/components/layout/Nav'
import StartAnimation from '@/components/layout/StartAnimation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [endAnimation, setEndAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true)
    }, 4500);
  }, [])

  return (
    endAnimation ?  
    <>
      <Nav/>
      <Component {...pageProps} />
    </>
    :           
    <StartAnimation/>
  )
}
