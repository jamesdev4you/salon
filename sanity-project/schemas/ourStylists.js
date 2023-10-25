import {defineField, defineType} from 'sanity'

const ourStylists = defineType({
  name: 'ourStylists',
  type: 'document',
  title: 'Our Stylists',
  fields: [
    defineField({
      name: 'Stylist',
      type: 'object',
      fields: [
        defineField({
          name: 'Name',
          type: 'string',
          title: 'Stylist Name',
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ],
    }),
  ],
})

export default ourStylists
