<script setup lang="ts">
</script>

<template>
  <v-app style="background-color: #ffffff">
    <v-main>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
