import type { TWork } from '../types/types'

export default function Work({
    imgSrc,
    title,
    company,
    date,
    description,
    description_es,
    description_cat,
    bgColor,
    lang,
}: TWork) {
    return (
        <article className="mb-5 flex flex-col md:flex-row">
            <aside className="flex flex-col items-start gap-4 md:w-[8%]">
                <div className="flex flex-row items-center gap-4">
                    <img
                        alt={company}
                        src={imgSrc}
                        className={`h-12 w-12 rounded-full object-scale-down md:h-16 md:w-16 ${
                            bgColor || 'bg-white'
                        } shadow-lg`}
                    />
                    <div className="md:hidden">
                        <p className="text-base sm:text-lg">{title}</p>
                        <p className="text-sm text-gray-900 dark:text-gray-400">
                            {company}
                        </p>
                        <p className="text-xs text-gray-800 dark:text-gray-300">
                            {date}
                        </p>
                    </div>
                </div>
                <p className="p-2 pt-0 text-[0.7rem] sm:text-xs md:hidden">
                    {lang === 'es'
                        ? description_es
                        : lang === 'cat'
                          ? description_cat
                          : description}
                </p>
            </aside>
            <div className="hidden flex-col md:flex md:w-[92%]">
                <p className="text-lg sm:text-xl md:block md:text-lg lg:text-2xl">
                    {title}
                </p>
                <div className="flex-col md:flex md:flex-row md:justify-between">
                    <p className="text-gray-600 dark:text-gray-400">
                        {company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{date}</p>
                </div>
                <p className="mx-2 mb-2 mt-2 text-sm sm:text-base md:mx-0 md:block">
                    {lang === 'es'
                        ? description_es
                        : lang === 'cat'
                          ? description_cat
                          : description}
                </p>
            </div>
        </article>
    )
}
