import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemas } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Blog Studio',

  projectId: 'js2nhuqq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  }
})
