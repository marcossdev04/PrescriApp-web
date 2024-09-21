import { FileText } from 'lucide-react'
import Link from 'next/link'

export default function Template() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col rounded-xl border bg-white bg-opacity-20 shadow-2xl mobile:mt-5 ">
      <div className="flex items-center justify-center border-b border-gray-600 p-3 ">
        <div className="flex items-center justify-center gap-2 text-2xl font-semibold mobile:text-3xl">
          <div>Modelos</div>
          <div>
            <FileText className="mobile:hidden" size={30} />
            <FileText
              className="tablet:hidden laptop:hidden desktop:hidden"
              size={25}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Link href={`/model/0`}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Vit. D, Vit B12, estrias, acne, desinflamar fígado e reduzir
              ferritina
            </div>
          </div>
        </Link>
        <Link href={'/model/1'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Glutamina, creatina, ferritina e zinco baixos, B12 e ácido fólico
            </div>
          </div>
        </Link>
        <Link href={'/model/2'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Tireóide e desinflamar fígado e reduzir ferritina
            </div>
          </div>
        </Link>
        <Link href={'/model/3'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado de colágeno para pele
            </div>
          </div>
        </Link>
        <Link href={'/model/4'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Osteoporose</div>
          </div>
        </Link>
        <Link href={'/model/5'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Vit D, ácido fólico e B12, enzimas digestivas, ferritina e zinco
              baixos e magnésio
            </div>
          </div>
        </Link>
        <Link href={'/model/6'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Manipulados pra menopausa</div>
          </div>
        </Link>
        <Link href={'/model/7'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado pro emagrecimento CLOCK e berberina
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
