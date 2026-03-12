<template>
  <div>

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Clientes</h2>
      <button @click="abrirModal()" class="btn-primary">+ Nuevo Cliente</button>
    </div>

    <!-- Buscador -->
    <div class="card mb-6">
      <input
        v-model="busqueda"
        type="text"
        class="form-input"
        placeholder="Buscar por nombre, empresa o correo..."
      />
    </div>

    <!-- Loading / Error -->
    <div v-if="loading" class="text-gray-500 text-center py-10">Cargando...</div>
    <div v-else-if="error" class="text-red-500 text-center py-10">{{ error }}</div>

    <!-- Tabla -->
    <div v-else class="card">
      <div v-if="clientesFiltrados.length === 0" class="text-gray-400 text-center py-8">
        No hay clientes registrados.
      </div>
      <table v-else class="w-full text-sm">
        <thead>
          <tr class="text-left text-gray-500 border-b text-xs">
            <th class="pb-3 font-medium">Nombre</th>
            <th class="pb-3 font-medium">Empresa</th>
            <th class="pb-3 font-medium">Correo</th>
            <th class="pb-3 font-medium">Teléfono</th>
            <th class="pb-3 font-medium">Estado</th>
            <th class="pb-3 font-medium text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="c in clientesFiltrados"
            :key="c.id_cliente"
            class="border-b last:border-0 hover:bg-gray-50"
          >
            <td class="py-3 font-medium text-gray-800">{{ c.nombre }} {{ c.apellido }}</td>
            <td class="py-3 text-gray-500 text-xs">{{ c.empresa.nombre }}</td>
            <td class="py-3 text-gray-500 text-xs">{{ c.correo || '—' }}</td>
            <td class="py-3 text-gray-500 text-xs">{{ c.telefono || '—' }}</td>
            <td class="py-3">
              <span :class="c.estado_cliente.estado.toLowerCase() === 'activo' ? 'badge-abierto' : 'badge-suspendido'">
                {{ c.estado_cliente.estado }}
              </span>
            </td>
            <td class="py-3 text-right space-x-2">
              <button @click="abrirModal(c)" class="text-blue-600 hover:underline text-xs">Editar</button>
              <button @click="eliminar(c.id_cliente)" class="text-red-500 hover:underline text-xs">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <ModalForm v-if="modal.visible" :title="modal.title" @close="cerrarModal">
      <div class="space-y-3">

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="form-label">Nombre *</label>
            <input v-model="form.nombre" type="text" class="form-input" placeholder="Nombre" />
          </div>
          <div>
            <label class="form-label">Apellido *</label>
            <input v-model="form.apellido" type="text" class="form-input" placeholder="Apellido" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="form-label">Correo</label>
            <input v-model="form.correo" type="email" class="form-input" placeholder="correo@ejemplo.com" />
          </div>
          <div>
            <label class="form-label">Teléfono</label>
            <input v-model="form.telefono" type="text" class="form-input" placeholder="555-0000" />
          </div>
        </div>

        <!-- Empresa con SearchableSelect -->
        <div>
          <label class="form-label">Empresa *</label>
          <SearchableSelect
            v-model="form.id_empresa"
            :opciones="empresasOpciones"
            placeholder="Buscar empresa..."
            :permitir-crear="true"
            @crear="mostrarFormEmpresa = !mostrarFormEmpresa"
          />
        </div>

        <!-- Mini form nueva empresa -->
        <div v-if="mostrarFormEmpresa" class="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
          <p class="text-xs font-medium text-gray-500">Nueva empresa</p>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="form-label">Nombre *</label>
              <input v-model="formEmpresa.nombre" type="text" class="form-input" placeholder="Nombre empresa" />
            </div>
            <div>
              <label class="form-label">Dirección</label>
              <input v-model="formEmpresa.direccion" type="text" class="form-input" placeholder="Dirección" />
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button @click="mostrarFormEmpresa = false" class="btn-secondary text-xs">Cancelar</button>
            <button @click="crearEmpresa" class="btn-primary text-xs">Crear empresa</button>
          </div>
        </div>

        <!-- Estado -->
        <div>
          <label class="form-label">Estado *</label>
          <SearchableSelect
            v-model="form.id_estado_cliente"
            :opciones="estadosOpciones"
            placeholder="Buscar estado..."
          />
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <button @click="cerrarModal" class="btn-secondary">Cancelar</button>
          <button @click="guardar" class="btn-primary">Guardar</button>
        </div>

      </div>
    </ModalForm>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { ClienteService } from '../services/cliente.service'
