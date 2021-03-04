import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [

    {
      path: "/",
      name: "home",
      component: () => import('../views/HomePage.vue')
    },
    {
      path: "/paciente",
      name: "paciente",
      component: () => import('../views/Paciente.vue')
    },
    {
      path: "/medico",
      name: "medico",
      component: () => import('../views/Medico.vue')
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
