<script setup>
import { ref, onBeforeMount, nextTick, watch } from "vue";

const isInsideTank = ref(false);

// onBeforeMount(() => {
//   nextTick(() => (isInsideTank.value = true));
// });
</script>

<template>
  <!-- <Teleport to="#RankDT" v-if="isInsideTank" :disabled="isMobile()"> -->
  <!-- <Teleport to="#RankDT" v-if="isInsideTank"> -->
  <Teleport >
    <div class="Winlist">
      <h3>Winlist</h3>
      <div>101</div>
      <div>102</div>
      <div>103</div>
      <div>104</div>
      <div>105</div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.Winlist {
  background-color: #ddd;
  padding: 10px;
}
</style>
