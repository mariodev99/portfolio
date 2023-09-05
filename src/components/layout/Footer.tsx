import React from 'react'

export default function Footer() {
  return (
    <div className='px-5 bg-gradient-to-b from-dark to-[#00131E] h-28 md:h-52 flex flex-col justify-end'>
        <div className='flex justify-between pb-5 text-sm md:text-xl'>
            <p className='font-semibold'>Luciano Mariotti</p>
            <div className='flex gap-5'>
                <a href='/#section_proyects'>Proyectos</a>
                <a href='mailto:luciano.mariotti99@gmail.com'>Contacto</a>
            </div>
        </div>
    </div>
  )
}
