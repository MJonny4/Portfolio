import { BiRightArrow } from 'react-icons/bi'
import { FaLaravel, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6'
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

export default function Temp({ lang }: { lang: string }) {
    return (
        <>
            <p className="mb-4 inline-flex items-center gap-2">
                <BiRightArrow className="h-5 w-5 text-primary" />

                {lang === 'es'
                    ? 'Aplicación para gestionar tus tareas diarias, metas y finanzas.'
                    : lang === 'cat'
                      ? 'Aplicació per gestionar les teves tasques diàries, metes i finances.'
                      : 'Web app to manage your daily tasks, goals and finances.'}
                <div className="group relative" key="react">
                    <li
                        className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                    >
                        <FaReact className="h-10 w-10 text-blue-500" />
                    </li>
                    <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                    <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                        React
                    </span>
                </div>
                <div className="group relative" key="nodejs">
                    <li
                        className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                    >
                        <FaNodeJs className="h-10 w-10 text-green-500" />
                    </li>
                    <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                    <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                        Node.js
                    </span>
                </div>
                <div className="group relative" key="mongodb">
                    <li
                        className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                    >
                        <SiMongodb className="h-10 w-10 text-green-500" />
                    </li>
                    <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                    <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                        MongoDB
                    </span>
                </div>
            </p>

            <p className="mb-4 inline-flex items-center gap-2">
                <BiRightArrow className="h-5 w-5 text-primary" />
                {lang === 'es'
                    ? 'Agencia de viajes con una forma moderna de reservar tu próximo viaje.'
                    : lang === 'cat'
                      ? 'Agència de viatges amb una forma moderna de reservar el teu proper viatge.'
                      : 'Travel agency with a modern way to book your next trip.'}
                <span className="inline-flex items-center gap-2">
                    <div className="group relative" key="astro">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiAstro className="h-10 w-10 text-orange-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Astro
                        </span>
                    </div>
                    <div className="group relative" key="python">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <FaPython className="h-10 w-10 text-blue-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Python
                        </span>
                    </div>
                    <div className="group relative" key="fastapi">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiFastapi className="h-10 w-10 text-green-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            FastAPI
                        </span>
                    </div>
                    <div className="group relative" key="postgresql">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiPostgresql className="h-10 w-10 text-blue-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            PostgreSQL
                        </span>
                    </div>
                </span>
            </p>

            <p className="mb-4 inline-flex items-center gap-2">
                <BiRightArrow className="h-5 w-5 text-primary" />

                {lang === 'es'
                    ? 'Sistema de gestión hospitalaria para mejorar la atención al paciente y el flujo de trabajo del médico.'
                    : lang === 'cat'
                      ? 'Sistema de gestió hospitalària per millorar l’atenció al pacient i el flux de treball del metge.'
                      : "Hospital management system to improve patient care and doctor's workflow."}
                <span className="inline-flex items-center gap-2">
                    <div className="group relative" key="nextjs">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiNextdotjs className="h-10 w-10 text-black" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Next.js
                        </span>
                    </div>
                    <div className="group relative" key="firebase">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiFirebase className="h-10 w-10 text-yellow-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Firebase
                        </span>
                    </div>
                </span>
            </p>

            <p className="mb-4 inline-flex items-center gap-2">
                <BiRightArrow className="h-5 w-5 text-primary" />
                {lang === 'es'
                    ? 'Sitio web de apuestas de fútbol en línea.'
                    : lang === 'cat'
                      ? 'Lloc web d’apostes de futbol en línia.'
                      : 'Online football betting website.'}
                <span className="inline-flex items-center gap-2">
                    <div className="group relative" key="laravel">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <FaLaravel className="h-10 w-10 text-red-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Laravel
                        </span>
                    </div>
                    <div className="group relative" key="alpinedotjs">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiAlpinedotjs className="h-10 w-10 text-blue-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Alpine.js
                        </span>
                    </div>
                    <div className="group relative" key="livewire">
                        <li
                            className={`list-none rounded-lg bg-neutral-300 p-2 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-125 hover:text-tertiary dark:bg-neutral-700 dark:text-neutral-300`}
                        >
                            <SiLivewire className="h-10 w-10 text-pink-500" />
                        </li>
                        <span className="absolute right-3.5 top-10 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                        <span className="absolute left-1/2 top-11 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300 px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                            Livewire
                        </span>
                    </div>
                </span>
            </p>
        </>
    )
}
