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
              Manipulado para deficiência de Vitaminas
            </div>
          </div>
        </Link>
        <Link href={'/model/1'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para deficiência de Vitamina B12, B6 e Ácido Fólico
            </div>
          </div>
        </Link>
        <Link href={'/model/2'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para deficiência de Minerais e Vitaminas
            </div>
          </div>
        </Link>
        <Link href={'/model/3'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Reduzir Glicemia e Insulina
            </div>
          </div>
        </Link>
        <Link href={'/model/4'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Creatina Manipulada</div>
          </div>
        </Link>
        <Link href={'/model/5'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Desinflamação do Organismo (Reduzir Ferritina)
            </div>
          </div>
        </Link>
        <Link href={'/model/6'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Manipulado de Magnésio</div>
          </div>
        </Link>
        <Link href={'/model/7'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Reduzir Metal Pesado (Alumínio)
            </div>
          </div>
        </Link>
        <Link href={'/model/8'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para o aumento do Cortisol
            </div>
          </div>
        </Link>
        <Link href={'/model/9'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Glutamina Manipulada</div>
          </div>
        </Link>
        <Link href={'/model/10'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Proteção da Tireóide
            </div>
          </div>
        </Link>
        <Link href={'/model/11'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para auxiliar no aumento da Testosterona
            </div>
          </div>
        </Link>
        <Link href={'/model/12'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Ganho de Massa Muscular
            </div>
          </div>
        </Link>
        <Link href={'/model/13'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Desinflamação do Fígado
            </div>
          </div>
        </Link>
        <Link href={'/model/14'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Constipação Intestinal
            </div>
          </div>
        </Link>
        <Link href={'/model/15'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para o aumento da Ferritina
            </div>
          </div>
        </Link>
        <Link href={'/model/16'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Osteopenia, Osteomalacia e Osteoporose
            </div>
          </div>
        </Link>
        <Link href={'/model/17'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado de Coenzima Q10
            </div>
          </div>
        </Link>
        <Link href={'/model/18'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Probiótico para Constipação Intestinal
            </div>
          </div>
        </Link>
        <Link href={'/model/19'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">
              Manipulado para Queda de Cabelo
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
