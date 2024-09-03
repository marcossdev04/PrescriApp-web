import { FileText, Search } from 'lucide-react'
import Link from 'next/link'

export default function Template() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col rounded-xl border bg-white bg-opacity-20 shadow-2xl ">
      <div className="flex items-center justify-between border-b border-gray-600 p-3 ">
        <div className="flex items-center gap-2 text-2xl font-medium">
          <div>Modelos</div>
          <div>
            <FileText size={30} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="border-primary focus:border-primary rounded-md border bg-white py-1 pl-2 text-lg text-black focus-visible:outline-none"
            name="fullName"
            id="fullName"
            placeholder="Pesquisar"
          />
          <Search size={32} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col">
        <Link href={'/model/alana'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Alana</div>
          </div>
        </Link>
        <Link href={'/model/cristiane'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Cristiane</div>
          </div>
        </Link>
        <Link href={'/model/jacy'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Jacy</div>
          </div>
        </Link>
        <Link href={'/model/jose'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">José</div>
          </div>
        </Link>
        <Link href={'/model/waldenice'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Waldenice</div>
          </div>
        </Link>
        <Link href={'/model/yana'}>
          <div className="flex justify-between border-b p-3">
            <div className="text-xl font-medium">Yana</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
