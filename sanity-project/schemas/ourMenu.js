import {defineField, defineType} from 'sanity'

const ourMenu = defineType({
  name: 'ourMenu',
  type: 'document',
  title: 'Our Menu - Home Page',
  fields: [
    defineField({
      name: 'Hair',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemFour',
          type: 'string',
          title: 'Item Four',
        }),
        defineField({
          name: 'ItemFive',
          type: 'string',
          title: 'Item Five',
        }),
        defineField({
          name: 'ItemSix',
          type: 'string',
          title: 'Item Six',
        }),
      ],
    }),
    defineField({
      name: 'Facial',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemFour',
          type: 'string',
          title: 'Item Four',
        }),
        defineField({
          name: 'ItemFive',
          type: 'string',
          title: 'Item Five',
        }),
        defineField({
          name: 'ItemSix',
          type: 'string',
          title: 'Item Six',
        }),
      ],
    }),
    defineField({
      name: 'ManiPedi',
      type: 'object',
      fields: [
        defineField({
          name: 'ItemOne',
          type: 'string',
          title: 'Item One',
        }),
        defineField({
          name: 'ItemTwo',
          type: 'string',
          title: 'Item Two',
        }),
        defineField({
          name: 'ItemThree',
          type: 'string',
          title: 'Item Three',
        }),
        defineField({
          name: 'ItemFour',
          type: 'string',
          title: 'Item Four',
        }),
        defineField({
          name: 'ItemFive',
          type: 'string',
          title: 'Item Five',
        }),
        defineField({
          name: 'ItemSix',
          type: 'string',
          title: 'Item Six',
        }),
      ],
    }),
  ],
})

export default ourMenu
