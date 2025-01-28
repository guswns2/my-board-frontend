<script setup lang="ts">
</script>

<template>
    <v-app-bar :elevation="2" color="#000000">
      <v-app-bar-title style="max-width: 120px"> My Board </v-app-bar-title>
      <v-btn variant="plain" :ripple="false">Home</v-btn>
      <v-btn variant="plain" :ripple="false">Hashtags</v-btn>

      <v-spacer></v-spacer>

      <v-btn variant="plain" :ripple="false">Login</v-btn>
    </v-app-bar>
</template>

<style scoped>
.v-btn:hover {
  cursor: pointer;
}
</style>
