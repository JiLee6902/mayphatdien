import { defineType, defineField } from 'sanity';

// Singleton document. Only one `settings` document should exist (id: 'settings').
export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hotline',
      title: 'Hotline',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'zaloUrl',
      title: 'Zalo URL',
      type: 'string',
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'string',
            }),
            defineField({
              name: 'phone',
              title: 'Phone',
              type: 'string',
            }),
          ],
          preview: { select: { title: 'name', subtitle: 'address' } },
        },
      ],
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'companyName' },
    prepare({ title }) {
      return { title: title || 'Settings' };
    },
  },
});
