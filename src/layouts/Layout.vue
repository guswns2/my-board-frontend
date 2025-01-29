<script setup lang="ts">
import Header from "../components/Header.vue";
import {router} from "../router";
import {NavigationFailure} from "vue-router";
import {onMounted} from "vue";

onMounted(() => {
  func.setRoute("home");
})

const func = {
  setRoute(name: string) {
    console.log("############################ Route Name ############################");
    console.log(`ROUTER NAME : ${name}`);

    try {
      router.push({ name: name });
    } catch (ex) {
      const error = ex as NavigationFailure;
      console.log("############################Route Error Catch############################");
      console.log(error);
      console.log("############################Home 으로 이동############################");
      func.setRoute("layout");
    }
  }
}
</script>

<template>
  <div class="g-layout-container">
    <Header></Header>

    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" style="width: 100%; height: 100%" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.g-layout-container {
  display: flex;
  width: 100%;
  height: calc(100% - 64px);
  padding-top: 64px;
}
</style>
