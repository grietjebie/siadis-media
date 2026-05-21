import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const singletons = new Set(['about', 'siteSettings'])

export default defineConfig({
  name: 'siadis-media',
  title: 'Siadis Media',
  projectId: '5eo06xpe',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem().title('About Page').id('about')
              .child(S.document().schemaType('about').documentId('about')),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('client').title('Clients'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('post').title('Blog Posts'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
