<script setup lang="ts">
</script>

<template>
  <div>
    <h1>App</h1>
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
</style>
