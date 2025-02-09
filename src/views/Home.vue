<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  console.log("### Home onMounted ###")
})
</script>

<template>
  <RouterView style="width: 100%; height: 100%"></RouterView>
</template>

<style scoped>
</style>
