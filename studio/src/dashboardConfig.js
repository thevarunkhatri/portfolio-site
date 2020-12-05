export default {
    widgets: [
        {   
            name: 'document-list'
        },
        {
            name: 'project-info'
        },
        {
            name: 'project-users'
        },
        {
            name: 'netlify',
            options: {
                title: 'My Netlify deploys',
                sites: [
                    {
                    title: 'Sanity Studio',
                    apiId: 'bba80faf-3c85-444d-a216-3dd8b9bf67d7',
                    buildHookId: '5f6794ff6ac815a7733ec386',
                    name: 'studio-thevarunkhatri',
                    },
                    {
                    title: 'Website',
                    apiId: '7086e1e3-57b8-43b7-83a0-d3b09e6fe1da',
                    buildHookId: '5f6795208466db1d0809de98',
                    name: 'thevarunkhatri'
                    }
                ]
            }
        }
    ]
}