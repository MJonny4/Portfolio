import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import closeSvg from '../../images/close.svg'
import githubImg from '../../images/github.svg'
import webImg from '../../images/web.svg'

const Project = ({ project, desc, web, github }) => {
    const [isOpen, setIsOpen] = useState(false)
    const cardRef = React.useRef(null)

    useGSAP(() => {
        gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
    }, [])

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <article
                ref={cardRef}
                className='bg-primary dark:bg-dark-primary shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out'
                onClick={handleOpen}
            >
                <img src={project.image} alt={project.title} className='w-full h-40 object-cover rounded-lg' />
                <h2 className='text-xl font-bold text-primary dark:text-primary-dark mt-2'>{project.title}</h2>
                <div className='flex flex-wrap items-center justify-start mt-2'>
                    {project.skills.map((skill) => (
                        <div key={skill.id} className='flex items-center justify-center mr-2 mb-2'>
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className={`size-4`}
                                style={{ filter: `drop-shadow(0 0px 1px ${skill.color})` }}
                            />
                            <span className='text-sm ml-2 text-black/90 dark:text-white/90'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </article>
            {isOpen && <ProjectModal project={project} onClose={handleClose} desc={desc} web={web} github={github} />}
        </>
    )
}

const ProjectModal = ({
    project,
    onClose,
    desc,

    web,
    github,
}) => {
    const modalRef = React.useRef(null)
    const contentRef = React.useRef(null)

    useGSAP(() => {
        gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        gsap.fromTo(
            contentRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, delay: 0.2, ease: 'power2.out' },
        )
    }, [])

    const handleClose = () => {
        gsap.to(contentRef.current, { y: -50, opacity: 0, duration: 0.3, ease: 'power2.in' })
        gsap.to(modalRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.2,
            ease: 'power2.in',
            onComplete: onClose,
        })
    }

    return (
        <div
            ref={modalRef}
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'
            onClick={handleClose}
        >
            <div
                ref={contentRef}
                className='bg-white/95 dark:bg-dark-section rounded-lg p-8 max-w-4xl mx-5 '
                onClick={(e) => e.stopPropagation()}
            >
                <button className='absolute top-4 right-4' onClick={handleClose}>
                    <img src={closeSvg.src} alt='Close' className='size-6 dark:drop-shadow-[0_0px_1px_rgba(255,255,255,1)]' />
                </button>
                <h2 className='text-2xl font-bold text-primary dark:text-primary-dark'>{project.title}</h2>
                <div className='flex flex-wrap items-center justify-start mt-2 gap-1'>
                    {project.skills.map((skill) => (
                        <div key={skill.id} className='flex items-center justify-center mr-2 mb-2'>
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className='size-4'
                                style={{ filter: `drop-shadow(0 0px 1px ${skill.color})` }}
                            />
                            <span className='text-sm ml-2 text-secondary dark:text-white/90'>{skill.name}</span>
                        </div>
                    ))}
                </div>
                {/* desc */}
                <div className='mt-4'>
                    <p className='text-gray-800 dark:text-gray-300 mt-2'>{desc || '-'}</p>
                </div>
                <div className='flex items-center justify-start mt-4'>
                    <a
                        href={project.urlWeb}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary dark:text-primary-dark hover:underline flex items-center gap-1'
                    >
                        <img src={webImg.src} alt='Web' className='size-6' />
                        {web}
                    </a>
                    <a
                        href={project.urlGithub}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary dark:text-primary-dark hover:underline ml-4 flex items-center gap-1'
                    >
                        <img src={githubImg.src} alt='Github' className='size-5' />
                        {github}
                    </a>
                </div>
                <img src={project.image} alt={project.title} className='w-full h-auto mt-4 rounded-lg' />
            </div>
        </div>
    )
}

export default Project
