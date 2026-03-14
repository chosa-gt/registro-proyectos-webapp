<template>
  <div>
    <!-- Loading / Error -->
    <div v-if="store.loading" class="text-gray-500 text-center py-10">Cargando...</div>
    <div v-else-if="store.error" class="text-red-500 text-center py-10">{{ store.error }}</div>

    <div v-else-if="proyecto">

      <!-- Header -->
      <div class="flex justify-between items-start mb-6">
        <div>
          <button @click="router.push('/proyectos')" class="text-sm text-gray-500 hover:text-blue-600 mb-2 flex items-center gap-1">
            ← Volver a Proyectos
          </button>
          <h2 class="text-2xl font-bold text-gray-800">{{ proyecto?.nombre || 'Sin nombre' }}</h2>
          <p class="text-sm text-gray-500 mt-1">No. Proyecto: <span class="font-mono font-medium text-blue-600">{{ proyecto?.no_proyecto }}</span></p>
        </div>
        <div class="flex gap-2">
          <button @click="abrirModalEditar" class="btn-secondary">Editar</button>
          <button @click="abrirModalSeguimiento" class="btn-primary">+ Agregar Seguimiento</button>
        </div>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Estado actual</p>
          <span :class="badgeEstado(proyecto.estado_proyecto.estado)">
            {{ proyecto.estado_proyecto.estado }}
          </span>
        </div>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Monto actual</p>
          <p class="text-lg font-semibold text-gray-800">
            {{ ultimoMonto ? formatMonto(ultimoMonto.monto) : '—' }}
          </p>
        </div>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Fecha inicio</p>
          <p class="text-sm font-medium text-gray-800">{{ formatFecha(proyecto.fecha_inicio) }}</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-xs text-gray-500 mb-1">Fecha fin</p>
          <p class="text-sm font-medium text-gray-800">{{ proyecto.fecha_fin ? formatFecha(proyecto.fecha_fin) : '—' }}</p>
        </div>
      </div>

      <!-- Cliente y Consultor -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <!-- Cliente -->
        <div class="card">
          <p class="text-xs font-medium text-gray-500 mb-3">Cliente</p>
          <p class="text-base font-semibold text-gray-800">{{ proyecto.cliente.nombre }} {{ proyecto.cliente.apellido }}</p>
          <p class="text-sm text-gray-500">{{ proyecto.cliente.empresa.nombre }}</p>
          <div class="border-t border-gray-100 mt-3 pt-3 grid grid-cols-2 gap-2 text-xs">
            <div>
              <span class="text-gray-400">Teléfono</span>
              <p class="text-gray-700">{{ proyecto.cliente.telefono || '—' }}</p>
            </div>
            <div>
              <span class="text-gray-400">Correo</span>
              <p class="text-gray-700">{{ proyecto.cliente.correo || '—' }}</p>
            </div>
          </div>
        </div>

        <!-- Consultor -->
        <div class="card">
          <p class="text-xs font-medium text-gray-500 mb-3">Consultor asignado</p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
              {{ iniciales(proyecto.consultor.nombre) }}
            </div>
            <div>
              <p class="text-base font-semibold text-gray-800">{{ proyecto.consultor.nombre }}</p>
              <p class="text-xs text-gray-500">{{ proyecto.consultor.telefono || '—' }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Bitácora -->
      <div class="card mb-6">
        <div class="flex justify-between items-center mb-4">
          <p class="text-sm font-medium text-gray-700">Bitácora / Historial de seguimiento</p>
          <p class="text-xs text-gray-400">{{ bitacoras.length }} registros</p>
        </div>

        <div v-if="bitacoras.length === 0" class="text-gray-400 text-sm text-center py-6">
          No hay seguimientos registrados aún.
        </div>

        <table v-else class="w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b text-xs">
              <th class="pb-2 font-medium">Fecha</th>
              <th class="pb-2 font-medium">Estado</th>
              <th class="pb-2 font-medium">Prioridad</th>
              <th class="pb-2 font-medium">Observaciones</th>
              <th class="pb-2 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="b in bitacoras"
              :key="b.id_bitacora"
              class="border-b last:border-0 hover:bg-gray-50"
            >
              <td class="py-3 text-gray-500 text-xs">{{ formatFecha(b.fecha) }}</td>
              <td class="py-3">
                <span :class="badgeEstado(b.estado_proyecto.estado)">
                  {{ b.estado_proyecto.estado }}
                </span>
              </td>
              <td class="py-3 text-xs text-gray-600">{{ b.prioridad.nombre_prioridad }}</td>
              <td class="py-3 text-xs text-gray-700">{{ b.observaciones || '—' }}</td>
              <td class="py-3 text-right">
                <button @click="eliminarBitacora(b.id_bitacora)" class="text-red-500 hover:underline text-xs">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Log Montos -->
      <div class="card">
        <div class="flex justify-between items-center mb-4">
          <p class="text-sm font-medium text-gray-700">Historial de montos</p>
          <button @click="abrirModalMonto" class="btn-secondary text-xs">+ Actualizar monto</button>
        </div>

        <div v-if="logMontos.length === 0" class="text-gray-400 text-sm text-center py-6">
          No hay montos registrados.
        </div>

        <table v-else class="w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b text-xs">
              <th class="pb-2 font-medium">Fecha</th>
              <th class="pb-2 font-medium">Monto</th>
              <th class="pb-2 font-medium">Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="m in logMontos"
              :key="m.id_log_montos"
              class="border-b last:border-0 hover:bg-gray-50"
            >
              <td class="py-3 text-gray-500 text-xs">{{ formatFecha(m.fecha) }}</td>
              <td class="py-3 font-medium text-gray-800">{{ formatMonto(m.monto) }}</td>
              <td class="py-3 text-xs text-gray-600">{{ m.observaciones || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- Modal Seguimiento -->
    <ModalForm v-if="modalSeguimiento" title="Agregar Seguimiento" @close="modalSeguimiento = false">
      <div class="space-y-3">
        <div>
          <label class="form-label">Fecha *</label>
          <input v-model="formSeguimiento.fecha" type="date" class="form-input" />
        </div>
        <div>
          <label class="form-label">Estado *</label>
          <select v-model="formSeguimiento.id_estado_proyecto" class="form-select">
            <option value="">Seleccione un estado</option>
            <option v-for="e in estadosProyecto" :key="e.id_estado_proyecto" :value="e.id_estado_proyecto">
              {{ e.estado }}
            </option>
          </select>
        </div>
        <div>
          <label class="form-label">Prioridad *</label>
          <select v-model="formSeguimiento.id_prioridad" class="form-select">
            <option value="">Seleccione una prioridad</option>
            <option v-for="p in prioridades" :key="p.id_prioridad" :value="p.id_prioridad">
              {{ p.nombre_prioridad }}
            </option>
          </select>
        </div>
        <div>
          <label class="form-label">Observaciones</label>
          <textarea v-model="formSeguimiento.observaciones" class="form-textarea" rows="3" placeholder="Descripción del seguimiento..."></textarea>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button @click="modalSeguimiento = false" class="btn-secondary">Cancelar</button>
          <button @click="guardarSeguimiento" class="btn-primary">Guardar</button>
        </div>
      </div>
    </ModalForm>

    <!-- Modal Monto -->
    <ModalForm v-if="modalMonto" title="Actualizar Monto" @close="modalMonto = false">
      <div class="space-y-3">
        <div>
          <label class="form-label">Fecha *</label>
          <input v-model="formMonto.fecha" type="date" class="form-input" />
        </div>
        <div>
          <label class="form-label">Monto *</label>
          <input v-model="formMonto.monto" type="number" class="form-input" placeholder="0.00" />
        </div>
        <div>
          <label class="form-label">Observaciones</label>
          <textarea v-model="formMonto.observaciones" class="form-textarea" rows="2" placeholder="Motivo del ajuste de monto..."></textarea>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button @click="modalMonto = false" class="btn-secondary">Cancelar</button>
          <button @click="guardarMonto" class="btn-primary">Guardar</button>
        </div>
      </div>
    </ModalForm>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProyectoStore } from '../stores/proyecto.store'
import { useCatalogoStore } from '../stores/catalogo.store'
import { BitacoraService } from '../services/bitacora.service'
import { LogMontoService } from '../services/logMonto.service'
import ModalForm from '../components/ui/ModalForm.vue'
import type { Bitacora, LogMonto, EstadoProyecto, Prioridad } from '../types'

const route = useRoute()
const router = useRouter()
const store = useProyectoStore()
const catalogoStore = useCatalogoStore()

const bitacoras = ref<Bitacora[]>([])
const logMontos = ref<LogMonto[]>([])
const estadosProyecto = ref<EstadoProyecto[]>([])
const prioridades = ref<Prioridad[]>([])

const modalSeguimiento = ref(false)
const modalMonto = ref(false)

const formSeguimiento = ref({
  fecha: '',
  id_estado_proyecto: '' as number | '',
  id_prioridad: '' as number | '',
  observaciones: ''
})

const formMonto = ref({
  fecha: '',
  monto: '' as number | '',
  observaciones: ''
})

const proyecto = computed(() => store.proyectoActual)

const ultimoMonto = computed(() => logMontos.value[0] ?? null)

const formatFecha = (fecha: string) => {
  return new Date(fecha).toLocaleDateString('es-GT')
}

const formatMonto = (monto: number) => {
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(monto)
}

const iniciales = (nombre: string) => {
  return nombre.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

const badgeEstado = (estado: string) => {
  const e = estado.toLowerCase()
  if (e.includes('abierto')) return 'badge-abierto'
  if (e.includes('suspendido')) return 'badge-suspendido'
  if (e.includes('finalizado')) return 'badge-finalizado'
  return 'inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600'
}

const cargarBitacora = async (id: number) => {
  const res = await BitacoraService.getBitacoraByProyecto(id)
  bitacoras.value = res.data
}

const cargarLogMontos = async (id: number) => {
  const res = await LogMontoService.getLogMontos(id)
  logMontos.value = res.data
}

const abrirModalSeguimiento = () => {
  formSeguimiento.value = { fecha: '', id_estado_proyecto: '', id_prioridad: '', observaciones: '' }
  modalSeguimiento.value = true
}

const abrirModalMonto = () => {
  formMonto.value = { fecha: '', monto: '', observaciones: '' }
  modalMonto.value = true
}

const abrirModalEditar = () => {
  router.push(`/proyectos?editar=${proyecto.value?.id_proyecto}`)
}

const guardarSeguimiento = async () => {
  if (!formSeguimiento.value.fecha || !formSeguimiento.value.id_estado_proyecto || !formSeguimiento.value.id_prioridad) {
    alert('Por favor completa los campos obligatorios')
    return
  }
  try {
    await BitacoraService.createBitacora({
      fecha: formSeguimiento.value.fecha,
      observaciones: formSeguimiento.value.observaciones || undefined,
      id_estado_proyecto: Number(formSeguimiento.value.id_estado_proyecto),
      id_proyecto: proyecto.value!.id_proyecto,
      id_usuario: 1, // temporal hasta tener auth
      id_prioridad: Number(formSeguimiento.value.id_prioridad),
    })
    modalSeguimiento.value = false
    await cargarBitacora(proyecto.value!.id_proyecto)
    await store.fetchProyectoById(proyecto.value!.id_proyecto)
  } catch (e) {
    alert('Error al guardar seguimiento')
  }
}

const guardarMonto = async () => {
  if (!formMonto.value.fecha || !formMonto.value.monto) {
    alert('Por favor completa los campos obligatorios')
    return
  }
  try {
    await LogMontoService.createLogMonto({
      monto: Number(formMonto.value.monto),
      observaciones: formMonto.value.observaciones || undefined,
      fecha: formMonto.value.fecha,
      id_proyecto: proyecto.value!.id_proyecto,
      id_usuario: 1, // temporal hasta tener auth
    })
    modalMonto.value = false
    await cargarLogMontos(proyecto.value!.id_proyecto)
  } catch (e) {
    alert('Error al guardar monto')
  }
}

const eliminarBitacora = async (id: number) => {
  if (!confirm('¿Estás seguro de eliminar este registro?')) return
  try {
    await BitacoraService.deleteBitacora(id)
    await cargarBitacora(proyecto.value!.id_proyecto)
  } catch (e) {
    alert('Error al eliminar registro')
  }
}

onMounted(async () => {
  const id = Number(route.params.id)
  await store.fetchProyectoById(id)
  await Promise.all([
    cargarBitacora(id),
    cargarLogMontos(id),
    catalogoStore.fetchEstadosProyecto(),
    catalogoStore.fetchPrioridades(),
  ])
  estadosProyecto.value = catalogoStore.estadosProyecto
  prioridades.value = catalogoStore.prioridades
})
</script>