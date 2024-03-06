import Hero from '../archive/Hero'
import Navbar from '../archive/Navbar'

type HeaderProps = {
    lang: string
}

export default function Header({ lang }: HeaderProps) {
    return (
        <>
            <Navbar lang={lang} />
            <Hero lang={lang} />
        </>
    )
}
