import { FaChartArea } from 'react-icons/fa'
import {
    SiAirtable,
    SiAuth0,
    SiAxios,
    SiExpress,
    SiFirebase,
    SiJsonwebtokens,
    SiMongoose,
    SiNetlify,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiStripe,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

import Arcadion from '../images/arcadion.png'
import GitUsers from '../images/github_users.png'
import MernEstate from '../images/mern_estate.png'
import Jobify from '../images/mern_jobify.png'
import Auth from '../images/next_js_auth.png'

export const projects = [
    {
        id: 1,
        title: 'Next.js Auth',
        description:
            "A basic login site made for playing around with Next.js auth API. It hooks up with different platforms like Github and Google, plus it's got 2FA and email checks, along with roles for different users.",
        description_es:
            'Un sitio de inicio de sesión básico hecho para jugar con la API de autenticación de Next.js. Se conecta con diferentes plataformas como Github y Google, además de tener verificación en dos pasos y verificación de correo electrónico, junto con roles para diferentes usuarios.',
        description_cat:
            "Un lloc web d'inici de sessió bàsic fet per jugar amb l'API d'autenticació de Next.js. Es connecta amb diferents plataformes com Github i Google, a més de tenir verificació en dos passos i verificació de correu electrònic, juntament amb rols per a diferents usuaris.",
        urlWeb: 'https://auth.ximuntion.dev/',
        urlGithub: 'https://github.com/MJonny4/Next.js-Auth',
        skills: [
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Next.js',
                icon: <SiNextdotjs className="text-gray-900" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Prisma',
                icon: <SiPrisma className="text-emerald-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'TailwindCSS',
                icon: <SiTailwindcss className="text-cyan-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: '0Auth',
                icon: <SiAuth0 className="text-yellow-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'PostgreSQL',
                icon: <SiPostgresql className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Typescript',
                icon: <SiTypescript className="text-blue-500" />,
            },
        ],
        image: Auth.src,
    },
    {
        id: 2,
        title: 'Munti Estate',
        description:
            "A attractive real estate site for renting and selling properties, all powered by the MERN stack. It's got user logins, roles, and permissions, plus handy search and filter options to help you find your dream home.",
        description_es:
            'Un atractivo sitio de bienes raíces para alquilar y vender propiedades, todo impulsado por la pila MERN. Tiene inicios de sesión de usuario, roles y permisos, además de prácticas opciones de búsqueda y filtro para ayudarlo a encontrar la casa de sus sueños.',
        description_cat:
            "Un atractiu lloc web d'immobles per llogar i vendre propietats, tot alimentat per la pila MERN. Té inicis de sessió d'usuari, rols i permisos, a més d'opcions pràctiques de cerca i filtre per ajudar-vos a trobar la vostra llar ideal.",
        urlWeb: 'https://mern-estate-nug9.onrender.com/',
        urlGithub: 'https://github.com/MJonny4/M.E.R.N-Real-Estate',
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
                name: 'JWT',
                icon: <SiJsonwebtokens className="text-red-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Mongoose',
                icon: <SiMongoose className="text-green-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'React',
                icon: <SiReact className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Redux',
                icon: <SiRedux className="text-purple-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Router',
                icon: <SiReactrouter className="text-blue-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'Firebase',
                icon: <SiFirebase className="text-yellow-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'TailwindCSS',
                icon: <SiTailwindcss className="text-cyan-500" />,
            },
        ],
        image: MernEstate.src,
    },
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
    {
        id: 5,
        title: 'Github Users Showcase',
        description:
            'A neat website displaying GitHub users and their repositories. It includes OAuth authentication for secure logins and a nifty chart to highlight the most popular programming languages used by each user.',
        urlWeb: 'https://github-users-im.netlify.app/login',
        description_es:
            'Un sitio web ordenado que muestra usuarios de GitHub y sus repositorios. Incluye autenticación OAuth para iniciar sesión de forma segura y un gráfico ingenioso para resaltar los lenguajes de programación más populares utilizados por cada usuario.',
        description_cat:
            'Una web ordenat que mostra usuaris de GitHub i els seus repositoris. Inclou autenticació OAuth per iniciar sessió de forma segura i un gràfic enginyós per ressaltar els llenguatges de programació més populars utilitzats per cada usuari.',

        urlGithub: 'https://github.com/MJonny4/Github-Users-Showcase',
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
                name: 'OAuth',
                icon: <SiAuth0 className="text-yellow-500" />,
            },
            {
                id: crypto.getRandomValues(new Uint32Array(1))[0],
                name: 'FusionCharts',
                icon: <FaChartArea className="text-green-500" />,
            },
        ],
        image: GitUsers.src,
    },
]
