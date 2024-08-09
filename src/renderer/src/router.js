// Router
import { createMemoryHistory, createRouter } from 'vue-router'

// Components
import Overview from './components/Overview.vue'
import Reparatur from './components/Reparatur.vue'

const routes = [
  { path: '/', component: Overview },
  { path: '/reparatur/:id', component: Reparatur }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
