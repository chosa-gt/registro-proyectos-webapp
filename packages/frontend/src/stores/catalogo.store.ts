import { defineStore } from 'pinia'
import { ref } from 'vue'
import { CatalogoService } from '../services/catalogo.service'
import type { Rol, EstadoCliente, EstadoProyecto, Prioridad, Empresa } from '../types'

export const useCatalogoStore = defineStore('catalogo', () => {
  const roles = ref<Rol[]>([])
  const estadosCliente = ref<EstadoCliente[]>([])
  const estadosProyecto = ref<EstadoProyecto[]>([])
  const prioridades = ref<Prioridad[]>([])
  const empresas = ref<Empresa[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchRoles = async () => {
    const res = await CatalogoService.getRoles()
    roles.value = res.data
  }

  const fetchEstadosCliente = async () => {
    const res = await CatalogoService.getEstadosCliente()
    estadosCliente.value = res.data
  }

  const fetchEstadosProyecto = async () => {
    const res = await CatalogoService.getEstadosProyecto()
    estadosProyecto.value = res.data
  }

  const fetchPrioridades = async () => {
    const res = await CatalogoService.getPrioridades()
    prioridades.value = res.data
  }

  const fetchEmpresas = async () => {
    const res = await CatalogoService.getEmpresas()
    empresas.value = res.data
  }

  const fetchAll = async () => {
    loading.value = true
    error.value = null
    try {
      await Promise.all([
        fetchRoles(),
        fetchEstadosCliente(),
        fetchEstadosProyecto(),
        fetchPrioridades(),
        fetchEmpresas()
      ])
    } catch (e) {
      error.value = 'Error al cargar catálogos'
    } finally {
      loading.value = false
    }
  }

  return {
    roles, estadosCliente, estadosProyecto, prioridades, empresas,
    loading, error,
    fetchAll, fetchRoles, fetchEstadosCliente, fetchEstadosProyecto,
    fetchPrioridades, fetchEmpresas
  }
})