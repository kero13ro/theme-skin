<script setup>
import { useThemeStore } from "../stores/theme.js";

const theme = useThemeStore();
</script>

<template>
  <div class="dashboard">
    <div>
      <el-radio-group
        :model-value="theme.templateId"
        @update:modelValue="e => theme.templateId = e"
        size="large"
      >
        <el-radio-button :label="11" />
        <el-radio-button :label="12" />
        <el-radio-button :label="13" />
      </el-radio-group>
    </div>

    <div v-if="theme.templateId === 11">
      <el-radio-group
        :model-value="theme.skin"
        @update:modelValue="e => theme.skin = e"
        size="large"
      >
        <el-radio-button label="red" />
        <el-radio-button label="blue" />
      </el-radio-group>
    </div>

    <div v-if="theme.templateId === 12">
      <el-radio-group
        :model-value="theme.skin"
        @update:modelValue="e => theme.skin = e"
        size="large"
      >
        <el-radio-button label="gold" />
        <el-radio-button label="black" />
      </el-radio-group>
    </div>
  </div>
</template>

<style lang="scss">
.dashboard {
  padding: 10px;
  background-color: #fff;
  > div:first-child .el-radio-group {
    margin-bottom: 10px;
  }
  box-shadow: 0 0 10px rgba(#000000, 0.1);
}
</style>
