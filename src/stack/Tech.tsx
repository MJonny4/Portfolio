/* eslint-disable react-refresh/only-export-components */
import { technologies } from '../database/Skills'
import BallCanvas from './Ball'
import { SectionWrapper } from './constants/index'
import { useState } from 'react'

const Tech = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = technologies.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 md:gap-4">
                {currentItems.map((technology) => (
                    <article
                        key={technology.name}
                        className="h-20 w-20 md:h-28 md:w-28"
                    >
                        <BallCanvas icon={technology.icon} />
                        <p className="text-center">{technology.name}</p>
                    </article>
                ))}
            </div>
            <div className="mt-16 flex justify-center gap-4">
                {Array.from(
                    { length: Math.ceil(technologies.length / itemsPerPage) },
                    (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`rounded-md border border-neutral-200 from-[#C01432] to-[#240B34] px-4 py-2 text-center shadow-xl transition duration-300 ease-out-expo hover:bg-gradient-to-r hover:text-primary dark:border-neutral-800 ${
                                currentPage === i + 1
                                    ? 'bg-gradient-to-r text-primary'
                                    : ''
                            }`}
                        >
                            {i + 1}
                        </button>
                    ),
                )}
            </div>
        </>
    )
}

export default SectionWrapper(<Tech />, '')
