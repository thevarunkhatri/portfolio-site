export default {
    name: 'blogPost',
    title: 'Blog Posts',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url'
      },
      {
        name: 'publishDate',
        title: 'Date Published',
        type: 'date'
      },
    ]
  }