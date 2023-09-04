import React from 'react'
import { SectionTitle } from '../common/SectionTitle'

export default function HomeAbout() {
  return (
    <div id='section_about' className='my-10 md:my-20'>
        <SectionTitle text='Sobre mi'/>
        <p className='text-base md:text-xl mt-5'>
        Hola! Me llamo Luciano Mariotti, soy desarrollador frontend. 
        Soy una persona creativa y original, que siempre está buscando nuevas formas de abordar los desafíos del desarrollo y disrumpir en lo tradicional. 
        Tengo habilidades sólidas en HTML, CSS, JavaScript y Typescript, así como experiencia en el uso de frameworks como React y Vue. 
        Me encanta resolver problemas y disfruto trabajando en equipo para encontrar soluciones innovadoras y eficientes. 
        También tengo experiencia trabajando en estrecha colaboración con diseñadores para garantizar la coherencia entre el diseño y la implementación de interfaces de usuario atractivas y fáciles de usar. 
        Mi enfoque en el desarrollo profesional a futuro es aprender más sobre la arquitectura de software, mantenimiento y escalabilidad de las aplicaciones.
        </p>
  </div>
  )
}
