'use client'
import { FooterDesign } from '@/components/FooterDesign'
import { RenderPdf } from '@/components/RenderPdf'
import { Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import data from '@/json/models.json'

interface Props {
  params: { id: string }
}
export default function Model({ params }: Props) {
  const selectedData =
    params.id === '0'
      ? data[
          'Vit. D, Vit B12, estrias, acne, desinflamar fígado e reduzir ferritina'
        ]
      : params.id === '1'
        ? data[
            'Glutamina, creatina,  ferritina e zinco baixos, B12 e ácido fólico'
          ]
        : params.id === '2'
          ? data['Tireóide e desinflamar fígado e reduzir ferritina']
          : params.id === '3'
            ? data['Manipulado de colágeno pra pele']
            : params.id === '4'
              ? data[
                  'Osteoporose, Magnésio e probiótico Dermman Biotic ( dermatite atópica)'
                ]
              : params.id === '5'
                ? data[
                    'Vit D, ácido fólico e B12, enzimas digestivas, ferritina e zinco baixos e magnésio'
                  ]
                : params.id === '6'
                  ? data['Manipulados pra menopausa']
                  : params.id === '7'
                    ? data['Manipulado pro emagrecimento CLOCK e berberina']
                    : params.id === '8'
                      ? data[
                          'Deficiencia de vitaminas e minerais para crianças'
                        ]
                      : params.id === '9'
                        ? data['Tendogen, Curcuma e Magnésio']
                        : params.id === '10'
                          ? data['Novo modelo']
                          : [
                              {
                                title: null,
                                description1: [{ desc1: null, desc2: null }],
                                description3: null,
                              },
                            ]

  console.log(selectedData)
  const [title, setTitle] = useState<string>('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const [section, setSection] = useState<
    {
      title: string | null
      description1: { desc1: string | null; desc2: string | null }[]
      description3: string | null
    }[]
  >(selectedData)

  const handleSectionTitleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newSection = [...section]
    newSection[index].title = event.target.value
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
        description1: [{ desc1: null, desc2: null }],
        description3: null,
      },
    ])
  }

  // Função para adicionar um novo item ao description1
  const handleAddDescriptionItem = (sectionIndex: number) => {
    const newSection = [...section]
    newSection[sectionIndex].description1.push({ desc1: null, desc2: null })
    setSection(newSection)
  }

  // Função para remover um item específico de description1
  const handleRemoveDescriptionItem = (
    sectionIndex: number,
    descIndex: number,
  ) => {
    const newSection = [...section]
    newSection[sectionIndex].description1 = newSection[
      sectionIndex
    ].description1.filter((_, index) => index !== descIndex)
    setSection(newSection)
  }

  // Funções para alterar description1 items
  const handleDescription1Change = (
    sectionIndex: number,
    descIndex: number,
    field: 'desc1' | 'desc2',
    value: string,
  ) => {
    const newSection = [...section]
    newSection[sectionIndex].description1[descIndex][field] = value
    setSection(newSection)
  }

  const handleRemoveSection = (sectionIndex: number) => {
    const newSection = section.filter((_, index) => index !== sectionIndex)
    setSection(newSection)
  }
  return (
    <div>
      <div className="mx-auto flex max-w-[1000px] flex-col rounded-xl border bg-white p-2 text-black shadow-2xl mobile:mt-5 laptop:max-w-[800px] ">
        <div className="flex justify-end">
          <RenderPdf section={section} title={title} />
        </div>
        <div about="Titulo" className="flex justify-center py-1">
          <input
            className="w-full border bg-transparent px-2 text-center text-2xl font-medium"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Título"
          />
        </div>
        <div className="flex flex-col gap-5">
          {section.map((sec, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex items-center justify-center gap-2"
            >
              <div className="w-full border border-zinc-400">
                <div className="bg-green-600">
                  <input
                    className="w-full bg-transparent px-2 text-xl font-medium placeholder:text-zinc-900"
                    type="text"
                    value={sec.title || ''}
                    onChange={(e) => handleSectionTitleChange(sectionIndex, e)}
                    placeholder="Título da seção"
                  />
                </div>
                {sec.description1.map((desc, descIndex) => {
                  const total = sec.description1.length
                  const count = descIndex + 1
                  return (
                    <div
                      key={descIndex}
                      className={`grid grid-cols-12 items-center ${descIndex % 2 === 0 ? 'bg-green-400' : ''} bg-opacity-25`}
                    >
                      <div className="col-span-5 text-sm">
                        <input
                          className="w-full bg-transparent px-2 text-lg font-medium placeholder:text-zinc-700"
                          type="text"
                          value={desc.desc1 || ''}
                          onChange={(e) =>
                            handleDescription1Change(
                              sectionIndex,
                              descIndex,
                              'desc1',
                              e.target.value,
                            )
                          }
                          placeholder="Medicamento"
                        />
                      </div>
                      <div className="col-span-6 flex border-l border-zinc-400 text-sm">
                        <input
                          className="w-full bg-transparent px-2 text-lg font-medium placeholder:text-zinc-700"
                          type="text"
                          value={desc.desc2 || ''}
                          onChange={(e) =>
                            handleDescription1Change(
                              sectionIndex,
                              descIndex,
                              'desc2',
                              e.target.value,
                            )
                          }
                          placeholder="Quantidade"
                        />
                      </div>
                      <div className="col-span-1 flex items-center justify-end px-3 text-sm">
                        <div className={`${total === count ? '' : 'hidden'}`}>
                          <Plus
                            size={27}
                            className="cursor-pointer  hover:text-green-600"
                            onClick={() =>
                              handleAddDescriptionItem(sectionIndex)
                            }
                          />
                        </div>
                        <div
                          className={`${total === 1 && count === 1 ? 'hidden' : ''}`}
                        >
                          <Trash2
                            className="cursor-pointer hover:text-red-600"
                            onClick={() =>
                              handleRemoveDescriptionItem(
                                sectionIndex,
                                descIndex,
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="grid grid-cols-5 items-center bg-green-600 bg-opacity-25">
                  <div className="col-span-5 text-sm">
                    <input
                      className="w-full bg-transparent px-2 py-1 text-lg font-medium placeholder:text-zinc-700"
                      type="text"
                      value={sec.description3 || ''}
                      onChange={(e) =>
                        handleSectionDescription3Change(sectionIndex, e)
                      }
                      placeholder="Descrição"
                    />
                  </div>
                </div>
              </div>
              <button onClick={() => handleRemoveSection(sectionIndex)}>
                <Trash2 />
              </button>
            </div>
          ))}
          <button
            onClick={handleAddSection}
            className="border-3 flex h-32 items-center justify-center border-4 border-dashed bg-green-400 bg-opacity-20"
          >
            <Plus size={70} className="text-zinc-400" />
          </button>
        </div>
        <FooterDesign />
      </div>
    </div>
  )
}
