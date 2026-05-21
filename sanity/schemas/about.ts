import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'bio1', title: 'Bio paragraph 1', type: 'text', rows: 4 }),
    defineField({ name: 'bio2', title: 'Bio paragraph 2', type: 'text', rows: 4 }),
    defineField({ name: 'bio3', title: 'Bio paragraph 3', type: 'text', rows: 4 }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text' },
        ],
        preview: { select: { title: 'title' } },
      }],
    }),
    defineField({
      name: 'milestones',
      title: 'Timeline Milestones',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'year', title: 'Year / Label', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text' },
        ],
        preview: { select: { title: 'year', subtitle: 'title' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
