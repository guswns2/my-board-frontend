<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="g-view-container">
    <div class="g-view-main">
      <v-row>
        <v-col>
          <v-card class="g-content-card">
            Board Detail {{route.params.title}}
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
</style>
