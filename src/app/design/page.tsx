'use client'
import { Plus, Printer } from 'lucide-react'
import { useState } from 'react'

export default function Design() {
  const [title, setTitle] = useState<string>('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  console.log(title)

  const [section, setSection] = useState<
    {
      title: string | null
      description1: string | null
      description2: string | null
      description3: string | null
    }[]
  >([
    {
      title: null,
      description1: null,
      description2: null,
      description3: null,
    },
  ])
  console.log(section)

  const handleSectionTitleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newSection = [...section]
    newSection[index].title = event.target.value
    setSection(newSection)
  }

  const handleSectionDescription1Change = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newSection = [...section]
    newSection[index].description1 = event.target.value
    setSection(newSection)
  }

  const handleSectionDescription2Change = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newSection = [...section]
    newSection[index].description2 = event.target.value
    setSection(newSection)
  }

  const handleSectionDescription3Change = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newSection = [...section]
    newSection[index].description3 = event.target.value
    setSection(newSection)
  }

  // Função para adicionar uma nova seção
  const handleAddSection = () => {
    setSection([
      ...section,
      {
        title: null,
        description1: null,
        description2: null,
        description3: null,
      },
    ])
  }

  return (
    <div>
      <div className="mx-auto flex max-w-[1000px] flex-col rounded-xl border bg-white p-2 text-black shadow-2xl laptop:max-w-[600px] ">
        <div className="flex justify-end">
          <button
            //   onClick={handlePushAddRoute}
            className="flex items-center justify-between gap-2 rounded bg-green-600 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-95 mobile:text-xs laptop:text-base"
          >
            <Printer size={20} />
            <p>Imprimir</p>
          </button>
        </div>
        <div about="Titulo" className="flex justify-center py-1">
          <input
            className="w-full border bg-transparent px-2 text-center text-2xl font-medium"
            type="text"
            value={title}
            onChange={handleTitleChange} // Função onChange para o título principal
          />
        </div>
        <div className="flex flex-col gap-5">
          {section.map((sec, index) => (
            <div key={index} className="border border-zinc-400">
              <div className="bg-green-600">
                <input
                  className="w-full bg-transparent px-2 text-xl font-medium"
                  type="text"
                  value={sec.title || ''}
                  onChange={(e) => handleSectionTitleChange(index, e)} // Função onChange para o título da seção
                />
              </div>
              <div className="grid grid-cols-5 items-center bg-green-600 bg-opacity-25">
                <div className="col-span-2 text-sm">
                  <input
                    className="w-full bg-transparent px-2 text-lg font-medium"
                    type="text"
                    value={sec.description1 || ''}
                    onChange={(e) => handleSectionDescription1Change(index, e)} // Função onChange para description1
                  />
                </div>
                <div className="col-span-3 border-l border-zinc-400 text-sm">
                  <input
                    className="w-full bg-transparent px-2 text-lg font-medium"
                    type="text"
                    value={sec.description2 || ''}
                    onChange={(e) => handleSectionDescription2Change(index, e)} // Função onChange para description2
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 items-center bg-green-600 bg-opacity-25">
                <div className="col-span-5 text-sm">
                  <input
                    className="w-full bg-transparent px-2 py-1 text-lg font-medium"
                    type="text"
                    value={sec.description3 || ''}
                    onChange={(e) => handleSectionDescription3Change(index, e)} // Função onChange para description3
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddSection} // Adicionando nova seção ao clicar
            className="border-3 flex h-32 items-center justify-center border-4 border-dashed bg-green-400 bg-opacity-20"
          >
            <Plus size={70} className="text-zinc-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
