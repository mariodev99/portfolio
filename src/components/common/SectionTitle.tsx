interface Props {
    text: string
}

export const SectionTitle = ({text}:Props) => {
  return (
    <div className='text-white text-3xl md:text-6xl font-semibold'>{text}</div>
  )
}
