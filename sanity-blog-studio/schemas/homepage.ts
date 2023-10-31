import {defineField, defineType} from 'sanity'

export default defineType({
 name: 'homepage',
  type: 'document',
  title: 'Homepage',
   initialValue: () => ({  
  }),
  hidden: ({ document }) => (
    typeof document !== 'undefined' //Hide create new button
  ),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    }
  ]
})