import financePicture from '../images/projects/finance.png'
import brainwavePicture from '../images/projects/brainwave.png'
import jobifyPicture from '../images/projects/jobify.png'
import apple from '../images/projects/apple.png'
import arcadion from '../images/projects/arcadion.png'
import clerk from '../images/projects/skills/clerk.svg'
import drizzle from '../images/projects/skills/drizzle.svg'
import hono from '../images/projects/skills/hono.svg'
import nextjs from '../images/projects/skills/nextdotjs.svg'
import postgresql from '../images/projects/skills/postgresql.svg'
import reactQuery from '../images/projects/skills/reactquery.svg'
import shadcnui from '../images/projects/skills/shadcnui.svg'
import tailwind from '../images/projects/skills/tailwindcss.svg'
import typescript from '../images/projects/skills/typescript.svg'
import zod from '../images/projects/skills/zod.svg'
import react from '../images/projects/skills/react.svg'
import prettier from '../images/projects/skills/prettier.svg'
import gsap from '../images/projects/skills/gsap.png'
import threedotjs from '../images/projects/skills/threedotjs.svg'
import nodedotdotjs from '../images/projects/skills/nodedotjs.svg'
import cloudinary from '../images/projects/skills/cloudinary.svg' //#3448C5
import dotenv from '../images/projects/skills/dotenv.svg' //#ECD53F
import express from '../images/projects/skills/express.svg' //#fff
import jsonwebtokens from '../images/projects/skills/jsonwebtokens.svg' //#fff
import mongodb from '../images/projects/skills/mongodb.svg' //#47A248
import mongoose from '../images/projects/skills/mongoose.svg' //#880000
import tsnode from '../images/projects/skills/tsnode.svg' //#3178C6
import axios from '../images/projects/skills/axios.svg' //#5A29E4
import reactrouter from '../images/projects/skills/reactrouter.svg' //#CA4245
import chartdotjs from '../images/projects/skills/chartdotjs.svg' //#FF6384
import styledcomponents from '../images/projects/skills/styledcomponents.svg' //#DB7093
import stripe from '../images/projects/skills/stripe.svg' //#6772E5

