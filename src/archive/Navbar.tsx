import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import {
    IoIosCloseCircle,
    IoIosMenu,
    IoIosMoon,
    IoIosSunny,
} from 'react-icons/io'
import { IoLanguage } from 'react-icons/io5'
import { links } from '../database/Links'
import type { TLink } from '../types/types'

type NavbarProps = {
    lang: string
}

export default function Navbar({ lang }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState('dark')

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    useEffect(() => {
        if (theme === 'dark') {
            document.body.setAttribute('data-mode', 'dark')
        } else {
            document.body.setAttribute('data-mode', 'light')
        }
    }, [theme])

    return (
        <nav className="border-zinc-200 md:block md:h-14 md:w-full md:border md:bg-zinc-200 md:shadow-lg lg:mt-5 lg:w-auto lg:rounded-2xl dark:md:border-zinc-800 dark:md:bg-zinc-900">
            <div
                onClick={handleClick}
                className="fixed left-4 top-2 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-gray-300 md:hidden dark:bg-zinc-800"
            >
                <button
                    onClick={handleClick}
                    className="text-2xl"
                    aria-label="Menu"
                    title="Menu"
                >
                    {isOpen ? <IoIosCloseCircle /> : <IoIosMenu />}
                </button>
            </div>
            <ul
                className={`${
                    isOpen ? 'flex' : 'hidden'
                } fixed left-0 top-0 z-40 h-screen w-screen flex-col gap-2 self-center bg-zinc-100 pt-20 md:hidden dark:bg-zinc-900`}
            >
                {links.map((link: TLink, index) => (
                    <li
                        key={link.id}
                        className="flex h-14 cursor-pointer items-center justify-center border from-[#C01432] to-[#240B34] shadow-md transition duration-300 ease-out-expo hover:border-b hover:border-primary hover:bg-gradient-to-r hover:text-primary md:hidden"
                        onClick={handleClick}
                    >
                        <a
                            href={link.href}
                            className="w-full text-center text-lg font-bold"
                            title={link.text}
                            rel="nofollow"
                            tabIndex={index}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
                <li
                    className="flex h-14 cursor-pointer items-center justify-center border from-[#C01432] to-[#240B34] shadow-md transition duration-300 ease-out-expo hover:border-b hover:border-primary hover:bg-gradient-to-r hover:text-primary md:hidden"
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'dark' ? (
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2"
                            title="Theme"
                        >
                            <IoIosSunny className="text-2xl" />
                        </a>
                    ) : (
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2"
                            title="Theme"
                        >
                            <IoIosMoon className="text-2xl" />
                        </a>
                    )}
                </li>
                <Dropdown
                    lang={lang}
                    clss={`flex h-14 cursor-pointer items-center justify-center border from-[#C01432] to-[#240B34] shadow-md transition duration-300 ease-out-expo hover:border-b hover:border-primary hover:bg-gradient-to-r hover:text-primary md:hidden`}
                />
            </ul>
            <ul className="hidden h-14 w-full flex-row items-center justify-around text-sm md:flex lg:text-lg">
                {links.map((link: TLink) => (
                    <li
                        key={link.id}
                        className={`w-full cursor-pointer rounded-xl from-[#C01432] to-[#240B34] shadow-md transition duration-300 ease-out-expo hover:border-b hover:border-primary hover:bg-gradient-to-r hover:text-primary md:w-auto md:px-6 md:py-2 lg:m-1`}
                    >
                        <a
                            href={link.href}
                            className="flex flex-row items-center gap-2"
                            title={link.text}
                            rel="nofollow"
                        >
                            {link.icon}
                            {lang === 'es'
                                ? link.text_es
                                : lang === 'cat'
                                  ? link.text_cat
                                  : link.text}
                        </a>
                    </li>
                ))}
                <li
                    className="cursor-pointer rounded-xl from-[#C01432] to-[#240B34] shadow-md transition duration-300 ease-out-expo hover:border-b hover:border-primary hover:bg-gradient-to-r hover:text-primary md:w-auto md:px-6 md:py-2 lg:m-1"
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'dark' ? (
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2"
                            title="Theme"
                        >
                            <IoIosSunny className="text-2xl" />
                        </a>
                    ) : (
                        <a
                            href="#"
                            className="flex flex-row items-center gap-2"
                            title="Theme"
                        >
                            <IoIosMoon className="text-2xl" />
                        </a>
                    )}
                </li>
                <Dropdown
                    lang={lang}
                    clss={`cursor-pointer rounded-xl from-[#C01432] to-[#240B34] shadow-md transition duration-300 ease-out-expo hover:border-b hover:border-primary hover:bg-gradient-to-r hover:text-primary md:w-auto md:px-6 md:py-2 lg:m-1`}
                />
            </ul>
        </nav>
    )
}

const Dropdown = ({ lang, clss }: { lang: string; clss: string }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <li className={clss}>
                    <IoLanguage />
                </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-2000 border border-zinc-200 dark:text-white dark:md:border-zinc-800 dark:md:bg-zinc-900">
                <DropdownMenuLabel>
                    <span className="flex flex-row items-center gap-2">
                        <IoLanguage />
                        {lang === 'es'
                            ? 'Idioma'
                            : lang === 'cat'
                              ? 'Llengua'
                              : 'Language'}
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem spellCheck>
                    <a
                        href="/"
                        className="flex flex-row items-center justify-center gap-2 hover:text-primary dark:hover:text-amber-400"
                        title="English"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://flagdownload.com/wp-content/uploads/Flag_of_England_Flat_Round-64x64.png"
                            alt="Español"
                            className="h-4 w-4"
                        />
                        <p>English</p>
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a
                        href="/es"
                        className="flex flex-row items-center justify-center gap-2 hover:text-primary dark:hover:text-amber-400"
                        title="Español"
                    >
                        <img
                            src="https://flagdownload.com/wp-content/uploads/Flag_of_Spain_Flat_Round-64x64.png"
                            alt="Español"
                            className="h-4 w-4"
                        />
                        <p>Español</p>
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a
                        href="/cat"
                        className="flex flex-row items-center justify-center gap-2 hover:text-primary dark:hover:text-amber-400"
                        title="Català"
                    >
                        <img
                            src="https://cdn.icon-icons.com/icons2/1531/PNG/512/3253480-catalonia-icon-flag_106770.png"
                            alt="Español"
                            className="h-4 w-4"
                        />
                        <p>Català</p>
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
