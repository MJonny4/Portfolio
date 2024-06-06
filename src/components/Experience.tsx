import Work from '../archive/Work'
import { works } from '../database/Works'

export default function Experience({ lang }: { lang: string }) {
    return (
        <section
            className={`rounded-xl bg-gray-100 px-2 shadow-lg md:p-4 dark:bg-neutral-900`}
        >
            <h2 className="mb-5 text-left text-xl text-amber-400 md:text-3xl dark:text-primary">
                {lang === 'es'
                    ? 'Experiencia'
                    : lang === 'cat'
                      ? 'Experiència'
                      : 'Experience'}
            </h2>
            {works.map((work) => {
                work.lang = lang
                return <Work key={work.id} {...work} />
            })}
        </section>
    )
}
