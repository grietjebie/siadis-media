import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '5eo06xpe',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc) { _id, title, tagline, description, icon }`)
}

export async function getClients() {
  return client.fetch(`*[_type == "client"] | order(order asc) { _id, name, sector, logo }`)
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc) { _id, quote, name, role, company, sector }`)
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) { _id, title, slug, category, excerpt, coverImage, publishedAt, readTime }`)
}

export async function getPost(slug: string) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0] { _id, title, slug, category, excerpt, coverImage, body, publishedAt, readTime }`, { slug })
}

export async function getAbout() {
  return client.fetch(`*[_type == "about"][0]`)
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}
