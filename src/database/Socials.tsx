import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import CV_ES from '../pdf/CV_Ion_Munteanu_ES.pdf'
import CV_EN from '../pdf/CV_Ion_Munteanu_EN.pdf'

export const socials = [
    {
        id: uuidv4(),
        name: 'GitHub',
        url: 'https://github.com/MJonny4',
        icon: <FaGithub />,
    },
    {
        id: uuidv4(),
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/imunteanu04/',
        icon: <FaLinkedin />,
    },
    {
        id: uuidv4(),
        name: 'CV',
        url_es: CV_ES,
        url_en: CV_EN,
        icon: <BsFillFileEarmarkPdfFill />,
    },
]
