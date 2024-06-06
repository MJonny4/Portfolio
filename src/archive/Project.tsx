import { motion } from 'framer-motion'
import { FaGithub, FaGlobe } from 'react-icons/fa6'

import type { TProject, TSkill } from '../types/types'

export default function Project({
    id,
    title,
    description,
    description_es,
    description_cat,
    image,
    skills,
    urlWeb,
    urlGithub,
    lang,
}: TProject) {
    return (
        <article
            key={id}
            className="flex w-full flex-col items-center gap-5 rounded-lg bg-neutral-200 p-5 shadow-md transition-all duration-300 ease-in-out hover:shadow-inner sm:flex-row md:flex-row lg:flex-row dark:bg-neutral-800"
        >
            <div className="order-2 flex w-full flex-col gap-4 sm:order-1 sm:w-7/12">
                <h3 className="sm:text-xl lg:text-2xl dark:text-white">
                    {title ?? ''}
                </h3>
                <p className="text-neutral-700 sm:text-sm lg:text-base xl:text-lg dark:text-neutral-300">
                    {lang === 'es'
                        ? description_es
                        : lang === 'cat'
                          ? description_cat
                          : description}
                </p>
                <ul className="flex flex-row flex-wrap justify-start gap-2 text-2xl">
                    {skills?.map((skill: TSkill) => {
                        return (
                            <div className="group relative" key={skill.id}>
                                <li
                                    className={`rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300
                                `}
                                >
                                    {skill.icon}
                                </li>
                                <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                                <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                                    {skill.name}
                                </span>
                            </div>
                        )
                    })}
                </ul>
            </div>
            {image && (
                <div className="group relative order-1 w-full overflow-hidden rounded-lg shadow-lg sm:order-2 sm:w-5/12">
                    <motion.img
                        src={image}
                        alt={title}
                        className=" w-full rounded-lg object-scale-down lg:h-64 lg:object-cover xl:h-[21rem]"
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1 * id,
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-8 rounded-lg bg-secondary bg-opacity-90 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-90">
                        <a
                            href={urlWeb}
                            target="_blank"
                            rel="noreferrer"
                            className="text-4xl transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary"
                            title={title}
                        >
                            <FaGlobe />
                        </a>
                        <a
                            href={urlGithub}
                            title={title}
                            target="_blank"
                            rel="noreferrer"
                            className="text-4xl transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            )}
        </article>
    )
}
