import React from 'react'

interface Props {
    text: string
    size: "sm" | "lg"
}

export const PrimaryBox = ({text, size}:Props) => {

  
  // bg-primary/[.15]
  return (
    <div className={`${size === "sm" ? "px-6 py-3" : "px-8 py-4"} bg-white shadow-xs rounded-full font-semibold text-xs md:text-base`}>{text}</div>
  )
}
