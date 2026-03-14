<template>
  <div>

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Consultores</h2>
      <button @click="abrirModal()" class="btn-primary">+ Nuevo Consultor</button>
    </div>

    <!-- Buscador -->
    <div class="card mb-6">
      <input
        v-model="busqueda"
        type="text"
        class="form-input"
        placeholder="Buscar por nombre o correo..."
      />
    </div>

    <!-- Loading / Error -->
    <div v-if="loading" class="text-gray-500 text-center py-10">Cargando...</div>
    <div v-else-if="error" class="text-red-500 text-center py-10">{{ error }}</div>

    <!-- Tabla -->
    <div v-else class="card">
      <div v-if="consultoresFiltrados.length === 0" class="text-gray-400 text-center py-8">
        No hay consultores registrados.
      </div>
      <table v-else class="w-full text-sm">
        <thead>
          <tr class="text-left text-gray-500 border-b text-xs">
            <th class="pb-3 font-medium">Consultor</th>
            <th class="pb-3 font-medium">Correo</th>
            <th class="pb-3 font-medium">Teléfono</th>
            <th class="pb-3 font-medium">Usuario vinculado</th>
            <th class="pb-3 font-medium">Estado</th>
            <th class="pb-3 font-medium text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="c in consultoresFiltrados"
            :key="c.id_consultor"
            class="border-b last:border-0 hover:bg-gray-50"
          >
            <td class="py-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-semibold">
                  {{ iniciales(c.nombre) }}
                </div>
                <span class="font-medium text-gray-800">{{ c.nombre }}</span>
              </div>
            </td>
            <td class="py-3 text-gray-500 text-xs">{{ c.correo || '—' }}</td>
            <td class="py-3 text-gray-500 text-xs">{{ c.telefono || '—' }}</td>
            <td class="py-3">
              <span
                v-if="c.usuario"
                style="background: #ede9fe; color: #5b21b6; padding: 2px 8px; border-radius: 99px; font-size: 11px;"
              >
                {{ c.usuario.correo }}
              </span>
              <span v-else class="text-gray-400 text-xs">Sin usuario</span>
            </td>
            <td class="py-3">
              <span :class="c.activo ? 'badge-abierto' : 'badge-suspendido'">
                {{ c.activo ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td class="py-3 text-right space-x-2">
              <button @click="abrirModal(c)" class="text-blue-600 hover:underline text-xs">Editar</button>
              <button @click="eliminar(c.id_consultor)" class="text-red-500 hover:underline text-xs">Eliminar</button>
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
            <input v-model="form.nombre" type="text" class="form-input" placeholder="Nombre completo" />
          </div>
          <div>
            <label class="form-label">Teléfono</label>
            <input v-model="form.telefono" type="text" class="form-input" placeholder="555-0000" />
          </div>
        </div>

        <div>
          <label class="form-label">Correo</label>
          <input v-model="form.correo" type="email" class="form-input" placeholder="correo@lub.com" />
        </div>

        <div>
          <label class="form-label">
            Usuario vinculado
            <span class="text-gray-400 font-normal">(opcional)</span>
          </label>
          <SearchableSelect
            v-model="form.id_usuario"
            :opciones="usuariosOpciones"
            placeholder="Buscar usuario..."
          />
          <p class="text-xs text-gray-400 mt-1">Vincula este consultor a un usuario para que pueda iniciar sesión.</p>
        </div>

        <div>
          <label class="form-label">Estado *</label>
          <select v-model="form.activo" class="form-select">
            <option :value="true">Activo</option>
            <option :value="false">Inactivo</option>
          </select>
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
import { ConsultorService } from '../services/consultor.service'
import { UsuarioService } from '../services/usuario.service'
import ModalForm from '../components/ui/ModalForm.vue'
import SearchableSelect from '../components/ui/SearchableSelect.vue'
import type { Consultor, Usuario } from '../types'

const consultores = ref<Consultor[]>([])
const usuarios = ref<Usuario[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const busqueda = ref('')

const form = reactive({
  nombre: '',
  telefono: '',
  correo: '',
  activo: true,
  id_usuario: null as number | null,
})

const modal = reactive({
  visible: false,
  title: '',
  editId: null as number | null
})

const usuariosOpciones = computed(() =>
  usuarios.value.map(u => ({
    id: u.id_usuario,
    label: `${u.nombre} ${u.apellido} — ${u.correo}`
  }))
)

const consultoresFiltrados = computed(() => {
  if (!busqueda.value) return consultores.value
  const q = busqueda.value.toLowerCase()
  return consultores.value.filter(c =>
    c.nombre.toLowerCase().includes(q) ||
    (c.correo?.toLowerCase().includes(q))
  )
})

const iniciales = (nombre: string) => {
  return nombre.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

const cargarConsultores = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await ConsultorService.getConsultores()
    consultores.value = res.data
  } catch {
    error.value = 'Error al cargar consultores'
  } finally {
    loading.value = false
  }
}

const abrirModal = (consultor?: Consultor) => {
  modal.visible = true
  if (consultor) {
    modal.title = 'Editar Consultor'
    modal.editId = consultor.id_consultor
    form.nombre = consultor.nombre
    form.telefono = consultor.telefono || ''
    form.correo = consultor.correo || ''
    form.activo = consultor.activo
    form.id_usuario = consultor.usuario?.id_usuario ?? null
  } else {
    modal.title = 'Nuevo Consultor'
    modal.editId = null
    form.nombre = ''
    form.telefono = ''
    form.correo = ''
    form.activo = true
    form.id_usuario = null
  }
}

const cerrarModal = () => {
  modal.visible = false
}

const guardar = async () => {
  if (!form.nombre.trim()) {
    alert('El nombre es obligatorio')
    return
  }
  try {
    const payload = {
      nombre: form.nombre,
      telefono: form.telefono || undefined,
      correo: form.correo || undefined,
      activo: form.activo,
      id_usuario: form.id_usuario || undefined,
    }
    if (modal.editId) {
      await ConsultorService.updateConsultor(modal.editId, payload)
    } else {
      await ConsultorService.createConsultor(payload)
    }
    cerrarModal()
    await cargarConsultores()
  } catch {
    alert('Error al guardar consultor')
  }
}

const eliminar = async (id: number) => {
  if (!confirm('¿Estás seguro de eliminar este consultor?')) return
  try {
    await ConsultorService.deleteConsultor(id)
    await cargarConsultores()
  } catch {
    alert('Error al eliminar consultor')
  }
}

onMounted(async () => {
  await cargarConsultores()
  const res = await UsuarioService.getUsuarios()
  usuarios.value = res.data
})
</script>