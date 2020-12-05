export default {
    name: 'portfolioExtraItem',
    title: 'Extra Portfolio Items',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image'
      },
      {
        name: 'placement',
        title: 'Placement Order',
        type: 'number'
      },
    ]
  }