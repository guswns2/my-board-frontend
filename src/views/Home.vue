<script setup lang="ts">
// const func = {
// }
</script>

<template>
  <div class="g-view-container">
    <div class="g-view-main">
      <v-card class="g-content-card">
        <v-data-table></v-data-table>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.g-view-container {
  display: flex;
  padding: 15px;
  width: calc(100% - 30px) !important;
  height: calc(100% - 30px) !important;
}
.g-view-main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.g-content-card {
  display: flex;
  flex: 1 1 auto;
  padding: 15px;
}

.v-data-table {
  height: 100%;
  border: 1px solid #000000;
}
:deep(.v-data-table-footer) {
  justify-content: center;
}
</style>
