<template>
  <div>

    <h2 class="text-2xl font-bold text-gray-800 mb-6">Búsqueda y Reportes</h2>

    <!-- Búsqueda -->
    <div class="card mb-6">
      <p class="text-sm font-medium text-gray-500 mb-4">Búsqueda de proyectos</p>

      <!-- Barra única -->
      <div style="position: relative;" class="mb-4">
        <input
          v-model="query"
          type="text"
          class="form-input"
          placeholder="Buscar por No. Proyecto, nombre, cliente o consultor..."
        />
      </div>

      <!-- Filtros rápidos de estado -->
      <div class="flex gap-2 mb-4">
        <button
          v-for="e in estadosFiltro"
          :key="e.value"
          @click="estadoActivo = e.value"
          :style="estadoActivo === e.value ? 'background:#3b82f6;color:white;border-color:#3b82f6' : ''"
          style="font-size: 12px; padding: 4px 14px; border-radius: 99px; border: 0.5px solid #d1d5db; background: transparent; color: #6b7280; cursor: pointer; transition: all 0.2s;"
        >
          {{ e.label }}
        </button>
      </div>

      <!-- Tabla resultados -->
      <div v-if="proyectosFiltrados.length === 0" class="text-gray-400 text-sm text-center py-8">
        No se encontraron proyectos.
      </div>
      <table v-else class="w-full text-sm">
        <thead>
          <tr class="text-left text-gray-500 border-b text-xs">
            <th class="pb-2 font-medium">No. Proyecto</th>
            <th class="pb-2 font-medium">Nombre</th>
            <th class="pb-2 font-medium">Cliente</th>
            <th class="pb-2 font-medium">Consultor</th>
            <th class="pb-2 font-medium">Estado</th>
            <th class="pb-2 font-medium">Fecha Inicio</th>
            <th class="pb-2 font-medium text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in proyectosFiltrados"
            :key="p.id_proyecto"
            class="border-b last:border-0 hover:bg-gray-50"
          >
            <td class="py-3 font-mono font-medium text-blue-600">{{ p.no_proyecto }}</td>
            <td class="py-3 text-gray-700">{{ p.nombre || '—' }}</td>
            <td class="py-3 text-gray-500 text-xs">{{ p.cliente.nombre }} {{ p.cliente.apellido }}</td>
            <td class="py-3 text-gray-500 text-xs">{{ p.consultor.nombre }}</td>
            <td class="py-3">
              <span :class="badgeEstado(p.estado_proyecto.estado)">
                {{ p.estado_proyecto.estado }}
              </span>
            </td>
            <td class="py-3 text-gray-500 text-xs">{{ formatFecha(p.fecha_inicio) }}</td>
            <td class="py-3 text-right">
              <button @click="router.push(`/proyectos/${p.id_proyecto}`)" class="text-blue-600 hover:underline text-xs">
                Ver detalle
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Reportes -->
    <div class="card">
      <p class="text-sm font-medium text-gray-500 mb-4">Generar reporte</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <!-- Por estado -->
        <div class="border border-gray-100 rounded-lg p-4">
          <p class="text-sm font-medium text-gray-700 mb-1">Por estado</p>
          <p class="text-xs text-gray-400 mb-3">Lista de proyectos agrupados por su estado actual.</p>
          <select v-model="reporteEstado" class="form-select mb-3">
            <option value="">Todos los estados</option>
            <option v-for="e in estadosProyecto" :key="e.id_estado_proyecto" :value="e.estado">
              {{ e.estado }}
            </option>
          </select>
          <button @click="generarReporte('estado')" class="btn-primary w-full text-xs">Generar</button>
        </div>

        <!-- Por consultor -->
        <div class="border border-gray-100 rounded-lg p-4">
          <p class="text-sm font-medium text-gray-700 mb-1">Por consultor</p>
          <p class="text-xs text-gray-400 mb-3">Lista de proyectos asignados a un consultor específico.</p>
          <select v-model="reporteConsultor" class="form-select mb-3">
            <option value="">Todos los consultores</option>
            <option v-for="c in consultores" :key="c.id_consultor" :value="c.id_consultor">
              {{ c.nombre }}
            </option>
          </select>
          <button @click="generarReporte('consultor')" class="btn-primary w-full text-xs">Generar</button>
        </div>

        <!-- Historial proyecto -->
        <div class="border border-gray-100 rounded-lg p-4">
          <p class="text-sm font-medium text-gray-700 mb-1">Historial de proyecto</p>
          <p class="text-xs text-gray-400 mb-3">Bitácora completa de seguimiento de un proyecto.</p>
          <input v-model="reporteNoProyecto" type="text" class="form-input mb-3" placeholder="No. Proyecto..." />
          <button @click="generarReporte('historial')" class="btn-primary w-full text-xs">Generar</button>
        </div>

        <!-- Por rango de fechas -->
        <div class="border border-gray-100 rounded-lg p-4">
          <p class="text-sm font-medium text-gray-700 mb-1">Por rango de fechas</p>
          <p class="text-xs text-gray-400 mb-3">Proyectos iniciados dentro de un período específico.</p>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <input v-model="reporteFechaDesde" type="date" class="form-input" />
            <input v-model="reporteFechaHasta" type="date" class="form-input" />
          </div>
          <button @click="generarReporte('fechas')" class="btn-primary w-full text-xs">Generar</button>
        </div>

      </div>

      <!-- Resultado reporte -->
      <div v-if="resultadoReporte.length > 0" class="bg-gray-50 border border-gray-100 rounded-lg p-4">
        <div class="flex justify-between items-center mb-3">
          <p class="text-sm font-medium text-gray-700">{{ tituloReporte }}</p>
          <button @click="exportarCSV" class="btn-secondary text-xs">Exportar CSV</button>
        </div>
        <table class="w-full text-xs">
          <thead>
            <tr class="text-left text-gray-500 border-b">
              <th class="pb-2 font-medium">No. Proyecto</th>
              <th class="pb-2 font-medium">Nombre</th>
              <th class="pb-2 font-medium">Cliente</th>
              <th class="pb-2 font-medium">Consultor</th>
              <th class="pb-2 font-medium">Estado</th>
              <th class="pb-2 font-medium">Fecha Inicio</th>
              <th class="pb-2 font-medium">Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="p in resultadoReporte"
              :key="p.id_proyecto"
              class="border-b last:border-0 hover:bg-white"
            >
              <td class="py-2 font-mono text-blue-600 font-medium">{{ p.no_proyecto }}</td>
              <td class="py-2 text-gray-700">{{ p.nombre || '—' }}</td>
              <td class="py-2 text-gray-500">{{ p.cliente.nombre }} {{ p.cliente.apellido }}</td>
              <td class="py-2 text-gray-500">{{ p.consultor.nombre }}</td>
              <td class="py-2">
                <span :class="badgeEstado(p.estado_proyecto.estado)">
                  {{ p.estado_proyecto.estado }}
                </span>
              </td>
              <td class="py-2 text-gray-500">{{ formatFecha(p.fecha_inicio) }}</td>
              <td class="py-2 font-medium text-gray-700">
                {{ p.log_montos[0] ? formatMonto(p.log_montos[0].monto) : '—' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProyectoStore } from '../stores/proyecto.store'
import { useCatalogoStore } from '../stores/catalogo.store'
import { ConsultorService } from '../services/consultor.service'
import type { Proyecto, Consultor, EstadoProyecto } from '../types'

const router = useRouter()
const store = useProyectoStore()
const catalogoStore = useCatalogoStore()

const query = ref('')
const estadoActivo = ref('')
const consultores = ref<Consultor[]>([])
const estadosProyecto = ref<EstadoProyecto[]>([])

const reporteEstado = ref('')
const reporteConsultor = ref<number | ''>('')
const reporteNoProyecto = ref('')
const reporteFechaDesde = ref('')
const reporteFechaHasta = ref('')
const resultadoReporte = ref<Proyecto[]>([])
const tituloReporte = ref('')

const estadosFiltro = [
  { label: 'Todos',      value: '' },
  { label: 'Abierto',    value: 'Abierto' },
  { label: 'Suspendido', value: 'Suspendido' },
  { label: 'Finalizado', value: 'Finalizado' },
]

const proyectosFiltrados = computed(() => {
  return store.proyectos.filter(p => {
    const q = query.value.toLowerCase()
    const matchQ = !q ||
      p.no_proyecto.toLowerCase().includes(q) ||
      (p.nombre?.toLowerCase().includes(q)) ||
      p.cliente.nombre.toLowerCase().includes(q) ||
      p.cliente.apellido.toLowerCase().includes(q) ||
      p.consultor.nombre.toLowerCase().includes(q)

    const matchE = !estadoActivo.value ||
      p.estado_proyecto.estado === estadoActivo.value

    return matchQ && matchE
  })
})

const badgeEstado = (estado: string) => {
  const e = estado.toLowerCase()
  if (e.includes('abierto'))    return 'badge-abierto'
  if (e.includes('suspendido')) return 'badge-suspendido'
  if (e.includes('finalizado')) return 'badge-finalizado'
  return 'inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600'
}

const formatFecha = (fecha: string) => {
  return new Date(fecha).toLocaleDateString('es-GT')
}

const formatMonto = (monto: number) => {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(monto)
}

const generarReporte = (tipo: string) => {
  const proyectos = store.proyectos

  if (tipo === 'estado') {
    resultadoReporte.value = reporteEstado.value
      ? proyectos.filter(p => p.estado_proyecto.estado === reporteEstado.value)
      : proyectos
    tituloReporte.value = reporteEstado.value
      ? `Proyectos con estado: ${reporteEstado.value}`
      : 'Todos los proyectos'

  } else if (tipo === 'consultor') {
    resultadoReporte.value = reporteConsultor.value
      ? proyectos.filter(p => p.consultor.id_consultor === Number(reporteConsultor.value))
      : proyectos
    const consultor = consultores.value.find(c => c.id_consultor === Number(reporteConsultor.value))
    tituloReporte.value = consultor
      ? `Proyectos de: ${consultor.nombre}`
      : 'Todos los proyectos'

  } else if (tipo === 'historial') {
    if (!reporteNoProyecto.value.trim()) {
      alert('Ingresa un número de proyecto')
      return
    }
    resultadoReporte.value = proyectos.filter(p =>
      p.no_proyecto.toLowerCase().includes(reporteNoProyecto.value.toLowerCase())
    )
    tituloReporte.value = `Historial del proyecto: ${reporteNoProyecto.value}`

  } else if (tipo === 'fechas') {
    if (!reporteFechaDesde.value || !reporteFechaHasta.value) {
      alert('Selecciona el rango de fechas')
      return
    }
    const desde = new Date(reporteFechaDesde.value)
    const hasta = new Date(reporteFechaHasta.value)
    resultadoReporte.value = proyectos.filter(p => {
      const fecha = new Date(p.fecha_inicio)
      return fecha >= desde && fecha <= hasta
    })
    tituloReporte.value = `Proyectos del ${formatFecha(reporteFechaDesde.value)} al ${formatFecha(reporteFechaHasta.value)}`
  }

  if (resultadoReporte.value.length === 0) {
    alert('No se encontraron proyectos con los filtros seleccionados')
  }
}

const exportarCSV = () => {
  const headers = ['No. Proyecto', 'Nombre', 'Cliente', 'Consultor', 'Estado', 'Fecha Inicio', 'Monto']
  const filas = resultadoReporte.value.map(p => [
    p.no_proyecto,
    p.nombre || '',
    `${p.cliente.nombre} ${p.cliente.apellido}`,
    p.consultor.nombre,
    p.estado_proyecto.estado,
    formatFecha(p.fecha_inicio),
    p.log_montos[0] ? p.log_montos[0].monto : ''
  ])

  const csv = [headers, ...filas].map(r => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `reporte_proyectos_${new Date().toISOString().split('T')[0]}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

onMounted(async () => {
  await store.fetchProyectos()
  await catalogoStore.fetchEstadosProyecto()
  estadosProyecto.value = catalogoStore.estadosProyecto
  const res = await ConsultorService.getConsultores()
  consultores.value = res.data
})
</script>