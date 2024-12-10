<script setup lang="ts">
</script>

<template>
  <div>
    header
    <v-app-bar :elevation="2" color="indigo">
      <template #prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
</style>
