import CV_ES from '../pdf/CV_Ion_Munteanu_ES.pdf'
import CV_EN from '../pdf/CV_Ion_Munteanu_EN.pdf'

export const languages = {
    en: 'English',
    es: 'Español',
}

export const defaultLang = 'en'

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        'sections.projects': 'Projects',
        'sections.skills': 'Skills',
        'sections.experience': 'Experience',
        'sections.contact': 'Contact',

        'hero.description':
            "Hey there, I'm Ion, a Full Stack Web Developer. I love building all kinds of apps ━ whether they're simple, fancy, for the web, or mobile. Technology's my thing, and I'm constantly finding cool ways to level up my skills and knowledge.",
        'hero.url': CV_EN,

        'projects.finance':
            'Web application aiming to help users manage their finances, it has graphics, statistics, and other features to help users keep track of their expenses and incomes.',
        'projects.brainwave':
            'Brainwave is a cutting-edge AI chat application that showcases the impressive frontend development skills of its creator.',
        'projects.appleiphone15':
            "Recreated the iPhone 15 Pro presentation page to showcase my frontend skills. It's got a sleek design, cool 3D models, and smooth animations. I paid attention to every detail to make it look and feel just like Apple's original.",
        'projects.jobify':
            'Jobify is a job board web application that allows users to search for jobs and apply to them. It is made with the M.E.R.N stack and has a clean and modern design. It also has a user authentication system and a dashboard for employers to manage job postings.',
        'projects.arcadion':
            'A friendly designed ecommerce website aimed at selling retro consoles. It has a clean and modern design, user authentication, and a shopping cart system.',
        'project.web': 'View website',
        'project.github': 'View source code',

        'works.1':
            'As a Customer Service worker, I provided solutions to customer issues, utilising my programming skills, particularly in the Front-end environment.',
        'works.2':
            'A Full Stack JavaScript Developer Bootcamp, where I am learning everything from the basics of programming to the most advanced topics in web development using front-end and back-end javascript technologies.',
        'works.3':
            'Handled backend and frontend tasks in two projects, mainly using Laravel. Developed a web app for store maintenance, streamlining issue resolution.',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',

        'sections.projects': 'Proyectos',
        'sections.skills': 'Habilidades',
        'sections.experience': 'Experiencia',
        'sections.contact': 'Contacto',

        'hero.description':
            'Hola, soy Ion, un Desarrollador Web Full Stack. Me encanta construir todo tipo de aplicaciones ━ ya sean simples, elegantes, para la web o móviles. La tecnología es lo mío, y constantemente encuentro formas geniales de mejorar mis habilidades y conocimientos.',
        'hero.url': CV_ES,

        'projects.finance':
            'Aplicación web que tiene como objetivo ayudar a los usuarios a gestionar sus finanzas, cuenta con gráficos, estadísticas y otras funciones para ayudar a los usuarios a llevar un seguimiento de sus gastos e ingresos.',
        'projects.brainwave':
            'Brainwave es una aplicación de chat de IA de vanguardia que muestra las impresionantes habilidades de desarrollo frontend de su creador.',
        'projects.appleiphone15':
            'Recreé la página de presentación del iPhone 15 Pro para mostrar mis habilidades de frontend. Tiene un diseño elegante, modelos 3D geniales y animaciones suaves. Presté atención a cada detalle para que se vea y se sienta igual que el original de Apple.',
        'projects.jobify':
            'Jobify es una aplicación web de tablón de anuncios de empleo que permite a los usuarios buscar empleos y postularse a ellos. Está hecho con el stack M.E.R.N y tiene un diseño limpio y moderno. También cuenta con un sistema de autenticación de usuarios y un panel de control para los empleadores para gestionar las publicaciones de empleo.',
        'projects.arcadion':
            'Un sitio web de comercio electrónico diseñado de manera amigable con el objetivo de vender consolas retro. Tiene un diseño limpio y moderno, autenticación de usuarios y un sistema de carrito de compras.',
        'project.web': 'Ver sitio web',
        'project.github': 'Ver código fuente',

        'works.1':
            'Como trabajador de Atención al Cliente, proporcioné soluciones a problemas de los clientes, utilizando mis habilidades de programación, especialmente en el entorno Front-end.',
        'works.2':
            'Un Bootcamp de Desarrollador Full Stack JavaScript, donde estoy aprendiendo desde lo básico de la programación hasta los temas más avanzados en desarrollo web utilizando tecnologías javascript front-end y back-end.',
        'works.3':
            'Manejé tareas de backend y frontend en dos proyectos, principalmente utilizando Laravel. Desarrollé una aplicación web para el mantenimiento de tiendas, optimizando la resolución de problemas.',
    },
} as const
