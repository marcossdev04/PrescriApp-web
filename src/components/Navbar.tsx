'use client'
import Link from 'next/link'
import Image from 'next/image'
import PrescriApp from '../../public/img/PrescriAppp.png'

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="lg:justify-between xl:px-0 container relative mx-auto flex flex-wrap items-center justify-between px-8 pt-2">
        <>
          <div className="lg:w-auto flex w-full flex-wrap items-center justify-between">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <Image src={PrescriApp} alt="N" className="w-80" />
                </span>
              </span>
            </Link>
          </div>
        </>
      </nav>
    </div>
  )
}
