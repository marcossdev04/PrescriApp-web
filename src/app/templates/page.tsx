import { FileText, Plus, Search, SquarePen, Trash2 } from 'lucide-react'

export default function Template() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col rounded-xl border bg-white bg-opacity-20 shadow-2xl ">
      <div className="flex items-center justify-between border-b border-gray-600 p-3">
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
        <button className="rounded-full bg-green-500 p-1 hover:bg-opacity-80">
          <Plus size={32} />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between p-3">
          <div className="text-xl font-medium">Hepatite</div>
          <div className="flex gap-2">
            <button>
              <SquarePen size={27} className="hover:text-green-500" />
            </button>
            <button>
              <Trash2 size={27} className="hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
