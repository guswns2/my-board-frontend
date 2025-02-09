<script setup lang="ts">
import Header from "../components/Header.vue";
import {onMounted} from "vue";
import {utils} from "../utils/utils.ts";

onMounted(() => {
  console.log("### Layout onMounted ###")
  utils.setRoute("boardlist");
})
</script>

<template>
  <div class="g-layout-container">
    <Header></Header>

    <RouterView style="width: 100%; height: 100%" />
  </div>
</template>

<style scoped>
</style>
