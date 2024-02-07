import Link from 'next/link'
import React from 'react'
import { ArrowUp, LogoIcon } from '../icons'

export default function Footer() {
  return (
    <div className='px-5 h-28 md:h-52 flex flex-col justify-end'>
        <div className='flex justify-between pb-5 text-sm md:text-lg font-medium items-center'>
            <p className=''>Luciano <br/> Mariotti</p>
            <div className='flex gap-5'>
                <Link href='#about'>Sobre mi</Link>
                <Link href='#experience'>Experiencia</Link>
                <Link href='/proyectos'>Proyectos</Link>
            </div>
            <div className="group p-5 bg-light rounded-full hover:bg-dark cursor-pointer duration-500 ">
                <ArrowUp className="group-hover:stroke-white  "/>
            </div>
        </div>
    </div>
  )
}
