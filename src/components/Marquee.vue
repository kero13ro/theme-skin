<script setup>
import { useThemeStore } from "../stores/theme.js";

const ThemeStore = useThemeStore();
const { colors } = ThemeStore;
</script>

<template>
  <div class="block" id="Marquee">
    <h1>Marquee</h1>
    {{ main }}
    {{ dark }}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
      quibusdam fuga blanditiis! Similique distinctio vero eveniet ea corrupti.
      Animi, mollitia?
    </p>
  </div>
</template>

<style lang="scss" scoped>
.block {
  color: v-bind("colors.primary.main");
  background-color: v-bind("colors.primary.light");
}
</style>
