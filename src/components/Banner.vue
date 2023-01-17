<script setup>
// 動態載入圖片
import { useThemeStore } from "../stores/theme.js";
import { ref } from "vue";

const theme = useThemeStore();
</script>

<template>
<div class="block" id="Banner">
  <h1>Banner</h1>
  <img :src="`src/template/${theme.templateId}/${theme.skin}/bg.jpg`" alt="">
</div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 300px;
}
</style>
