'use client'
import { Printer } from 'lucide-react'
import { useState } from 'react'

export default function Design() {
  const [section, setSection] = useState<
    {
      title: string | null
      description1: [string] | [null]
      description2: string | null
    }[]
  >([
    {
      title: null,
      description1: [null],
      description2: null,
    },
  ])

  return (
    <div>
      <div className="laptop:max-w-[600px] mx-auto flex max-w-[1000px] flex-col rounded-xl border bg-white p-2 text-black shadow-2xl ">
        <div className="flex justify-end">
          <button
            //   onClick={handlePushAddRoute}
            className="mobile:text-xs laptop:text-base flex items-center justify-between gap-2 rounded bg-green-600 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-95"
          >
            <Printer size={20} />
            <p>Imprimir</p>
          </button>
        </div>
        <div about="Titulo" className="flex justify-center py-1">
          <input
            className=" w-full border bg-transparent px-2 text-center"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="border border-zinc-400">
            <div className="bg-green-600">
              <input className=" w-full bg-transparent px-2" type="text" />
            </div>
            <div className=" grid grid-cols-5 items-center bg-green-600  bg-opacity-25">
              <div className="col-span-2  text-sm">
                <input className=" w-full bg-transparent px-2" type="text" />
              </div>
              <div className="col-span-3 border-l border-zinc-400  text-sm">
                <input className=" w-full bg-transparent px-2" type="text" />
              </div>
            </div>
            <div className=" grid grid-cols-5 items-center">
              <div className="col-span-2  text-sm">
                <input className=" w-full bg-transparent px-2" type="text" />
              </div>
              <div className="col-span-3 border-l border-zinc-400  text-sm">
                <input className=" w-full bg-transparent px-2" type="text" />
              </div>
            </div>
            <div className=" grid grid-cols-5 items-center bg-green-600  bg-opacity-25">
              <div className="col-span-5 text-sm">
                <input
                  className=" w-full bg-transparent px-2 py-1"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
