import Project from '../archive/Project'
import { projects } from '../database/Projects'

import { useState } from 'react'
import type { TProject } from '../types/types'
import { FaPlus } from 'react-icons/fa'

type ProjectsProps = {
    lang: string
}

export default function Projects({ lang }: ProjectsProps) {
    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? projects : projects.slice(0, 3)

    return (
        <section className="rounded-xl bg-gray-100 p-4 shadow-lg dark:bg-neutral-900">
            <h2 className="mb-3 text-left text-xl text-amber-400 md:text-3xl dark:text-primary">
                {lang === 'es'
                    ? 'Proyectos'
                    : lang === 'cat'
                      ? 'Projectes'
                      : 'Projects'}
            </h2>
            <div className="grid grid-cols-1 gap-5">
                {visibleProjects.map((project: TProject) => {
                    project.lang = lang
                    return <Project key={project.id} {...project} />
                })}
            </div>
            {!showAll && projects.length > 3 && (
                <button
                    className="mx-auto mb-1 mt-4 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-200 from-[#C01432] to-[#240B34] p-2 text-center shadow-xl transition duration-300 ease-out-expo hover:bg-gradient-to-r hover:text-primary dark:border-neutral-800"
                    onClick={() => setShowAll(true)}
                >
                    <FaPlus />{' '}
                    {lang === 'es'
                        ? 'Más'
                        : lang === 'cat'
                          ? 'Més'
                          : 'Show all'}
                </button>
            )}
        </section>
    )
}
