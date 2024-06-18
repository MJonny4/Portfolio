export default function Work({ id, img, title, company, date, description }) {
    return (
        <article className='mb-5 flex flex-col lg:flex-row'>
            <aside className='flex flex-col items-start gap-4 lg:w-[8%]'>
                <div className='flex flex-row items-center gap-4'>
                    <img
                        alt={company}
                        src={img}
                        className={`h-12 w-12 rounded-full object-scale-down shadow-lg bg-accent/90 lg:h-16 lg:w-16`}
                    />
                    <div className='lg:hidden'>
                        <p className='text-base sm:text-lg'>{title}</p>
                        <p className='text-sm text-gray-900 dark:text-gray-400'>{company}</p>
                        <p className='text-xs text-gray-800 dark:text-gray-300'>{date}</p>
                    </div>
                </div>
                <p className='p-2 pt-0 text-[0.7rem] sm:text-xs lg:hidden'>{description}</p>
            </aside>
            <div className='hidden flex-col lg:flex lg:w-[92%]'>
                <p className='text-lg sm:text-xl lg:block lg:text-2xl'>{title}</p>
                <div className='flex-col lg:flex lg:flex-row lg:justify-between'>
                    <p className='text-gray-600 dark:text-gray-400'>{company}</p>
                    <p className='text-gray-700 dark:text-gray-300'>{date}</p>
                </div>
                <p className='mx-2 mb-2 mt-2 text-sm sm:text-base lg:mx-0 lg:block'>{description}</p>
            </div>
        </article>
    )
}
