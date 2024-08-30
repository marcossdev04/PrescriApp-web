import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`xl:px-0 container mx-auto p-8 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}
