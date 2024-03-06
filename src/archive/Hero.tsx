import { socials } from '../database/Socials'
import Foto from '../images/Foto.png'
import type { TSocial } from '../types/types'
import { ionDesc } from '../database/Works'

type HeroProps = {
    lang: string
}

export default function Hero({ lang }: HeroProps) {
    return (
        <section
            id="home"
            className="flex w-full flex-col justify-center gap-4 rounded-lg bg-neutral-100 bg-opacity-50 p-5 shadow-md md:mt-6 lg:mt-16 lg:flex-row lg:gap-14 dark:bg-neutral-900"
        >
            <article className="order-2 mx-auto mt-5 flex w-10/12 flex-col items-center justify-center gap-y-2 text-left lg:order-1 lg:mx-0 lg:w-1/2">
                <h2 className="w-full text-xl lg:text-4xl dark:lg:shadow-sm">
                    Ion Munteanu
                </h2>
                <h3 className="w-full text-lg text-amber-400 lg:text-2xl dark:text-primary dark:lg:shadow-sm">
                    Full Stack Developer
                </h3>
                <p className="mt-2 w-full text-xs md:text-base dark:shadow-sm">
                    {lang === 'es'
                        ? ionDesc.description_es
                        : lang === 'cat'
                          ? ionDesc.description_cat
                          : ionDesc.description}
                </p>
                <div className="w-full">
                    <ul className="mt-5 flex flex-row gap-4">
                        {socials.map((social: TSocial) => (
                            <li
                                key={social.id}
                                className={`group relative text-3xl`}
                            >
                                <a
                                    href={social.url}
                                    title={social.name}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer transition duration-300 ease-in-out hover:animate-pulse hover:text-amber-400 dark:hover:text-primary"
                                    download={
                                        social.name === 'CV'
                                            ? social.url
                                                  .toString()
                                                  .split('/')
                                                  .pop()
                                            : undefined
                                    }
                                >
                                    {social.icon}
                                </a>
                                <span className="absolute right-2.5 top-7 h-3 w-3 rotate-45 transform border-r border-t border-zinc-200 bg-zinc-300 opacity-0 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900"></span>
                                <span className="absolute left-1/2 top-8 -translate-x-1/2 transform rounded-md border border-zinc-200 bg-zinc-300  px-2 py-1 text-xs opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                                    {social.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
            <article className="order-1 flex items-center justify-center lg:order-2">
                <img
                    src={Foto.src}
                    alt="Ion Munteanu"
                    className="h-52 w-52 rounded-full border-2 border-amber-400 object-cover shadow-md md:h-[18rem] md:w-[18rem] dark:border-primary"
                />
            </article>
        </section>
    )
}
