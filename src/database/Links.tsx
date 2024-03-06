import { v4 as uuidv4 } from 'uuid'
import { IoMdHome, IoIosApps } from 'react-icons/io'
import { FaUserGear } from 'react-icons/fa6'
import { MdWork, MdConnectWithoutContact } from 'react-icons/md'

export const links = [
    {
        id: uuidv4(),
        href: '#home',
        text: 'Home',
        text_es: 'Inicio',
        text_cat: 'Inici',
        icon: <IoMdHome />,
    },
    {
        id: uuidv4(),
        href: '#projects',
        text: 'Projects',
        text_es: 'Proyectos',
        text_cat: 'Projectes',
        icon: <IoIosApps />,
    },
    {
        id: uuidv4(),
        href: '#skills',
        text: 'Skills',
        text_es: 'Habilidades',
        text_cat: 'Habilitats',
        icon: <FaUserGear />,
    },
    {
        id: uuidv4(),
        href: '#experience',
        text: 'Experience',
        text_es: 'Experiencia',
        text_cat: 'Experiència',
        icon: <MdWork />,
    },
    {
        id: uuidv4(),
        href: '#contact',
        text: 'Contact',
        text_es: 'Contacto',
        text_cat: 'Contacte',
        icon: <MdConnectWithoutContact />,
    },
]
