<script setup lang="ts">
const fns = {
  clickBtn() {
    console.log("clickBtn");
  }
}
</script>

<template>
  <div>
    <h4>Home</h4>
    <v-btn @click="fns.clickBtn">
      Button
    </v-btn>
  </div>
</template>

<style scoped>
</style>
