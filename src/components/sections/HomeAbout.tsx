import React from 'react'
import { SectionTitle } from '../common/SectionTitle'

export default function HomeAbout() {
  return (
    <div id='about' className='my-10 md:my-20'>
        <SectionTitle text='Sobre mi'/>
        <p className='text-base md:text-xl mt-5'>
        Hola! Me llamo Luciano Mariotti, soy un desarrollador frontend en busca de nuevas formas de abordar los desafíos del desarrollo y disrumpir en lo tradicional. 
        Tengo habilidades sólidas en HTML, CSS, JavaScript y React.js. Por otro lado tengo conocimiento en Node.js, SQL y manejo de base de datos relacionales y no relacionales.
        Me encanta resolver problemas y disfruto trabajando en equipo para encontrar soluciones innovadoras y eficientes. 
        He trabajado en estrecha colaboración con diseñadores para garantizar la coherencia entre el diseño y la implementación de interfaces de usuario atractivas y fáciles de usar. 
        Mi enfoque en el desarrollo profesional a futuro es aprender más sobre la arquitectura de software, mantenimiento y escalabilidad de las aplicaciones.
        </p>
  </div>
  )
}
