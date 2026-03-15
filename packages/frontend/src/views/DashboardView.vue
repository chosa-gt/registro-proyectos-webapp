<template>
  <div>

    <!-- Header -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>
      <p class="text-sm text-gray-500 mt-1">Resumen general de LUBConsultores</p>
    </div>

    <div v-if="loading" class="text-gray-500 text-center py-10">Cargando...</div>

    <div v-else>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Proyectos activos</p>
          <p class="text-3xl font-semibold text-green-700">{{ metricas.abiertos }}</p>
          <p class="text-xs text-gray-400 mt-1">En estado Abierto</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Suspendidos</p>
          <p class="text-3xl font-semibold text-yellow-700">{{ metricas.suspendidos }}</p>
          <p class="text-xs text-gray-400 mt-1">Requieren atención</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Finalizados</p>
          <p class="text-3xl font-semibold text-gray-700">{{ metricas.finalizados }}</p>
          <p class="text-xs text-gray-400 mt-1">Completados</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Clientes activos</p>
          <p class="text-3xl font-semibold text-blue-700">{{ metricas.clientes }}</p>
          <p class="text-xs text-gray-400 mt-1">Total registrados</p>
        </div>
      </div>

      <!-- Gráficas -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <!-- Dona -->
        <div class="card">
          <p class="text-sm font-medium text-gray-700 mb-4">Proyectos por estado</p>
          <div class="flex items-center gap-6">
            <canvas ref="donaRef" width="140" height="140"></canvas>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-xs text-gray-500">Abierto</span>
                <span class="text-xs font-medium ml-auto">{{ metricas.abiertos }}</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span class="text-xs text-gray-500">Suspendido</span>
                <span class="text-xs font-medium ml-auto">{{ metricas.suspendidos }}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-gray-400"></div>
                <span class="text-xs text-gray-500">Finalizado</span>
                <span class="text-xs font-medium ml-auto">{{ metricas.finalizados }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Carga por consultor -->
        <div class="card">
          <p class="text-sm font-medium text-gray-700 mb-4">Carga por consultor</p>
          <div v-for="c in cargaConsultores" :key="c.nombre" class="mb-3">
            <div class="flex justify-between text-xs mb-1">
              <span class="text-gray-500">{{ c.nombre }}</span>
              <span class="font-medium">{{ c.total }}</span>
            </div>
            <div class="bg-gray-100 rounded-full h-2">
              <div
                class="bg-blue-500 rounded-full h-2 transition-all duration-500"
                :style="`width: ${(c.total / maxCarga) * 100}%`"
              ></div>
            </div>
          </div>
          <div v-if="cargaConsultores.length === 0" class="text-gray-400 text-xs text-center py-4">
            No hay datos disponibles.
          </div>
        </div>

      </div>

      <!-- Recientes y Alertas -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Proyectos recientes -->
        <div class="card">
          <p class="text-sm font-medium text-gray-700 mb-4">Proyectos recientes</p>
          <div v-if="proyectosRecientes.length === 0" class="text-gray-400 text-xs text-center py-4">
            No hay proyectos registrados.
          </div>
          <div
            v-for="p in proyectosRecientes"
            :key="p.id_proyecto"
            class="flex justify-between items-center py-2 border-b last:border-0 hover:bg-gray-50 cursor-pointer"
            @click="router.push(`/proyectos/${p.id_proyecto}`)"
          >
            <div>
              <span class="text-xs font-medium text-blue-600 font-mono">{{ p.no_proyecto }}</span>
              <span class="text-xs text-gray-500 ml-2">{{ p.nombre || '—' }}</span>
            </div>
            <span :class="badgeEstado(p.estado_proyecto.estado)">
              {{ p.estado_proyecto.estado }}
            </span>
          </div>
        </div>

        <!-- Alertas -->
        <div class="card">
          <p class="text-sm font-medium text-gray-700 mb-4">Alertas</p>

          <div v-if="alertas.length === 0" class="text-gray-400 text-xs text-center py-4">
            No hay alertas activas.
          </div>

          <div
            v-for="a in alertas"
            :key="a.id"
            class="mb-3 rounded-lg p-3"
            :style="a.tipo === 'vence' ? 'background:#fee2e2;border-left:3px solid #ef4444' : 'background:#fef9c3;border-left:3px solid #eab308'"
          >
            <p class="text-xs font-medium mb-1" :style="a.tipo === 'vence' ? 'color:#991b1b' : 'color:#854d0e'">
              {{ a.titulo }}
            </p>
            <p class="text-xs" :style="a.tipo === 'vence' ? 'color:#991b1b' : 'color:#92400e'">
              {{ a.mensaje }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useProyectoStore } from '../stores/proyecto.store'
import { ClienteService } from '../services/cliente.service'
import { BitacoraService } from '../services/bitacora.service'
import Chart from 'chart.js/auto'
import type { Proyecto } from '../types'

const router = useRouter()
const store = useProyectoStore()

const loading = ref(true)
const donaRef = ref<HTMLCanvasElement | null>(null)
const totalClientes = ref(0)
const bitacorasPorProyecto = ref<Record<number, string | null>>({})

const metricas = computed(() => ({
  abiertos:    store.proyectos.filter(p => p.estado_proyecto.estado.toLowerCase().includes('abierto')).length,
  suspendidos: store.proyectos.filter(p => p.estado_proyecto.estado.toLowerCase().includes('suspendido')).length,
  finalizados: store.proyectos.filter(p => p.estado_proyecto.estado.toLowerCase().includes('finalizado')).length,
  clientes:    totalClientes.value,
}))

const proyectosRecientes = computed(() =>
  [...store.proyectos].slice(0, 5)
)

const cargaConsultores = computed(() => {
  const mapa: Record<string, number> = {}
  store.proyectos.forEach(p => {
    const nombre = p.consultor.nombre
    mapa[nombre] = (mapa[nombre] || 0) + 1
  })
  return Object.entries(mapa)
    .map(([nombre, total]) => ({ nombre, total }))
    .sort((a, b) => b.total - a.total)
})

const maxCarga = computed(() =>
  Math.max(...cargaConsultores.value.map(c => c.total), 1)
)

const alertas = computed(() => {
  const hoy = new Date()
  const lista: { id: string, tipo: string, titulo: string, mensaje: string }[] = []

  store.proyectos.forEach(p => {
    // Próximo a vencer (7 días)
    if (p.fecha_fin) {
      const fin = new Date(p.fecha_fin)
      const dias = Math.ceil((fin.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24))
      if (dias >= 0 && dias <= 7 && p.estado_proyecto.estado.toLowerCase().includes('abierto')) {
        lista.push({
          id: `vence-${p.id_proyecto}`,
          tipo: 'vence',
          titulo: 'Próximo a vencer',
          mensaje: `Proyecto ${p.no_proyecto} — vence en ${dias} día${dias !== 1 ? 's' : ''} (${new Date(p.fecha_fin!).toLocaleDateString('es-GT')})`
        })
      }
    }

    // Sin bitácora reciente (más de 7 días)
    const ultimaBitacora = bitacorasPorProyecto.value[p.id_proyecto]
    if (ultimaBitacora && p.estado_proyecto.estado.toLowerCase().includes('abierto')) {
      const ultima = new Date(ultimaBitacora)
      const dias = Math.ceil((hoy.getTime() - ultima.getTime()) / (1000 * 60 * 60 * 24))
      if (dias > 7) {
        lista.push({
          id: `bitacora-${p.id_proyecto}`,
          tipo: 'bitacora',
          titulo: 'Sin seguimiento reciente',
          mensaje: `Proyecto ${p.no_proyecto} — sin bitácora hace ${dias} días`
        })
      }
    }
  })

  return lista.slice(0, 5)
})

const badgeEstado = (estado: string) => {
  const e = estado.toLowerCase()
  if (e.includes('abierto'))    return 'badge-abierto'
  if (e.includes('suspendido')) return 'badge-suspendido'
  if (e.includes('finalizado')) return 'badge-finalizado'
  return 'inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600'
}

const iniciarDona = () => {
  if (!donaRef.value) return
  new Chart(donaRef.value, {
    type: 'doughnut',
    data: {
      labels: ['Abierto', 'Suspendido', 'Finalizado'],
      datasets: [{
        data: [metricas.value.abiertos, metricas.value.suspendidos, metricas.value.finalizados],
        backgroundColor: ['#22c55e', '#eab308', '#9ca3af'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: false,
      plugins: { legend: { display: false } },
      cutout: '70%'
    }
  })
}

onMounted(async () => {
  loading.value = true
  await store.fetchProyectos()

  const clientesRes = await ClienteService.getClientes()
  totalClientes.value = clientesRes.data.length

  // Cargar última bitácora por proyecto
  await Promise.all(
    store.proyectos.map(async p => {
      try {
        const res = await BitacoraService.getBitacoraByProyecto(p.id_proyecto)
        const bitacoras = res.data
        bitacorasPorProyecto.value[p.id_proyecto] = bitacoras.length > 0 ? bitacoras[0].fecha : null
      } catch {
        bitacorasPorProyecto.value[p.id_proyecto] = null
      }
    })
  )

  loading.value = false
  await nextTick()
  iniciarDona()
})
</script>