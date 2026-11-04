import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Zigurate DSL",

  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      themeConfig: {
        socialLinks: [
          { icon: "github", link: "https://github.com/G4brielXavier/ZigurateDSL" }
        ],
        nav: [
          { text: 'Início', link: '/' },
          { text: 'Documentação', link: '/docs/welcome' },
          { text: 'Versões', link: 'https://github.com/G4brielXavier/ZigurateDSL/releases' }
        ],
        sidebar: [
          {
            text: "Bem vindo!",
            items: [
              { text: 'O que é Zigurate?', link: '/docs/welcome' },
              { text: 'Quem criou e porque?', link: '/docs/why' },
              { text: 'Inspiração Suméria', link: '/docs/inspi' },
            ]
          },
          // {
          //   text: "Quick Step",
          //   items: [
          //     { text: 'Creating a Zigurate Project', link: '/docs/quickstep/project' },
          //   ]
          // },
          {
            text: "Sintaxe",
            items: [
              { text: 'Uda (Variáveis Locais)', link: '/docs/guide/uda' },
              { text: 'Lunig (Objetos)', link: '/docs/guide/lunig' },
              { text: 'Gish (Enum)', link: '/docs/guide/gish' },
              { text: 'Maru (Importação de Lunig\'s)', link: '/docs/guide/maru' },
              { text: 'Suma (Comparação)', link: '/docs/guide/suma' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        socialLinks: [
          { icon: "github", link: "https://github.com/G4brielXavier/ZigurateDSL" }
        ],
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Documentation', link: '/en/docs/welcome' },
          { text: 'Versions', link: 'https://github.com/G4brielXavier/ZigurateDSL/releases' }
        ],
        sidebar: [
          {
            text: "Welcome",
            items: [
              { text: 'What is Zigurate?', link: '/en/docs/welcome' },
              { text: 'Who create and why?', link: '/en/docs/why' },
              { text: 'Sumerian Inspiration', link: '/en/docs/inspi' },
            ]
          },
          // {
          //   text: "Quick Step",
          //   items: [
          //     { text: 'Creating a Zigurate Project', link: '/en/docs/welcome' },
          //   ]
          // },
          {
            text: "Syntax",
            items: [
              { text: 'Uda (Local Variable)', link: 'en/docs/guide/uda' },
              { text: 'Lunig (Objects)', link: 'en/docs/guide/lunig' },
              { text: 'Gish (Enum)', link: 'en/docs/guide/gish' },
              { text: 'Maru (Lunig\'s Importation)', link: 'en/docs/guide/maru' },
              { text: 'Suma (Comparison)', link: 'en/docs/guide/suma' },
            ]
          },
        ]
      }
    }
  }
})