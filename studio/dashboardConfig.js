export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '600fba093976f0bf0c0ba39b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kt1kn4ai',
                  apiId: '79102cee-6f71-4ed6-bc30-c73b9557c54c'
                },
                {
                  buildHookId: '600fba09ec973ba8e57c11a7',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-miri9hce',
                  apiId: 'b6a0bf3d-09e7-4e76-aede-87657003c5ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hamedooker/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-miri9hce.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
