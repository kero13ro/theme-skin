<script setup>
import { ref, onBeforeMount, nextTick } from "vue";
import { useMobileDetection } from "vue3-mobile-detection";
const { isMobile } = useMobileDetection();

const isInside = ref(false);
onBeforeMount(() => {
  nextTick(() => (isInside.value = true));
});

// 電腦版移動到 RankDT 內部
</script>

<template>
  <Teleport to="#RankDT" v-if="isInside" :disabled="isMobile()">
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
