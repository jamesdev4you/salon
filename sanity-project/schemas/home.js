import {defineArrayMember, defineField, defineType} from 'sanity'

const pageType = defineType({
  name: 'Home',
  type: 'document',
  title: 'Home Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'header',
          type: 'header',
        }),
        defineArrayMember({
          name: 'ourServices',
          type: 'ourServices',
        }),
        defineArrayMember({
          name: 'ourStylists',
          type: 'ourStylists',
        }),
        defineArrayMember({
          name: 'ourMenu',
          type: 'ourMenu',
        }),
      ],
    }),
  ],
})

export default pageType
