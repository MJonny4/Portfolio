import type { TWork } from '../types/types'

import Esplai from '../images/esplai.png'
import OptimaRetail from '../images/optimaretail.png'
import Trilogi from '../images/trilogi.png'

export const works: TWork[] = [
    {
        id: 't2Esplai',
        imgSrc: OptimaRetail.src,
        title: 'Web Application Developer',
        company: 'Optima Retail',
        date: '03/2024 - Present',
        description:
            'Handled backend and frontend tasks in two projects, mainly using Laravel. Developed a web app for store maintenance, streamlining issue resolution.',
        description_es:
            'Manejé tareas de backend y frontend en dos proyectos, principalmente utilizando Laravel. Desarrollé una aplicación web para el mantenimiento de tiendas, agilizando la resolución de problemas.',
        description_cat:
            'Vaig gestionar tasques de backend i frontend en dos projectes, principalment utilitzant Laravel. Vaig desenvolupar una aplicació web per al manteniment de botigues, agilitzant la resolució de problemes.',
        bgColor: 'bg-sky-400',
    },
    {
        id: 't2Esplai',
        imgSrc: Esplai.src,
        title: 'Full Stack Developer',
        company: 'Fundación Esplai',
        date: '01/2024 - 03/2024',
        description:
            'A Full Stack JavaScript Developer Bootcamp, where I am learning everything from the basics of programming to the most advanced topics in web development using front-end and back-end javascript technologies.',
        description_es:
            'Bootcamp de Desarrollador Full Stack JavaScript, donde estoy aprendiendo desde lo más básico de la programación hasta los temas más avanzados en desarrollo web utilizando tecnologías de front-end y back-end en javascript.',
        description_cat:
            'Bootcamp de Desenvolupador Full Stack JavaScript, on estic aprenent des del més bàsic de la programació fins als temes més avançats en desenvolupament web utilitzant tecnologies de front-end i back-end en javascript.',
        bgColor: 'bg-red-500',
    },
    {
        id: 't1Trilogi',
        imgSrc: Trilogi.src,
        title: 'Frontend Developer',
        company: 'Trilogi - The eCommerce Agency',
        date: '07/2022 - 02/2023',
        description:
            'As a Customer Service worker, I provided solutions to customer issues, utilising my programming skills, particularly in the Front-end environment.',
        description_es:
            'Como trabajador de Atención al Cliente, proporcioné soluciones a los problemas de los clientes, utilizando mis habilidades de programación, especialmente en el entorno Front-end.',
        description_cat:
            "Com a treballador d'Atenció al Client, vaig proporcionar solucions als problemes dels clients, utilitzant les meves habilitats de programació, especialment en l'entorn Front-end.",
    },
]

export const ionDesc = {
    id: 1337,
    description: `Hey there, I'm Ion, a Full Stack Web Developer. I love
    building all kinds of apps ━ whether they're simple, fancy,
    for the web, or mobile. Always on the lookout for new
    challenges and chances to learn and have fun. Technology's
    my thing, and I'm constantly finding cool ways to level up
    my skills and knowledge.`,
    description_es: `¡Hola! Soy Ion, un Desarrollador Web Full Stack. Me encanta construir todo tipo de aplicaciones, ya sean simples, sofisticadas, para la web o móviles. Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y divertirme. La tecnología es mi pasión y estoy constantemente buscando nuevas formas geniales de mejorar mis habilidades y conocimientos.`,
    description_cat: `Hola! Sóc en Ion, un Desenvolupador Web Full Stack. M'encanta construir tot tipus d'aplicacions ━ ja siguin senzilles, sofisticades, per a la web o mòbils. Sempre estic a la recerca de nous reptes i oportunitats per aprendre i divertir-me. La tecnologia és la meva passió i estic constantment buscant noves formes genials de millorar les meves habilitats i coneixements.`,
}
