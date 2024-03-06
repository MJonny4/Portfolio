export type TLink = {
    id: string
    href: string
    text: string
    text_es?: string
    text_cat?: string
    icon?: JSX.Element
}

export type TSocial = {
    id: string
    name: string
    url: string
    icon: JSX.Element
}

export type TProject = {
    id: number
    title: string
    description: string
    description_es?: string
    description_cat?: string
    image: string
    skills: TSkill[]
    urlWeb: string
    urlGithub: string
    lang?: string
}

export type TSkill = {
    id: number
    name: string
    icon: JSX.Element
}

export type TWork = {
    id: string
    imgSrc: string
    title: string
    company: string
    date: string
    description: string
    description_es?: string
    description_cat?: string
    bgColor?: string
    lang?: string
}
