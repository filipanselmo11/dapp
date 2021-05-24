import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '../views/HomePage.vue' 


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [

    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      meta: { transition: "zoom" },
    },
    {
      path: "/paciente",
      name: "Paciente",
      component: () => import('../views/Paciente.vue'),
      meta: { transition: "zoom" },
    },
    {
      path: "/medico",
      name: "Medico",
      component: () => import('../views/Medico.vue'),
      meta: { transition: "zoom" },
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
