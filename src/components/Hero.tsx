'use client'
import Image from 'next/image'
import { Container } from '@/components/Container'
import heroImg from '../../public/img/hero.png'
import { FileDown, FilePlus } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const Hero = () => {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  setTheme('dark')
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <>
      <Container className="flex mobile:mt-40">
        <div className="lg:w-1/2 flex w-full items-center mobile:mt-5 mobile:h-full mobile:w-full">
          <div className="mb-8 flex max-w-2xl  flex-col justify-between mobile:max-w-[100%]">
            <div>
              <h1 className="lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white mobile:text-center mobile:text-3xl">
                Crie Prescrições de forma simplificada e personalizada
              </h1>
              <p className="lg:text-xl xl:text-2xl py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 mobile:text-xl">
                Gere prescrições manuais ou a partir de modelos pré-salvos por
                você
              </p>
            </div>
            <div>
              <div className="sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 flex items-center gap-5">
                <a
                  href="/templates"
                  className="flex items-center gap-2 rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white mobile:px-4 laptop:px-2 "
                >
                  <div className="text-base mobile:text-sm desktop:text-xl">
                    Prescrições Salvas
                  </div>
                  <FileDown size={30} />
                </a>
                <a
                  href="/design"
                  className="flex items-center gap-2 rounded-md border px-8 py-4 text-center text-lg font-medium text-white mobile:px-4 laptop:px-4 "
                >
                  <span className="text-base mobile:text-sm desktop:text-xl">
                    Criar Prescrição
                  </span>
                  <FilePlus size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex w-full items-center justify-center mobile:hidden">
          <div className="mobile:hidden tablet:hidden desktop:hidden">
            <Image
              src={heroImg}
              width="450"
              height="500"
              className={'object-cover'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <div className="mobile:hidden tablet:hidden laptop:hidden">
            <Image
              src={heroImg}
              width="620"
              height="500"
              className={'object-cover'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  )
}
