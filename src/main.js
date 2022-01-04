import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '~/assets/styles.css'

export default function (Vue, { appOptions, head }) {

  // Add a meta tag description
  head.meta.push({
      name: 'description',
      content: 'Opensaludpass cuida de ti siempre'
    })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"',
  });
  
  const opts = { } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}