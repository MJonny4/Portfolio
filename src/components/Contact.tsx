import Mail from '../images/mail.svg'

import { BiMailSend } from 'react-icons/bi'

export default function Contact({ lang }: { lang: string }) {
    return (
        <section className="rounded-xl bg-neutral-100 p-4 shadow-lg dark:bg-neutral-900">
            <h2 className="mb-8 text-left text-xl text-amber-400 md:text-3xl dark:text-primary">
                {lang === 'es'
                    ? 'Contacto'
                    : lang === 'cat'
                      ? 'Contacte'
                      : 'Contact'}
            </h2>
            <article className="relative mx-auto h-60 w-60 md:h-80 md:w-80">
                <a
                    href="mailto:ion2000m@gmail.com"
                    title="Email"
                    rel="nofollow"
                >
                    <img
                        src={Mail.src}
                        alt="Mail"
                        className="h-60 w-60 rounded-lg border border-neutral-200 p-4 shadow-lg md:h-80 md:w-80 dark:border-neutral-800"
                    />
                </a>
                <aside className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-tertiary p-3">
                    <a
                        href="mailto:ion2000m@gmail.com"
                        className="text-amber-400 dark:text-primary"
                        title="Email"
                        rel="nofollow"
                    >
                        <BiMailSend className="text-3xl md:text-6xl" />
                    </a>
                </aside>
            </article>
        </section>
    )
}
