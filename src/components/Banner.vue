<script setup>
import { useThemeStore } from "../stores/theme.js";
import { ref } from "vue";

const ThemeStore = useThemeStore();
</script>

<template>
<div class="block" id="Banner">
  <h1>Banner</h1>
  <img :src="`src/template/${ThemeStore.templateId}/bg.jpg`" alt="">
</div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 300px;
}
</style>
