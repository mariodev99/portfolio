import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

interface Props {
    children: JSX.Element
}

export const Layout = ({children}:Props) => {
  return (
    <>
    <div className='flex justify-center'>
      <Nav/>
      <div className='container max-w-7xl px-5 md:px-0'>
          {children}
      </div>
    </div>
    <Footer/>
    </>
  )
}
