<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Marquee from "./components/Marquee.vue";
import GameBlock from "./components/GameBlock.vue";
import Banner from "./components/Banner.vue";
import RankDT from "./components/RankDT.vue";
import Winlist from "./components/Winlist.vue";
import Dashboard from "./components/Dashboard.vue";
import { useThemeStore } from "./stores/theme.js";

const ThemeStore = useThemeStore();
</script>

<template>
  <div class="container" :class="`tem${ThemeStore.templateId}`">
    <Header id="Header" />
    <Marquee id="Marquee" />
    <GameBlock id="GameBlock" />
    <Banner id="Banner" />
    <RankDT id="RankDT" />
    <Winlist id="Winlist" />

    <Dashboard id="Dashboard" />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

#Dashboard {
  position: fixed;
  top: 0;
  right: 0;
}
#Header {
  grid-column: 3 span;
}
.tem11, .tem12 {
  #Marquee {
    grid-row: 2 span;
  }
}
</style>
