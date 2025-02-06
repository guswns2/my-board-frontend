<script setup lang="ts">
import {router} from "../router";
import {NavigationFailure} from "vue-router";

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
    <v-app-bar :elevation="2" color="#000000">
      <v-app-bar-title style="max-width: 120px"> My Board </v-app-bar-title>
      <v-btn variant="plain" :ripple="false" @click="func.setRoute('home')">Home</v-btn>
      <v-btn variant="plain" :ripple="false" @click="func.setRoute('hashtag')">Hashtag</v-btn>

      <v-spacer></v-spacer>

      <v-btn variant="plain" :ripple="false" @click="func.setRoute('login')">Login</v-btn>
    </v-app-bar>
</template>

<style scoped>
.v-btn:hover {
  cursor: pointer;
}
</style>