import { CatalogoService } from '../services/catalogo.service'
import ModalForm from '../components/ui/ModalForm.vue'
import SearchableSelect from '../components/ui/SearchableSelect.vue'
import type { Cliente, Empresa, EstadoCliente } from '../types'

const clientes = ref<Cliente[]>([])
const empresas = ref<Empresa[]>([])
const estadosCliente = ref<EstadoCliente[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const busqueda = ref('')
const mostrarFormEmpresa = ref(false)

const form = reactive({
  nombre: '',
  apellido: '',
  correo: '',
  telefono: '',
  id_empresa: null as number | null,
  id_estado_cliente: null as number | null,
})

const formEmpresa = reactive({ nombre: '', direccion: '' })

const modal = reactive({
  visible: false,
  title: '',
  editId: null as number | null
})

const empresasOpciones = computed(() =>
  empresas.value.map(e => ({ id: e.id_empresa, label: e.nombre }))
)

const estadosOpciones = computed(() =>
  estadosCliente.value.map(e => ({ id: e.id_estado_cliente, label: e.estado }))
)

const clientesFiltrados = computed(() => {
  if (!busqueda.value) return clientes.value
  const q = busqueda.value.toLowerCase()
  return clientes.value.filter(c =>
    `${c.nombre} ${c.apellido}`.toLowerCase().includes(q) ||
    c.empresa.nombre.toLowerCase().includes(q) ||
    (c.correo?.toLowerCase().includes(q))
  )
})

const cargarClientes = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await ClienteService.getClientes()
    clientes.value = res.data
  } catch {
    error.value = 'Error al cargar clientes'
  } finally {
    loading.value = false
  }
}

const cargarCatalogos = async () => {
  const [emp, est] = await Promise.all([
    CatalogoService.getEmpresas(),
    CatalogoService.getEstadosCliente(),
  ])
  empresas.value = emp.data
  estadosCliente.value = est.data
}

const abrirModal = (cliente?: Cliente) => {
  mostrarFormEmpresa.value = false
  modal.visible = true
  if (cliente) {
    modal.title = 'Editar Cliente'
    modal.editId = cliente.id_cliente
    form.nombre = cliente.nombre
    form.apellido = cliente.apellido
    form.correo = cliente.correo || ''
    form.telefono = cliente.telefono || ''
    form.id_empresa = cliente.empresa.id_empresa
    form.id_estado_cliente = cliente.estado_cliente.id_estado_cliente
  } else {
    modal.title = 'Nuevo Cliente'
    modal.editId = null
    form.nombre = ''
    form.apellido = ''
    form.correo = ''
    form.telefono = ''
    form.id_empresa = null
    form.id_estado_cliente = null
  }
}

const cerrarModal = () => {
  modal.visible = false
  mostrarFormEmpresa.value = false
}

const crearEmpresa = async () => {
  if (!formEmpresa.nombre.trim()) return
  try {
    const res = await CatalogoService.createEmpresa({
      nombre: formEmpresa.nombre,
      direccion: formEmpresa.direccion || undefined
    })
    empresas.value.push(res.data)
    form.id_empresa = res.data.id_empresa
    formEmpresa.nombre = ''
    formEmpresa.direccion = ''
    mostrarFormEmpresa.value = false
  } catch {
    alert('Error al crear empresa')
  }
}

const guardar = async () => {
  if (!form.nombre || !form.apellido || !form.id_empresa || !form.id_estado_cliente) {
    alert('Por favor completa los campos obligatorios')
    return
  }
  try {
    const payload = {
      nombre: form.nombre,
      apellido: form.apellido,
      correo: form.correo || undefined,
      telefono: form.telefono || undefined,
      id_empresa: form.id_empresa,
      id_estado_cliente: form.id_estado_cliente,
    }
    if (modal.editId) {
      await ClienteService.updateCliente(modal.editId, payload)
    } else {
      await ClienteService.createCliente(payload)
    }
    cerrarModal()
    await cargarClientes()
  } catch {
    alert('Error al guardar cliente')
  }
}

const eliminar = async (id: number) => {
  if (!confirm('¿Estás seguro de eliminar este cliente?')) return
  try {
    await ClienteService.deleteCliente(id)
    await cargarClientes()
  } catch {
    alert('Error al eliminar cliente')
  }
}

onMounted(async () => {
  await Promise.all([cargarClientes(), cargarCatalogos()])
})
</script>