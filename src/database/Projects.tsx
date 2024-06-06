import { FaChartArea } from 'react-icons/fa'
import {
    SiAirtable,
    SiAxios,
    SiExpress,
    SiJsonwebtokens,
    SiMongoose,
    SiNetlify,
    SiNodedotjs,
    SiReact,
    SiReactrouter,
    SiStripe,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

import Arcadion from '../images/arcadion.png'
import Jobify from '../images/mern_jobify.png'

export const projects = [
    {
        id: 3,
        title: 'Jobify',
        description:
            "Made using the MERN Stack! It's sleek and easy to use. You can join up, log in, and check out job listings with no fuss. Employers can throw up job posts quick, while job seekers can hunt and apply with just a couple of clicks.",
        description_es:
            '¡Hecho usando la pila MERN! Es elegante y fácil de usar. Puede unirse, iniciar sesión y consultar ofertas de trabajo sin problemas. Los empleadores pueden publicar rápidamente ofertas de trabajo, mientras que los buscadores de empleo pueden buscar y postularse con solo un par de clics.',
        description_cat:
            "Fet amb la pila MERN! És elegant i fàcil d'utilitzar. Pots unir-te, iniciar sessió i consultar ofertes de treball sense problemes. Els empleadors poden publicar ràpidament ofertes de treball, mentre que els cercadors de feina poden buscar i postular-se amb només un parell de clics.",
        urlWeb: 'https://mern1-avz0.onrender.com',
        urlGithub: 'https://github.com/MJonny4/M.E.R.N-Jobs',
        skills: [
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'TypeScript',
                icon: <SiTypescript className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Node.js',
                icon: <SiNodedotjs className="text-green-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Express',
                icon: <SiExpress className="text-gray-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Axios',
                icon: <SiAxios className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Mongoose',
                icon: <SiMongoose className="text-green-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'JWT',
                icon: <SiJsonwebtokens className="text-red-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'React',
                icon: <SiReact className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Router',
                icon: <SiReactrouter className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Styled-Components',
                icon: <SiStyledcomponents className="text-pink-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Recharts',
                icon: <FaChartArea className="text-green-500" />,
            },
        ],
        image: Jobify.src,
    },
    {
        id: 4,
        title: 'Arcadion',
        description:
            'A fun retro console shop made using React, Airtable, and Stripe. You can add items to your cart, check out, pay securely, and log in - all on a site that looks great on any device.',
        description_es:
            'Una divertida tienda de consolas retro hecha con React, Airtable y Stripe. Puede agregar artículos a su carrito, pagar de forma segura e iniciar sesión, todo en un sitio que se ve genial en cualquier dispositivo.',
        description_cat:
            'Una divertida botiga de consoles retro feta amb React, Airtable i Stripe. Pots afegir articles al teu carret, pagar de forma segura i iniciar sessió, tot en un lloc que es veu genial en qualsevol dispositiu.',
        urlWeb: 'https://arcadion.netlify.app',
        urlGithub: 'https://github.com/MJonny4/Arcadion-E-Commerce/',
        skills: [
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'TypeScript',
                icon: <SiTypescript className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'React',
                icon: <SiReact className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Axios',
                icon: <SiAxios className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Stripe',
                icon: <SiStripe className="text-indigo-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Airtable',
                icon: <SiAirtable className="text-amber-400" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Router',
                icon: <SiReactrouter className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'TailwindCSS',
                icon: <SiTailwindcss className="text-cyan-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Styled-Components',
                icon: <SiStyledcomponents className="text-pink-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Netlify',
                icon: <SiNetlify className="text-emerald-500" />,
            },
        ],
        image: Arcadion.src,
    },
]
