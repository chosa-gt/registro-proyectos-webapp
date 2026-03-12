<template>
  <div ref="contenedor" style="position: relative;">

    <!-- Input búsqueda -->
    <div class="flex gap-2">
      <div style="flex: 1; position: relative;">
        <input
          v-model="query"
          type="text"
          :placeholder="placeholder"
          class="form-input"
          @focus="abierto = true"
          @input="abierto = true"
          autocomplete="off"
        />

        <!-- Dropdown -->
        <div
          v-if="abierto && !seleccionado"
          style="position: absolute; top: 100%; left: 0; right: 0; z-index: 50; margin-top: 4px; max-height: 180px; overflow-y: auto; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);"
        >
          <div
            v-for="item in filtrados"
            :key="item.id"
            @mousedown.prevent="seleccionar(item)"
            style="padding: 8px 12px; font-size: 13px; cursor: pointer; border-bottom: 1px solid #f3f4f6; color: #111827;"
            onmouseover="this.style.background='#f9fafb'"
            onmouseout="this.style.background='transparent'"
          >
            {{ item.label }}
          </div>
          <div
            v-if="filtrados.length === 0"
            style="padding: 8px 12px; font-size: 13px; color: #9ca3af;"
          >
            Sin resultados
          </div>
        </div>
      </div>

      <!-- Botón nueva opción -->
      <button
        v-if="permitirCrear"
        type="button"
        @click="$emit('crear')"
        style="white-space: nowrap; font-size: 12px; padding: 7px 12px; border-radius: 0.5rem; border: 1px solid #3b82f6; color: #3b82f6; background: transparent; cursor: pointer;"
      >
        + Nueva
      </button>
    </div>

    <!-- Item seleccionado -->
    <div
      v-if="seleccionado"
      style="margin-top: 6px; background: #f3f4f6; border-radius: 0.5rem; padding: 6px 10px; font-size: 12px; display: flex; justify-content: space-between; align-items: center;"
    >
      <span style="font-weight: 500; color: #111827;">{{ seleccionado.label }}</span>
      <button type="button" @click="limpiar" style="background: none; border: none; cursor: pointer; color: #6b7280; font-size: 14px; padding: 0;">✕</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

interface Opcion {
  id: number
  label: string
}

const props = defineProps<{
  opciones: Opcion[]
  placeholder?: string
  permitirCrear?: boolean
  modelValue?: number | null
}>()

const emit = defineEmits(['update:modelValue', 'crear'])

const query = ref('')
const abierto = ref(false)
const seleccionado = ref<Opcion | null>(null)
const contenedor = ref<HTMLElement | null>(null)

const filtrados = computed(() => {
  if (!query.value) return props.opciones
  return props.opciones.filter(o =>
    o.label.toLowerCase().includes(query.value.toLowerCase())
  )
})

const seleccionar = (item: Opcion) => {
  seleccionado.value = item
  query.value = ''
  abierto.value = false
  emit('update:modelValue', item.id)
}

const limpiar = () => {
  seleccionado.value = null
  query.value = ''
  emit('update:modelValue', null)
}

// Cerrar al hacer click fuera
const handleClickFuera = (e: MouseEvent) => {
  if (contenedor.value && !contenedor.value.contains(e.target as Node)) {
    abierto.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickFuera)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickFuera)
})

watch(() => props.modelValue, (val) => {
  if (!val) { seleccionado.value = null; return }
  const found = props.opciones.find(o => o.id === val)
  if (found) seleccionado.value = found
}, { immediate: true })
</script>