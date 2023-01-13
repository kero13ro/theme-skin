<script setup>
import { useThemeStore } from "../stores/theme.js";
import { ref } from "vue";

const ThemeStore = useThemeStore();
</script>

<template>
<div class="wrap">
  <h1>Banner</h1>
  <img :src="`src/template/s${ThemeStore.templateId}/bg.jpg`" alt="">
</div>
</template>

<style lang="scss" scoped>

.wrap {
  border: 1px solid #000;
  padding: 10px;
}
img {
  width: 100%;
}
</style>
