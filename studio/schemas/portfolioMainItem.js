export default {
    name: 'portfolioMainItem',
    title: 'Main Portfolio Items',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'type',
        title: 'Project Type',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image'
      },
      {
        name: 'placement',
        title: 'Placement Order',
        type: 'number'
      },
    ]
  }