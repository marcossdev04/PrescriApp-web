import Image from 'next/image'
import { Container } from '@/components/Container'
import heroImg from '../../public/img/hero.png'
import { FileDown, FilePlus } from 'lucide-react'

export const Hero = () => {
  return (
    <>
      <Container className="flex  ">
        <div className="lg:w-1/2 flex w-full items-center">
          <div className="mb-8 max-w-2xl">
            <h1 className="lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
              Crie Prescrições de forma simplificada e personalizada
            </h1>
            <p className="lg:text-xl xl:text-2xl py-5 text-xl leading-normal text-gray-500 dark:text-gray-300">
              Gere prescrições manuais ou a partir de modelos pré-salvos por
              você
            </p>

            <div className="sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 flex items-center gap-5">
              <a
                href="/templates"
                className="flex items-center gap-2 rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white "
              >
                <div className="text-xl">Prescrições Salvas</div>
                <FileDown size={30} />
              </a>
              <a
                href="/design"
                className="flex items-center gap-2 rounded-md border px-8 py-4 text-center text-lg font-medium text-white "
              >
                <span className="text-xl"> Criar Prescrição</span>
                <FilePlus size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex w-full items-center justify-center">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
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
