<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md flex flex-col">
      <div class="p-6 border-b">
        <h1 class="text-xl font-bold text-blue-700">LUBConsultores</h1>
        <p class="text-sm text-gray-500">Registro de Proyectos</p>
      </div>
      <nav class="flex-1 p-4 space-y-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          active-class="bg-blue-100 text-blue-700 font-semibold"
        >
          <span>{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Contenido -->
    <main class="flex-1 p-8 overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { path: "/", icon: "📊", label: "Dashboard" },
  { path: "/proyectos", icon: "📁", label: "Proyectos" },
  { path: "/clientes", icon: "👥", label: "Clientes" },
  { path: "/consultores", icon: "👤", label: "Consultores" },
  { path: '/busqueda',  icon: '🔍', label: 'Búsqueda y Reportes'},
  { path: "/catalogos", icon: "🗂️", label: "Catálogos" },
];
</script>
