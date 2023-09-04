import React from 'react'

interface Props {
    text: string
    size: "sm" | "lg"
}

export const PrimaryBox = ({text, size}:Props) => {

  
  // bg-primary/[.15]
  return (
    <div className={`bg-primary/[.15] ${size === "sm" ? "px-4 py-2" : "px-8 py-4"} rounded-full text-primary font-semibold text-xs md:text-base`}>{text}</div>
  )
}
