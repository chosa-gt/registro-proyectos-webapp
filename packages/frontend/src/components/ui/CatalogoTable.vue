<template>
  <div class="bg-white rounded-xl shadow p-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-semibold text-gray-700">{{ title }}</h3>
      <button
        @click="$emit('agregar')"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
      >
        + Agregar
      </button>
    </div>

    <div
      v-if="items.length === 0"
      class="text-gray-400 text-sm text-center py-4"
    >
      No hay registros aún.
    </div>

    <table v-else class="w-full text-sm">
      <thead>
        <tr class="text-left text-gray-500 border-b">
          <th class="pb-2">{{ labelCampo }}</th>
          <th class="pb-2 text-right">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
          class="border-b last:border-0 hover:bg-gray-50"
        >
          <td class="py-2">{{ item.nombre }}</td>
          <td class="py-2 text-right space-x-2">
            <button
              @click="$emit('editar', item)"
              class="text-blue-600 hover:underline text-xs"
            >
              Editar
            </button>
            <button
              @click="$emit('eliminar', item.id)"
              class="text-red-500 hover:underline text-xs"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  labelCampo: string;
  items: { id: number; nombre: string }[];
}>();

defineEmits(["agregar", "editar", "eliminar"]);
</script>
