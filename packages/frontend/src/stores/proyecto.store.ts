import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ProyectoService } from '../services/proyecto.service'
import type { Proyecto } from '../types'

export const useProyectoStore = defineStore('proyecto', () => {
  const proyectos = ref<Proyecto[]>([])
  const proyectoActual = ref<Proyecto | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProyectos = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await ProyectoService.getProyectos()
      proyectos.value = res.data
    } catch (e) {
      error.value = 'Error al cargar proyectos'
    } finally {
      loading.value = false
    }
  }

  const fetchProyectoById = async (id: number) => {
    loading.value = true
    error.value = null
    try {
      const res = await ProyectoService.getProyectoById(id)
      proyectoActual.value = res.data
    } catch (e) {
      error.value = 'Error al cargar proyecto'
    } finally {
      loading.value = false
    }
  }

  return {
    proyectos, proyectoActual, loading, error,
    fetchProyectos, fetchProyectoById
  }
})