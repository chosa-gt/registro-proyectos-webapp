import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProyectosView from '../views/ProyectosView.vue'
import ProyectoDetalleView from '../views/ProyectoDetalleView.vue'
import ClientesView from '../views/ClientesView.vue'
import ConsultoresView from '../views/ConsultoresView.vue'
import CatalogosView from '../views/CatalogosView.vue'
import BusquedaReportesView from '../views/BusquedaReportesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: DashboardView },
    { path: '/proyectos', component: ProyectosView },
    { path: '/proyectos/:id', component: ProyectoDetalleView },
    { path: '/clientes', component: ClientesView },
    { path: '/consultores', component: ConsultoresView },
    { path: '/catalogos', component: CatalogosView },
    { path: '/busqueda', component: BusquedaReportesView },
  ]
})

export default router