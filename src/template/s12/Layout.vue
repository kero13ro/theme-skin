<script setup>
import WithCount from "@/components/demo/WithCount.js";
import ModalBase from "@/components/demo/ModalBase.vue";
const WithCountModal = WithCount(ModalBase);
</script>

<template>
  <div>
    <div class="block">
      <h1>fishing block</h1>
    </div>
    <slot></slot>

    <WithCountModal />
  </div>
</template>

<style lang="scss" scoped>
.block {
  grid-column: 3 span;
}
</style>
