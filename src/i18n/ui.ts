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
            'Web app to manage your personal finances. Record income and expenses, and get interactive charts to analyze your spending patterns. Generate detailed statistics and create custom budgets with alerts to keep your expenses under control. A comprehensive tool to optimize your money.',
        'projects.brainwave':
            'Brainwave is an AI-powered chat web app. With an intuitive and appealing interface, it allows smooth communication with a virtual assistant. Developed from scratch, this app showcases my ability to create engaging designs using cutting-edge web technologies.',
        'projects.appleiphone15':
            "Recreated the iPhone 15 Pro presentation page to showcase my frontend skills. It's got a sleek design, cool 3D models, and smooth animations. I paid attention to every detail to make it look and feel just like Apple's original.",
        'projects.jobify':
            'Comprehensive web platform for job search and posting. Developed using the MERN stack (MongoDB, Express, React, Node.js), it offers a smooth and engaging user experience. Job seekers can explore job listings and apply easily, while employers can manage their postings through a dedicated dashboard. With a secure authentication system, Jobify simplifies the hiring process and connection between talent and opportunities.',
        'projects.arcadion':
            "E-commerce website specializing in retro console sales. With a focus on usability and aesthetics, I've created an intuitive and appealing shopping experience. Users can browse a wide selection of classic consoles, view product details, and easily add them to their shopping cart. Additionally, I implemented a secure authentication system to ensure reliable transactions. The clean and modern design, combined with solid functionality, makes this site the go-to destination for retro console enthusiasts.",
        'project.web': 'View website',
        'project.github': 'View source code',

        'works.1':
            'As a Customer Service worker, I provided solutions to customer issues, utilising my programming skills, particularly in the Front-end environment.',
        'works.2':
            'A Full Stack JavaScript Developer Bootcamp, where I learned everything from the basics of programming to the most advanced topics in web development using front-end and back-end javascript technologies.',
        'works.3':
            'Handled backend and frontend tasks seamlessly, mainly using Laravel to develop a web app for efficient store maintenance and issue resolution.',
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
            'Hola, soy Ion, un Desarrollador Web Full Stack. Me encanta construir todo tipo de aplicaciones ━ ya sean simples, elegantes, para la web o móviles. La tecnología es lo mío, y constantemente busco formas geniales de mejorar mis habilidades y conocimientos.',
        'hero.url': CV_ES,

        'projects.finance':
            'Web app para administrar tus finanzas personales. Registra ingresos y gastos, y obtén gráficos interactivos para analizar tus patrones de consumo. Genera estadísticas detalladas y crea presupuestos personalizados con alertas para mantener tus gastos bajo control. Una herramienta completa para optimizar tu dinero.',
        'projects.brainwave':
            'Aplicación web de chat impulsada por inteligencia artificial, Con una interfaz intuitiva y atractiva, permite una comunicación fluida con un asistente virtual. Desarrollada desde cero, esta aplicación demuestra mi capacidad para crear diseños envolventes utilizando tecnologías web de vanguardia.',
        'projects.appleiphone15':
            'Recreé la página de presentación del iPhone 15 Pro para mostrar mis habilidades de frontend. Tiene un diseño elegante, modelos 3D geniales y animaciones suaves. Presté atención a cada detalle para que se vea y se sienta igual que el original de Apple.',
        'projects.jobify':
            'Plataforma web integral para la búsqueda y publicación de empleos. Desarrollada utilizando el stack MERN (MongoDB, Express, React, Node.js), ofrece una experiencia de usuario fluida y atractiva. Los solicitantes pueden explorar ofertas laborales y postularse fácilmente, mientras que los empleadores pueden gestionar sus anuncios a través de un panel de control dedicado. Con un sistema de autenticación seguro, Jobify simplifica el proceso de contratación y conexión entre talento y oportunidades.',
        'projects.arcadion':
            'Web de comercio electrónico especializado en la venta de consolas retro. Con un enfoque en la usabilidad y la estética, he creado una experiencia de compra intuitiva y atractiva. Los usuarios pueden explorar una amplia selección de consolas clásicas, ver detalles de los productos y agregarlos fácilmente a su carrito de compras. Además, implementé un sistema de autenticación seguro para garantizar transacciones confiables. El diseño limpio y moderno, combinado con una funcionalidad sólida, convierte a este sitio en el destino ideal para los entusiastas de las consolas retro.',
        'project.web': 'Ver sitio web',
        'project.github': 'Ver código fuente',

        'works.1':
            'Como trabajador de Atención al Cliente, proporcioné soluciones a problemas de los clientes, utilizando mis habilidades de programación, especialmente en el entorno Front-end.',
        'works.2':
            'Bootcamp de Desarrollador Full Stack JavaScript, donde aprendí desde lo básico de la programación hasta los temas más avanzados en desarrollo web utilizando tecnologías javascript de front-end y back-end.',
        'works.3':
            'Manejé tareas de backend y frontend sin problemas, utilizando principalmente Laravel para desarrollar una aplicación web para el mantenimiento eficiente de tiendas y la resolución de problemas.',
    },
} as const
