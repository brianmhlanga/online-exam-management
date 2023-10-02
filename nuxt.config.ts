import * as dotenv from 'dotenv'


dotenv.config();
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: false
    },
    
    css: [
        "@andresouzaabreu/vue-data-table/dist/DataTable.css",
        'maz-ui/css/main.css',
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'
        ],
    modules:
     ["formidable",
     '@pinia/nuxt',
     'nuxt-scheduler',
    ],
    pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    build: {
        transpile: ['primevue','maz-ui','@fullcalendar','xlsx']
    },
    runtimeConfig: {
      DATABASE_URL: process.env.DATABASE_URL,
      JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
      EMAIL_HOST: process.env.EMAIL_HOST
    }
    
})
