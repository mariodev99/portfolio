interface Props {
    text: string
}

export const SectionTitle = ({text}:Props) => {
  return (
    <div className='text-[8vw] font-medium '>{text}</div>
  )
}
