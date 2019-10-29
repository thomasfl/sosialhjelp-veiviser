export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5db84c3c755bf22cd8fd60ec',
                  title: 'Sanity Studio',
                  name: 'sosialhjelp-veiviser-studio',
                  apiId: '747bc0fb-9b5d-43c1-9457-71ffad669536'
                },
                {
                  buildHookId: '5db84c3ce3158e487cb5fa27',
                  title: 'Landing pages Website',
                  name: 'sosialhjelp-veiviser',
                  apiId: '54f3f66d-4026-4e8d-bf67-08a3b4c1c92e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasfl/sosialhjelp-veiviser',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sosialhjelp-veiviser.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
