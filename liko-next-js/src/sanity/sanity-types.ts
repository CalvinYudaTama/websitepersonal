import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: SanityImageSource
  gallery?: SanityImageSource[]
  category: 'shopify' | 'cro' | 'uiux' | 'webdev'
  client?: string
  description: string
  content?: any[]
  challenge?: string
  solution?: string
  results?: Array<{
    metric: string
    value: string
  }>
  technologies?: string[]
  projectUrl?: string
  featured: boolean
  order: number
  publishedAt: string
}

export interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  icon?: string
  shortDescription: string
  description?: any[]
  features?: string[]
  order: number
}

export interface Testimonial {
  _id: string
  clientName: string
  clientRole: string
  clientCompany?: string
  clientImage?: SanityImageSource
  testimonial: string
  rating: number
  project?: {
    _ref: string
  }
  featured: boolean
  order: number
  publishedAt: string
}

export interface About {
  _id: string
  name: string
  title: string
  bio: any[]
  image?: SanityImageSource
  email?: string
  phone?: string
  location?: string
  skills?: Array<{
    name: string
    level: number
  }>
  experience?: number
  education?: Array<{
    degree: string
    school: string
    year: string
  }>
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
    upwork?: string
    dribbble?: string
  }
  resume?: any
}
