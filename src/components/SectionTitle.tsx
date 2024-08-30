import React from 'react'
import { Container } from '@/components/Container'

interface SectionTitleProps {
  preTitle?: string
  title?: string
  align?: 'left' | 'center'
  children?: React.ReactNode
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        props.align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold uppercase tracking-wider text-indigo-600">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="lg:leading-tight lg:text-4xl mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="lg:text-xl xl:text-xl max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  )
}
