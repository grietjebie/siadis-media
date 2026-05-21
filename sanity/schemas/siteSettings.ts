import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'heroTagline', title: 'Hero tagline (e.g. "10 years of expertise...")', type: 'text', rows: 2 }),
    defineField({
      name: 'stats',
      title: 'Stats Bar',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value (e.g. "250+")', type: 'string' },
          { name: 'label', title: 'Label (e.g. "Campaigns")', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),
    defineField({ name: 'quoteText', title: 'Homepage Quote', type: 'text', rows: 3 }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
