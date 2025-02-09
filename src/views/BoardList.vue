<script setup lang="ts">
import {reactive} from "vue";
import type { VDataTable } from "vuetify/components/VDataTable";
import {utils} from "../utils/utils.ts";

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
    ] as { [key:string]: string }[]
  })
}

const func = {
  onClickRow(item: any) {
    console.log("### onClickRow ###", item)
    utils.setRoute('boarddetail', {title: item.title})
  },
  onClickBoardWrite() {
    console.log("### onClickBoardWrite ###")
    utils.setRoute('boardwrite')
  }
}
</script>

<template>
  <div class="g-view-container">
    <div class="g-view-main">
      <v-row>
        <v-col>
          <v-card class="g-content-card">
            <v-row>
              <v-col cols="12">
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
                      <v-col cols="9">
                        <v-text-field
                            v-model="data.table.searchWord"
                            label="검색어"
                            variant="outlined"
                            hide-details
                            single-line
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="1">
                        <v-btn prepend-icon="mdi-magnify">조회</v-btn>
                      </v-col>
                    </v-row>
                  </template>

                  <template v-slot:item="{ item }">
                    <tr
                        @click="func.onClickRow(item)"
                        :style="{ cursor: 'pointer' }"
                    >
                      <td v-for="header in data.table.headers" style="text-align: center">
                        <template v-if="header.key === 'hashtag'">
                          <v-chip prepend-icon="mdi-pound"> {{ item[header.key] }} </v-chip>
                        </template>
                        <template v-else>
                          {{ header.key ? item[header.key] : "" }}
                        </template>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>

            <v-row style="flex-grow: 0">
              <v-spacer></v-spacer>
              <v-col cols="2" class="g-right-side-btn">
                <v-btn prepend-icon="mdi-file-document-plus-outline" @click="func.onClickBoardWrite">글쓰기</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
</style>
