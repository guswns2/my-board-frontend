<script setup lang="ts">
import {reactive} from "vue";
import type { VDataTable } from "vuetify/components/VDataTable";

const data = {
  table: reactive({
    searchHeader: '제목',
    searchWord: '',
    headers: [
      { key: 'title', title: '제목', align: 'center', sortable: true },
      { key: 'hashtag', title: '해시태그', align: 'center', sortable: true },
      { key: 'name', title: '작성자', align: 'center', sortable: true },
      { key: 'date', title: '작성일', align: 'center', sortable: true },
    ] as VDataTable["$props"]["headers"],
    items: [
      { title: "제목1", hashtag: "해시태그1", name: "이름1", date: "2025-02-03 09:49:01"}
    ]
  })
}

// const func = {
// }
</script>

<template>
  <div class="g-view-container">
    <div class="g-view-main">
      <v-row>
        <v-col>
          <v-card class="g-content-card">
            <v-data-table
                :headers="data.table.headers"
                :items="data.table.items"
                :search="data.table.searchWord"
                hover
            >
              <template #top>
                <v-row class="search-row">
                  <v-col cols="2">
                    <v-autocomplete
                        v-model="data.table.searchHeader"
                        label="검색항목"
                        variant="outlined"
                        hide-details
                        :items="data.table.headers"
                        item-title="title"
                        item-value="key"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                        v-model="data.table.searchWord"
                        label="검색어"
                        variant="outlined"
                        hide-details
                        single-line
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn prepend-icon="mdi-magnify">조회</v-btn>
                  </v-col>
                </v-row>
              </template>

              <template #item.hashtag="{ value }">
                <v-chip prepend-icon="mdi-pound"> {{ value }} </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
</style>
