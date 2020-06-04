// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/fonts/museo_sans_rounded/museo_sans_rounded.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'keywords',
    content: 'ERG,employee resource group,Flywheel'
  })

  head.meta.push({
    name: 'description',
    content: `Rise is Flywheel's employee resource group for underrepresented racial groups and allies.`
  })
}