export const projects = [
    {
        id: 143273,
        title: 'Finance',
        urlWeb: 'https://finance.ximuntion.dev',
        urlGithub: 'https://github.com/MJonny4/Next.js-Finance',
        skills: [
            {
                id: 146718,
                name: 'TypeScript',
                icon: typescript.src,
                color: '#3178C6',
            },
            {
                id: 146719,
                name: 'Tailwind CSS',
                icon: tailwind.src,
                color: '#06B6D4',
            },
            {
                id: 146720,
                name: 'Next.js',
                icon: nextjs.src,
                color: '#fff',
            },
            {
                id: 146721,
                name: 'PostgreSQL',
                icon: postgresql.src,
                color: '#4169E1',
            },
            {
                id: 146722,
                name: 'Shadcnui',
                icon: shadcnui.src,
                color: '#fff',
            },
            {
                id: 146723,
                name: 'React Query',
                icon: reactQuery.src,
                color: '#FF4154',
            },
            {
                id: 146724,
                name: 'Hono',
                icon: hono.src,
                color: '#E36002',
            },
            {
                id: 146725,
                name: 'Clerk',
                icon: clerk.src,
                color: '#6C47FF',
            },
            {
                id: 146726,
                name: 'Drizzle ORM',
                icon: drizzle.src,
                color: '#C5F74F',
            },
            {
                id: 146727,
                name: 'Zod',
                icon: zod.src,
                color: '#3E67B1',
            },
            {
                id: 23323211111,
                name: 'Chart.js',
                icon: chartdotjs.src,
                color: '#FF6384',
            },
        ],
        image: financePicture.src,
    },
    {
        id: 3983493,
        title: 'Brainwave',
        urlWeb: 'https://brainwave.ximuntion.dev',
        urlGithub: 'https://github.com/MJonny4/React-Brainwave',
        skills: [
            {
                id: 3983494,
                name: 'React',
                icon: react.src,
                color: '#61DAFB',
            },
            {
                id: 3983495,
                name: 'TypeScript',
                icon: typescript.src,
                color: '#3178C6',
            },
            {
                id: 3983496,
                name: 'Prettier',
                icon: prettier.src,
                color: '#F7B93E',
            },
            {
                id: 3983497,
                name: 'Tailwind CSS',
                icon: tailwind.src,
                color: '#06B6D4',
            },
        ],
        image: brainwavePicture.src,
    },
    {
        id: 38483248328,
        title: 'Apple iPhone 15',
        urlWeb: 'https://apple.ximuntion.dev',
        urlGithub: 'https://github.com/MJonny4/React-Apple',
        skills: [
            {
                id: 38483248329,
                name: 'React',
                icon: react.src,
                color: '#61DAFB',
            },
            {
                id: 38483248330,
                name: 'TypeScript',
                icon: typescript.src,
                color: '#3178C6',
            },
            {
                id: 38483248331,
                name: 'Prettier',
                icon: prettier.src,
                color: '#F7B93E',
            },
            {
                id: 38483248332,
                name: 'Tailwind CSS',
                icon: tailwind.src,
                color: '#06B6D4',
            },
            {
                id: 38483248333,
                name: 'GSAP',
                icon: gsap.src,
                color: '#88CE02',
            },
            {
                id: 38483248334,
                name: 'Three.js',
                icon: threedotjs.src,
                color: '#fff',
            },
        ],
        image: apple.src,
    },
    {
        id: 19659659065,
        title: 'Jobify',
        urlWeb: 'https://jobify.ximuntion.dev',
        urlGithub: 'https://github.com/MJonny4/M.E.R.N-Jobs',
        skills: [
            {
                id: 19659659066,
                name: 'Node.js',
                icon: nodedotdotjs.src,
                color: '#5FA04E',
            },
            {
                id: 19659659067,
                name: 'Express',
                icon: express.src,
                color: '#fff',
            },
            {
                id: 19659659068,
                name: 'TypeScript',
                icon: typescript.src,
                color: '#3178C6',
            },
            {
                id: 19659659069,
                name: 'MongoDB',
                icon: mongodb.src,
                color: '#47A248',
            },
            {
                id: 19659659070,
                name: 'Mongoose',
                icon: mongoose.src,
                color: '#880000',
            },
            {
                id: 19659659071,
                name: 'Cloudinary',
                icon: cloudinary.src,
                color: '#3448C5',
            },
            {
                id: 19659659072,
                name: 'Dotenv',
                icon: dotenv.src,
                color: '#ECD53F',
            },
            {
                id: 19659659073,
                name: 'JSON Web Tokens',
                icon: jsonwebtokens.src,
                color: '#fff',
            },
            {
                id: 19659659074,
                name: 'TypeScript Node',
                icon: tsnode.src,
                color: '#3178C6',
            },
            {
                id: 19659659075,
                name: 'React',
                icon: react.src,
                color: '#61DAFB',
            },
            {
                id: 19659659076,
                name: 'Axios',
                icon: axios.src,
                color: '#5A29E4',
            },
            {
                id: 19659659077,
                name: 'React Query',
                icon: reactQuery.src,
                color: '#FF4154',
            },
            {
                id: 19659659078,
                name: 'React Router',
                icon: reactrouter.src,
                color: '#CA4245',
            },
            {
                id: 19659659079,
                name: 'Chart.js',
                icon: chartdotjs.src,
                color: '#FF6384',
            },
            {
                id: 19659659080,
                name: 'Styled Components',
                icon: styledcomponents.src,
                color: '#DB7093',
            },
        ],
        image: jobifyPicture.src,
    },
    {
        id: 401210371,
        title: 'Arcadion',
        urlWeb: 'https://arcadion.ximuntion.dev',
        urlGithub: 'https://github.com/MJonny4/React-Arcadion-ECommerce',
        skills: [
            {
                id: 401210372,
                name: 'React',
                icon: react.src,
                color: '#61DAFB',
            },
            {
                id: 401210373,
                name: 'TypeScript',
                icon: typescript.src,
                color: '#3178C6',
            },
            {
                id: 401210374,
                name: 'React Router',
                icon: reactrouter.src,
                color: '#CA4245',
            },
            {
                id: 401210375,
                name: 'Stripe',
                icon: stripe.src,
                color: '#6772E5',
            },
            {
                id: 401210376,
                name: 'Clerk',
                icon: clerk.src,
                color: '#6C47FF',
            },
            {
                id: 401210377,
                name: 'Axios',
                icon: axios.src,
                color: '#5A29E4',
            },
            {
                id: 401210378,
                name: 'Dotenv',
                icon: dotenv.src,
                color: '#ECD53F',
            },
            {
                id: 401210379,
                name: 'Styled Components',
                icon: styledcomponents.src,
                color: '#DB7093',
            },
            {
                id: 401210380,
                name: 'Prettier',
                icon: prettier.src,
                color: '#F7B93E',
            },
        ],
        image: arcadion.src,
    },
]
