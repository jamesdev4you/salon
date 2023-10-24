import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Shear Bliss',

  projectId: '4dnp66yc',
  dataset: 'sanity',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
