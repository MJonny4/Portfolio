import { BiRightArrow } from 'react-icons/bi'
import { FaLaravel, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import {
    SiAlpinedotjs,
    SiAstro,
    SiFastapi,
    SiFirebase,
    SiLivewire,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
} from 'react-icons/si'

const items = [
    {
        description: {
            es: 'Aplicación para gestionar tus tareas diarias, metas y finanzas.',
            cat: 'Aplicació per gestionar les teves tasques diàries, metes i finances.',
            en: 'Web app to manage your daily tasks, goals and finances.',
        },
        technologies: [
            { icon: FaReact, color: 'text-blue-500', label: 'React' },
            { icon: FaNodeJs, color: 'text-green-500', label: 'Node.js' },
            { icon: SiMongodb, color: 'text-green-500', label: 'MongoDB' },
        ],
    },
    {
        description: {
            es: 'Agencia de viajes con una forma moderna de reservar tu próximo viaje.',
            cat: 'Agència de viatges amb una forma moderna de reservar el teu proper viatge.',
            en: 'Travel agency with a modern way to book your next trip.',
        },
        technologies: [
            { icon: SiAstro, color: 'text-orange-500', label: 'Astro' },
            { icon: FaPython, color: 'text-blue-500', label: 'Python' },
            { icon: SiFastapi, color: 'text-green-500', label: 'FastAPI' },
            { icon: SiPostgresql, color: 'text-blue-500', label: 'PostgreSQL' },
        ],
    },
    {
        description: {
            es: 'Sistema de gestión hospitalaria para mejorar la atención al paciente y el flujo de trabajo del médico.',
            cat: 'Sistema de gestió hospitalària per millorar l’atenció al pacient i el flux de treball del metge.',
            en: "Hospital management system to improve patient care and doctor's workflow.",
        },
        technologies: [
            { icon: SiNextdotjs, color: 'text-black', label: 'Next.js' },
            { icon: SiFirebase, color: 'text-yellow-500', label: 'Firebase' },
        ],
    },
    {
        description: {
            es: 'Sitio web de apuestas de fútbol en línea.',
            cat: 'Lloc web d’apostes de futbol en línia.',
            en: 'Online football betting website.',
        },
        technologies: [
            { icon: FaLaravel, color: 'text-red-500', label: 'Laravel' },
            { icon: SiAlpinedotjs, color: 'text-blue-500', label: 'Alpine.js' },
            { icon: SiLivewire, color: 'text-pink-500', label: 'Livewire' },
        ],
    },
]

export default function Temp({ lang }: { lang: string }) {
    return (
        <>
            {items.map((item, index) => (
                <div
                    className="mb-4 inline-flex flex-col items-center gap-2 md:flex-row"
                    key={index}
                >
                    <BiRightArrow className="h-5 w-5 rotate-90 text-primary md:rotate-0" />
                    <p>
                        {lang === 'es'
                            ? item.description.es
                            : lang === 'cat'
                              ? item.description.cat
                              : item.description.en}
                    </p>
                    <div className="flex flex-row gap-2">
                        {item.technologies.map((tech, techIndex) => (
                            <div className="group relative" key={techIndex}>
                                <li
                                    className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                                >
                                    <tech.icon
                                        className={`h-5 w-5 md:h-10 md:w-10 ${tech.color}`}
                                    />
                                </li>
                                <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                                <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                                    {tech.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
