<script setup lang="ts">
import {reactive} from "vue";
import type { VDataTable } from "vuetify/components/VDataTable";

const data = {
  table: reactive({
    search: '',
    headers: [
      { key: 'title', title: '제목', align: 'center', sortable: true },
      { key: 'hashtag', title: '해시태그', align: 'center', sortable: false },
      { key: 'name', title: '작성자', align: 'center', sortable: true },
      { key: 'date', title: '작성일', align: 'center', sortable: true },
    ] as VDataTable["$props"]["headers"],
    items: []
  })
}

// const func = {
// }
</script>

<template>
  <div class="g-view-container">
    <div class="g-view-main">
      <v-card class="g-content-card">
        <v-row style="width: 100%">
          <v-col cols="2">
            <v-autocomplete
                variant="outlined"
                hide-details
                :items="data.table.headers"
                item-title="title"
                item-value="key"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="8  ">
            <v-text-field
                v-model="data.table.search"
                label="검색어"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn prepend-icon="mdi-magnify">조회</v-btn>
          </v-col>
        </v-row>

        <v-data-table
          :headers="data.table.headers"
          :items="data.table.items"
          :search="data.table.search"
        >
          <template #top>
            <v-autocomplete
                variant="outlined"
                :hide-details="true"
                :items="data.table.headers"
                item-title="title"
                item-value="key"
            >
            </v-autocomplete>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.v-data-table {
  border: 1px solid #000000;
}
:deep(.v-data-table-footer) {
  justify-content: center;
}

.v-row > .v-col {
  padding-top: 0;
  padding-bottom: 0;
}
.v-row > .v-col:nth-child(1) {
  padding-left: 0;
}
.v-row > .v-col:nth-last-child(1) {
  padding-right: 0;
}
</style>
