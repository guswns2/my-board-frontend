<script setup lang="ts">
import Header from "../components/Header.vue";
import {router} from "../router";
import {NavigationFailure} from "vue-router";
import {onMounted} from "vue";

onMounted(() => {
  fns.setRoute("home");
})

const fns = {
  setRoute(name: string) {
    console.log("############################ Route Name ############################");
    console.log(`ROUTER NAME : ${name}`);

    try {
      router.push({ name: name, state: { state1: 100, state2: "test-2" }, replace: false });
    } catch (ex) {
      const error = ex as NavigationFailure;
      console.log("############################Route Error Catch############################");
      console.log(error);
      console.log("############################BoardList 으로 이동############################");
      fns.setRoute("layout");
    }
  }
}
</script>

<template>
  <div>
    <Header></Header>

    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" style="width: 100%; height: 100%" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
</style>
