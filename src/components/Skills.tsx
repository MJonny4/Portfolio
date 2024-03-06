import Tech from '../stack/Tech'

export default function Skills({ lang }: { lang: string }) {
    return (
        <section className="rounded-xl bg-gray-100 shadow-lg dark:bg-neutral-900">
            <h2 className="pl-4 pt-4 text-left text-xl text-amber-400 md:text-3xl dark:text-primary">
                {lang === 'es'
                    ? 'Habilidades'
                    : lang === 'cat'
                      ? 'Habilitats'
                      : 'Skills'}
            </h2>
            <Tech />
        </section>
    )
}
