import React from 'react'
import { Container } from '@/components/Container'

export const Cta = () => {
  return (
    <Container>
      <div className="lg:px-12 lg:py-12 lg:flex-nowrap mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-indigo-600 px-7 py-7 text-white">
        <div className="lg:text-left flex-grow text-center">
          <h2 className="lg:text-3xl text-2xl font-medium">
            Ready to try-out this template?
          </h2>
          <p className="lg:text-xl mt-2 font-medium text-white text-opacity-90">
            Don&apos;t let your visitors see a poor landing.
          </p>
        </div>
        <div className="lg:w-auto w-full flex-shrink-0 text-center">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="lg:px-10 lg:py-5 mx-auto inline-block rounded-md bg-white px-7 py-3 text-center text-lg font-medium text-indigo-600 "
          >
            Download for Free
          </a>
        </div>
      </div>
    </Container>
  )
}
