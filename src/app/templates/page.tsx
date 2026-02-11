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
              Prescrições Teresa Cristina
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
