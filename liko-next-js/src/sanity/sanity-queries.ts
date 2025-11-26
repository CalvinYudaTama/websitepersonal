import { groq } from 'next-sanity'

// Get all projects
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category,
    client,
    description,
    technologies,
    featured,
    publishedAt
  }
`

// Get featured projects
export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    mainImage,
    category,
    client,
    description,
    technologies
  }
`

// Get single project by slug
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    gallery,
    category,
    client,
    description,
    content,
    challenge,
    solution,
    results,
    technologies,
    projectUrl,
    publishedAt
  }
`

// Get all services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    description,
    features
  }
`

// Get all testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc, publishedAt desc) {
    _id,
    clientName,
    clientRole,
    clientCompany,
    clientImage,
    testimonial,
    rating,
    featured,
    publishedAt
  }
`

// Get featured testimonials
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) [0...3] {
    _id,
    clientName,
    clientRole,
    clientCompany,
    clientImage,
    testimonial,
    rating
  }
`

// Get about data
export const aboutQuery = groq`
  *[_type == "about"][0] {
    _id,
    name,
    title,
    bio,
    image,
    email,
    phone,
    location,
    skills,
    experience,
    education,
    socialLinks,
    resume
  }
`
