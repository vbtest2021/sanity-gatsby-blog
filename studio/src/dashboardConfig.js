export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6048b91d77b744e73d3b5a68',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-75hnj3w3',
                  apiId: '27df75ae-702f-4a91-9302-cacd20ce3372'
                },
                {
                  buildHookId: '6048b91dfd6cc0d9efbef44d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bojz9sb4',
                  apiId: 'b631e8d7-254e-4f24-9c62-c556e572e8a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vbtest2021/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bojz9sb4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
