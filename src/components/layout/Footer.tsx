import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='px-5 bg-light h-28 md:h-52 flex flex-col justify-end'>
        <div className='flex justify-between pb-5 text-sm md:text-xl'>
            <p className='font-semibold'>Luciano Mariotti</p>
            <div className='flex gap-5'>
                <Link href='/#section_proyects'>Proyectos</Link>
                <Link href='mailto:luciano.mariotti99@gmail.com'>Contacto</Link>
            </div>
        </div>
    </div>
  )
}
