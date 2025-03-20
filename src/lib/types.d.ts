export interface Project {
  title: string
  shortDescription: string
  priority: number
  cover: string
  livePreview?: string
  githubLink?: string
  visitors?: string
  earned?: string
  githubStars?: string
  ratings?: string
  numberOfSales?: string
  type: string
  siteAge?: string
  learning?:boolean
}

export interface Experience extends Project {
  company? : string,
  location?:string,
  duration?:string,
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}
