import type { CollectionConfig } from 'payload'

export const Notes: CollectionConfig = {
  slug: 'notes',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subject',
      type: 'select',
      options: [
        { label: 'Linguistics', value: 'linguistics' },
        { label: 'Math', value: 'math' },
        { label: 'SOFTENG', value: 'softeng' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
