<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <transition name="fade">
      <RouterView />
    </transition>
  </MainLayout>
</template>
